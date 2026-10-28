"use client";
import React, { useState } from "react";
import {
  Copy,
  Check,
  ArrowUpRight,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "aayushbatra33@gmail.com";
  const phone = "+91 8397082347";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in your name, email, and message.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setSuccessMessage(
          data.message ||
            "Thank you for reaching out! Your message has been sent successfully. I will get back to you shortly."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Unable to send message. Please reach out directly."
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please email directly or try again."
      );
    }
  };

  return (
    <section
      className="py-28 px-6 max-w-7xl mx-auto border-t border-[var(--border)] relative"
      id="contact"
    >
      {/* Background ambient aura */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[var(--accent)]" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Initiate Contact
          </h2>
        </div>
        <span className="font-mono text-xs text-[var(--text-secondary)]">
          CONNECT // 07
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct info, Quick Copy, Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Let’s build something remarkable.
            </h3>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8">
              Whether you have an upcoming project, an engineering role, or just want to chat about modern full-stack web architectures — drop a message in the form and it will be sent directly to my inbox.
            </p>

            {/* Availability Pill */}
            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] mb-8 flex items-center gap-3 text-xs font-mono">
              <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">
                  Response Window: &lt; 24 Hours
                </p>
                <p className="text-[var(--text-secondary)] text-[11px]">
                  Based in Delhi, India (UTC+5:30)
                </p>
              </div>
            </div>

            {/* Quick Action Copy Badges */}
            <div className="space-y-3 mb-8">
              <button
                onClick={handleCopyEmail}
                type="button"
                className="w-full flex items-center justify-between p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 bg-[var(--bg-secondary)] transition-all font-mono text-xs group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-primary)] text-[var(--accent)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[var(--text-primary)]">{email}</span>
                </div>
                {copiedEmail ? (
                  <span className="text-emerald-500 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex items-center gap-1">
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </span>
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                type="button"
                className="w-full flex items-center justify-between p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 bg-[var(--bg-secondary)] transition-all font-mono text-xs group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-primary)] text-[var(--accent)]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[var(--text-primary)]">{phone}</span>
                </div>
                {copiedPhone ? (
                  <span className="text-emerald-500 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex items-center gap-1">
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </span>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-3">
                Social Profiles
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/aayush-batra-475ab9201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs bg-[var(--bg-secondary)]"
                >
                  <FaLinkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href="https://github.com/BatraAayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs bg-[var(--bg-secondary)]"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href="https://twitter.com/aayush_batra__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs bg-[var(--bg-secondary)]"
                >
                  <FaTwitter className="w-3.5 h-3.5" />
                  <span>Twitter</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border)] shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
              <div>
                <h4 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  Send a Direct Message
                </h4>
                <p className="text-xs font-mono text-[var(--text-secondary)] mt-0.5">
                  Delivered straight to aayushbatra33@gmail.com
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[10px] font-mono text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Mailbox</span>
              </div>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h5 className="text-2xl font-bold text-[var(--text-primary)]">
                  Message Dispatched!
                </h5>
                <p className="text-sm text-[var(--text-secondary)] max-w-md">
                  {successMessage}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-full font-mono text-xs bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-[var(--text-secondary)] uppercase mb-2"
                    >
                      Your Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none font-mono text-xs text-[var(--text-primary)] transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-[var(--text-secondary)] uppercase mb-2"
                    >
                      Your Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none font-mono text-xs text-[var(--text-primary)] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs text-[var(--text-secondary)] uppercase mb-2"
                  >
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-Stack Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none font-mono text-xs text-[var(--text-primary)] transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-[var(--text-secondary)] uppercase mb-2"
                  >
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, tech stack requirements, or project vision..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none font-mono text-xs text-[var(--text-primary)] transition-colors resize-none"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-mono flex items-start gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <p>{errorMessage}</p>
                      <a
                        href={`mailto:${email}?subject=${encodeURIComponent(
                          formData.subject || "Portfolio Contact"
                        )}&body=${encodeURIComponent(
                          formData.message + "\n\nFrom: " + formData.name
                        )}`}
                        className="underline font-semibold mt-1 inline-block"
                      >
                        Click here to send via your email client instead ›
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-[var(--accent)] hover:opacity-95 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}