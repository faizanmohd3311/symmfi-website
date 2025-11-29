import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { SymmFiLogo } from './SymmFiLogo';

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  // Allow Netlify to handle the real form POST (NO preventDefault)
  setSubmitted(true); // triggers "Message Sent!" UI

  // Optional: scroll into view or show toast
  // Optional: disable form fields now
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-2xl">
          <div>
            <SymmFiLogo variant="default" size="normal" />
            <p className="text-[#0A1A2F]/60 mt-2">We'd love to hear from you</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-[#0A1A2F]" />
          </button>
        </div>

        {/* Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />

<p className="hidden">
  <label>
    Don’t fill this out: <input name="bot-field" />
  </label>
</p>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-[#0A1A2F] mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#0A1A2F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ABF9A] focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#0A1A2F] mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#0A1A2F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ABF9A] focus:border-transparent transition-all"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-[#0A1A2F] mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="I'm interested in..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#0A1A2F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ABF9A] focus:border-transparent transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-[#0A1A2F] mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#0A1A2F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ABF9A] focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0A1A2F] text-white rounded-xl hover:bg-[#0A1A2F]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? (
              <>
                <span>Message Sent!</span>
                <span className="text-[#4ABF9A]">✓</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </button>

          <p className="text-center text-[#0A1A2F]/50 text-sm">
            We'll get back to you within 24 hours
          </p>
        </form>
      </div>
    </div>
  );
}
