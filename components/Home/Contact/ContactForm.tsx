"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const inputClasses =
  "w-full bg-black/40 text-white placeholder:text-white/25 px-4 py-3 border border-white/15 outline-none focus:border-white focus:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition";

const labelClasses = "block text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1.5";

const Field = ({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) => (
  <div className="flex-1 w-full">
    <label htmlFor={id} className={labelClasses}>
      {label}
    </label>
    {children}
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const ContactForm = () => {
  const [submissionState, setSubmissionState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const payload = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;

    if (!response.ok) {
      setSubmissionState({
        type: "error",
        message: payload?.error || "Unable to send your message right now. Please try again.",
      });
      return;
    }

    setSubmissionState({
      type: "success",
      message: "Message sent successfully. I’ll get back to you soon.",
    });
    reset();
  };

  return (
    <div className="shadow-2xl">
      <div className="d2-exotic px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-bold uppercase tracking-[0.2em] text-lg">Transmission</h3>
          <p className="!text-white/80 text-xs uppercase tracking-widest">Send a message · replies within a day or two</p>
        </div>
        <div className="flex items-end gap-[3px] h-5 shrink-0" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="d2-signal w-1 bg-white" style={{ height: `${(i + 1) * 25}%`, animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>

      <div className="bg-[#0d1117]/90 border border-white/10 border-t-0 p-5 sm:p-8">
        {submissionState && (
          <div
            role="status"
            className={`mb-6 px-4 py-3 border-l-2 bg-black/40 text-sm ${
              submissionState.type === "success" ? "border-green-400 text-green-300" : "border-red-400 text-red-300"
            }`}
          >
            {submissionState.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <Field id="firstName" label="First Name" error={errors.firstName?.message}>
              <input id="firstName" {...register("firstName")} type="text" autoComplete="given-name" className={inputClasses} />
            </Field>
            <Field id="lastName" label="Last Name" error={errors.lastName?.message}>
              <input id="lastName" {...register("lastName")} type="text" autoComplete="family-name" className={inputClasses} />
            </Field>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <Field id="email" label="Email" error={errors.email?.message}>
              <input id="email" {...register("email")} type="email" autoComplete="email" className={inputClasses} />
            </Field>
            <Field id="phone" label="Phone (optional)" error={errors.phone?.message}>
              <input id="phone" {...register("phone")} type="tel" autoComplete="tel" className={inputClasses} />
            </Field>
          </div>
          <Field id="message" label="Message" error={errors.message?.message}>
            <textarea
              id="message"
              {...register("message")}
              rows={6}
              placeholder="Project, role, or just saying hi…"
              className={`${inputClasses} resize-none`}
            />
            <p className={`text-right text-[10px] tracking-widest mt-1 ${messageLength > 5000 ? "text-red-400" : "text-white/30"}`}>
              {messageLength} / 5000
            </p>
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 border border-white/70 text-white text-sm font-semibold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
