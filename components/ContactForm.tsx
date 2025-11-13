'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  websiteUrl?: string;
  businessType: string;
  projectType: string;
  timeline: string;
  message: string;
  budget: string;
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
      // Using Formspree endpoint - replace with your actual endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
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
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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
          {...register('businessName', { required: 'Business name is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        />
        {errors.businessName && (
          <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
        )}
      </div>

      {/* Current Website URL */}
      <div>
        <label htmlFor="websiteUrl" className="block text-sm font-semibold text-navy mb-2">
          Current Website URL (if applicable)
        </label>
        <input
          type="url"
          id="websiteUrl"
          {...register('websiteUrl')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
          placeholder="https://"
        />
        <p className="text-slate text-sm mt-1 italic">(If you don&apos;t have one yet, just leave this blank)</p>
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="businessType" className="block text-sm font-semibold text-navy mb-2">
          What type of business? *
        </label>
        <select
          id="businessType"
          {...register('businessType', { required: 'Please select a business type' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        >
          <option value="">Select...</option>
          <option value="pet-care">Pet Care</option>
          <option value="fitness">Fitness & Wellness</option>
          <option value="beauty">Beauty & Personal Care</option>
          <option value="trades">Trades & Services</option>
          <option value="creative">Creative Services</option>
          <option value="automotive">Automotive Services</option>
          <option value="professional">Professional Services</option>
          <option value="home-garden">Home & Garden</option>
          <option value="other">Other</option>
        </select>
        {errors.businessType && (
          <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-semibold text-navy mb-2">
          What do you need? *
        </label>
        <select
          id="projectType"
          {...register('projectType', { required: 'Please select a project type' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        >
          <option value="">Select...</option>
          <option value="new-website">New Website</option>
          <option value="redesign">Website Redesign</option>
          <option value="maintenance">Website Maintenance</option>
          <option value="not-sure">Not Sure</option>
        </select>
        {errors.projectType && (
          <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
        )}
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-semibold text-navy mb-2">
          Project Timeline
        </label>
        <select
          id="timeline"
          {...register('timeline')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        >
          <option value="asap">ASAP</option>
          <option value="1-3-months">1-3 Months</option>
          <option value="just-exploring">Just Exploring</option>
        </select>
        <p className="text-slate text-sm mt-1 italic">(If you&apos;re not sure, choose &quot;Just exploring&quot; and we&apos;ll talk it through)</p>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', {
            required: 'Please tell us about your project',
            minLength: {
              value: 50,
              message: 'Please provide at least 50 characters',
            },
          })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-semibold text-navy mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          {...register('budget')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-colors"
        >
          <option value="not-sure">Not Sure</option>
          <option value="500-800">£500-£800</option>
          <option value="1200-2000">£1,200-£2,000</option>
          <option value="2500-4000">£2,500-£4,000</option>
          <option value="4000+">£4,000+</option>
        </select>
        <p className="text-slate text-sm mt-1 italic">(This helps me recommend the right package. We&apos;ll always confirm a fixed quote before starting)</p>
      </div>

      {/* Submit Button */}
      <div>
        <p className="text-slate text-sm text-center mb-4 italic">
          No spam, no pushy sales — just an honest conversation about whether I can help.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg">
          <p className="font-semibold">Thanks! We&apos;ll get back to you within 24 hours.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-500 text-red-600 px-4 py-3 rounded-lg">
          <p className="font-semibold">
            Oops! Something went wrong. Please try again or email us directly at{' '}
            <a href="mailto:hello@lawsonscreative.co.uk" className="underline">
              hello@lawsonscreative.co.uk
            </a>
          </p>
        </div>
      )}
    </form>
  );
}
