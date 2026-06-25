// app/contact/page.tsx
"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaSpinner } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";

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
      }, 3000);

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
    <section id="contact" className="relative min-h-screen bg-black py-20 px-4">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-light uppercase tracking-[0.3em] text-white/80">
            GET IN TOUCH
          </p>
          <div className="mx-auto mt-2 h-[2px] w-8 bg-blue-500" />
          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-7xl lg:text-8xl">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Have a project in mind or want to collaborate? Feel free to reach
            out – I’m always open to new opportunities.
          </p>
        </div>

        {/* Contact Card */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-5 md:p-12">
            {/* Left: Info (pre-filled with developer's details) */}
            <div className="space-y-6 md:col-span-2">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Let’s connect
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  I’m always interested in hearing about new projects,
                  collaborations, or just a friendly chat.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="text"><IoMdMail size={16}/></span>
                  <a
                    href="mailto:amitprajapati4353@gmail.com"
                    className="hover:text-blue-400 transition"
                  >
                    amitprajapati4353@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className=" text-sm"><FaPhoneAlt /></span>
                  <a
                    href="tel:+918368619855"
                    className="hover:text-blue-400 transition"
                  >
                    +91 83686 19855
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className=""><FaLocationDot /></span>
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Social Icons (working) */}
              <div className="flex flex-col space-y-5 w-fit">
                <a
                  href="https://github.com/amit4353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-blue-400 transition duration-300 hover:scale-110"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-prajapati-189256330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-blue-400 transition duration-300 hover:scale-110"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://wa.me/918368619855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-blue-400 transition duration-300 hover:scale-110"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a
                  href="mailto:amitprajapati4353@gmail.com"
                  className="text-white/50 hover:text-blue-400 transition duration-300 hover:scale-110"
                >
                  <SiGmail size={16} />
                </a>
              </div>
            </div>

            {/* Right: Form (empty for visitor) */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
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
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
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
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
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
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full rounded border border-blue-500/50 px-6 py-3 text-sm font-medium text-white transition ${
                  isSending
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
                  "Send Message"
                )}
              </button>
              {status === "success" && (
                <p className="text-sm leading-relaxed text-green-400">
                  ✅ Thank you! Your message has been sent successfully.
                  <br />
                  I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">
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