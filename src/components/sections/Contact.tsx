// app/contact/page.tsx
"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaSpinner } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Contact() {
  // Form fields are empty for visitor to fill
  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<
    "success" | "error" | null
  >(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };


  return (
    <section id="contact" className="relative min-h-screen bg-black px-4 py-16 md:py-20" >
      <Image
        src="/images/contact-bg.jpeg"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/90" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" /> */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-light uppercase tracking-[0.3em] text-white/80">
            GET IN TOUCH
          </p>
          <div className="mx-auto mt-2 h-[2px] w-8 bg-blue-500" />
          <h2 className="mt-6 text-4xl font-black uppercase text-white sm:text-5xl md:text-7xl lg:text-8xl">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Have a project in mind or want to collaborate? Feel free to reach
            out – I’m always open to new opportunities.
          </p>
        </div>

        {/* Contact Card */}
        <div className="overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.04] backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-12 p-6 sm:p-8 md:grid-cols-5 md:gap-10 md:p-12">
            {/* Left: Info (pre-filled with developer's details) */}
            <div className="flex h-full flex-col justify-between md:col-span-2">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                  AVAILABLE FOR WORK
                </p>

                <h3 className="mt-3 text-3xl font-black text-white leading-tight">
                  Let's Build <br />
                  Something Great.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Whether you have an idea, a project or simply want to connect,
                  I'd love to hear from you.
                  Let's create something meaningful together.
                </p>
              </div>

              <div className="space-y-4 mb-4">
                {/* Email */}
                <div className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/5 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <IoMdMail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Email
                    </p>
                    <a
                      href="mailto:amitprajapati4353@gmail.com"
                      className="text-sm text-white hover:text-blue-400"
                    >
                      amitprajapati4353@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/8">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Phone
                    </p>
                    <a
                      href="tel:+918368619855"
                      className="text-sm text-white hover:text-blue-400"
                    >
                      +91 83686 19855
                    </a>
                  </div>
                </div>

                {/* location */}
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <FaLocationDot size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Location
                    </p>

                    <p className="text-sm text-white">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-auto">
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/40">
                  FOLLOW ME
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/amitprajapati-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amitprajapati-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <FaLinkedin size={16} />
                  </a>
                  <a
                    href="https://wa.me/918368619855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                  <a
                    href="mailto:amitprajapati4353@gmail.com"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <SiGmail size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
              <div className="mb-8">

                <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                  SEND MESSAGE
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  Let's Talk.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  Tell me about your project, idea or opportunity. I'll get back to you as soon as possible.
                </p>

              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition duration-300 hover:border-white/20 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition duration-300 hover:border-white/20 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  placeholder="Tell me about your project..."
                  className="mt-1 w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition duration-300 hover:border-white/20 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full rounded-xl border border-blue-500/50 px-6 py-4 text-sm font-medium text-white transition ${isSending
                  ? "cursor-not-allowed bg-white/10 opacity-60"
                  : "bg-white/5 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  }`}
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message →"
                )}
              </button>
              <p className="text-center text-xs text-white/40">
                Usually replies within 24 hours.
              </p>
              {status === "success" && (
                <p className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
                  ✅ Thank you! Your message has been sent successfully.
                  <br />
                  I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  ❌ Unable to send your message. Please try again in a few moments.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}