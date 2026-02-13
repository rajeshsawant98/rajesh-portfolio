"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClasses =
  "flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-600/10 outline-none w-full focus:border-accent-purple transition-colors";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const mailtoLink = `mailto:rajeshsawant98@gmail.com?subject=Portfolio Contact from ${data.firstName} ${data.lastName}&body=${encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\n\n${data.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-card-dark rounded-lg p-4 sm:p-10">
      <h2 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Connect
      </h2>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Have a project in mind or just want to say hi? Fill out the form below
        and I&apos;ll get back to you as soon as possible.
      </p>

      {submitted && (
        <div className="mt-4 p-3 bg-green-900/50 border border-green-500/30 rounded-md text-green-300 text-sm">
          Message prepared! Check your email client to send.
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
