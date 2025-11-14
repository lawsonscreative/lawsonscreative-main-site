'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  websiteUrl?: string;
  message: string;
  budget: string;
  timeline: string;
  brandingContent?: string[];
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/movyernr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Track form submission as conversion
        if (typeof window !== 'undefined' && window.plausible) {
          window.plausible('Form Submission', { props: { form: 'Contact Form' } });
        }
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <p className="text-sm text-slate mb-6">
        * Required fields
      </p>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        />
      </div>

      {/* Business Name */}
      <div>
        <label htmlFor="businessName" className="block text-sm font-semibold text-navy mb-2">
          Business Name *
        </label>
        <input
          type="text"
          id="businessName"
          required
          {...register('businessName', { required: 'Business name is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
          aria-invalid={errors.businessName ? 'true' : 'false'}
          aria-describedby={errors.businessName ? 'businessName-error' : undefined}
        />
        {errors.businessName && (
          <p id="businessName-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.businessName.message}
          </p>
        )}
      </div>

      {/* Current Website URL */}
      <div>
        <label htmlFor="websiteUrl" className="block text-sm font-semibold text-navy mb-2">
          Current website URL
        </label>
        <p className="text-slate text-sm mb-2">Optional - leave blank if you don't have one</p>
        <input
          type="url"
          id="websiteUrl"
          {...register('websiteUrl')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
          placeholder="https://"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          {...register('message', {
            required: 'Please tell us about your project',
            minLength: {
              value: 20,
              message: 'Please provide at least 20 characters',
            },
          })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors resize-none"
          placeholder="Tell us about your business, what you need, and what you hope to achieve with your website..."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-semibold text-navy mb-2">
          Approximate budget
        </label>
        <p className="text-slate text-sm mb-2">Helps us recommend the right package - all budgets welcome</p>
        <select
          id="budget"
          {...register('budget')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        >
          <option value="">Select...</option>
          <option value="under-1000">Under £1,000</option>
          <option value="1000-2000">£1,000–£2,000</option>
          <option value="2000-4000">£2,000–£4,000</option>
          <option value="4000+">£4,000+</option>
        </select>
        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-semibold text-navy mb-2">
          When do you need the website?
        </label>
        <p className="text-slate text-sm mb-2">Helps us schedule - choose 'Just exploring' if you're not sure</p>
        <select
          id="timeline"
          {...register('timeline')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        >
          <option value="">Select...</option>
          <option value="asap">ASAP</option>
          <option value="within-1-month">Within 1 month</option>
          <option value="1-3-months">1–3 months</option>
          <option value="3-plus-months">3+ months</option>
          <option value="just-exploring">Just exploring options</option>
        </select>
        {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>}
      </div>

      {/* Branding/Content */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-3">
          Do you have existing branding/content? (optional)
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="logo-branding"
              {...register('brandingContent')}
              className="w-4 h-4 text-lime border-gray-300 rounded focus:ring-lime focus:ring-2"
            />
            <span className="ml-2 text-slate">I have a logo/branding</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="copy-content"
              {...register('brandingContent')}
              className="w-4 h-4 text-lime border-gray-300 rounded focus:ring-lime focus:ring-2"
            />
            <span className="ml-2 text-slate">I have most of the copy/content</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="need-branding-help"
              {...register('brandingContent')}
              className="w-4 h-4 text-lime border-gray-300 rounded focus:ring-lime focus:ring-2"
            />
            <span className="ml-2 text-slate">I need help with branding</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="need-copy-help"
              {...register('brandingContent')}
              className="w-4 h-4 text-lime border-gray-300 rounded focus:ring-lime focus:ring-2"
            />
            <span className="ml-2 text-slate">I need help with copy/content</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
        <p className="text-slate text-sm text-center mt-4 leading-relaxed">
          We respect your privacy. Your information will only be used to respond to your enquiry and will never be shared with third parties.
        </p>
        <p className="text-slate text-sm text-center mt-2 leading-relaxed">
          We'll respond within 24 hours (usually much faster).
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-lime/10 border-2 border-lime text-navy px-6 py-5 rounded-lg" role="status" aria-live="polite">
          <p className="font-bold text-lg mb-2">Thanks! Your message has been sent.</p>
          <p className="text-slate leading-relaxed">
            We'll respond within 24 hours (usually much faster). Please check your inbox (and your spam/junk folder) for our reply.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 text-red-600 px-6 py-5 rounded-lg">
          <p className="font-bold text-lg mb-2">Oops! Something went wrong.</p>
          <p className="leading-relaxed">
            Please try again or email me directly at{' '}
            <a href="mailto:hello@lawsonscreative.co.uk" className="underline font-semibold">
              hello@lawsonscreative.co.uk
            </a>
          </p>
        </div>
      )}
    </form>
  );
}
