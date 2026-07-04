"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/retroui/Button";
import { Loader } from "@/components/retroui/Loader";
import { cn } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClassName = cn(
  "w-full border-2 border-black bg-card px-3.5 py-2.5 text-sm text-foreground",
  "placeholder:text-muted-foreground",
  "transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
);

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "");

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in every field.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Couldn't reach the server. Please try again or email directly.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real visitors, bots tend to fill it in */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={fieldClassName}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClassName}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What's on your mind?"
          className={cn(fieldClassName, "resize-none")}
          disabled={status === "submitting"}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader variant="secondary" size="sm" />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>

        {status === "success" && (
          <p className="text-sm font-medium text-primary sm:text-right">
            Message sent — thanks for reaching out!
          </p>
        )}

        {status === "error" && (
          <p className="text-sm font-medium text-destructive sm:text-right">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
