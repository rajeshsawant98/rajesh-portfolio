"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const inputClasses =
  "flex-1 bg-gray-50 dark:bg-black text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 dark:border-gray-600/10 outline-none w-full focus:border-accent-purple transition-colors";

const ContactForm = () => {
  const [submissionState, setSubmissionState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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
    <div className="bg-card-dark rounded-lg p-4 sm:p-10">
      <h2 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Connect
      </h2>
      <p className="text-gray-600 dark:text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Have a project in mind or just want to say hi? Fill out the form below
        and I&apos;ll get back to you as soon as possible.
      </p>

      {submissionState && (
        <div
          className={`mt-4 p-3 rounded-md border text-sm ${
            submissionState.type === "success"
              ? "bg-green-100 dark:bg-green-900/50 border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-300"
              : "bg-red-100 dark:bg-red-900/50 border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-300"
          }`}
        >
          {submissionState.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex-1 w-full">
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className={inputClasses}
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex-1 w-full">
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className={inputClasses}
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex-1 w-full">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={inputClasses}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="flex-1 w-full">
            <input
              {...register("phone")}
              type="text"
              placeholder="Phone Number"
              className={inputClasses}
            />
          </div>
        </div>
        <div className="mt-5">
          <textarea
            {...register("message")}
            rows={7}
            placeholder="Message"
            className={`${inputClasses} resize-none`}
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3.5 bg-accent-purple text-white hover:bg-accent-purple-hover cursor-pointer transition-all duration-150 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
