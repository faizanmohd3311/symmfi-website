import React from "react";

export const WaitlistForm: React.FC = () => {
  return (
    <form
      name="waitlist"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      {/* Required for Netlify */}
      <input type="hidden" name="form-name" value="waitlist" />

      {/* Honeypot field for spam */}
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="w-full rounded-lg border border-[#1F2937] bg-[#0A1A2F] px-3 py-2 text-sm text-white outline-none focus:border-[#4ABF9A]"
      />

      <button
        type="submit"
        className="shrink-0 rounded-lg bg-[#4ABF9A] px-4 py-2 text-sm font-semibold text-[#0A1A2F]"
      >
        Join waitlist
      </button>
    </form>
  );
};
