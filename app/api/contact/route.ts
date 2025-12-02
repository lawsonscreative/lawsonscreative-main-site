import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  websiteUrl?: string;
  message: string;
  budget?: string;
  timeline?: string;
  brandingContent?: string[];
};

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Format the branding/content and add-ons for email
    const brandingItems = data.brandingContent?.filter(item =>
      ['logo-branding', 'copy-content', 'need-branding-help', 'need-copy-help'].includes(item)
    ) || [];

    const addOnItems = data.brandingContent?.filter(item =>
      ['hosting-maintenance', 'content-updates', 'seo-local', 'brand-print'].includes(item)
    ) || [];

    const formatCheckboxes = (items: string[]) => {
      const labels: Record<string, string> = {
        'logo-branding': 'Has logo/branding',
        'copy-content': 'Has copy/content',
        'need-branding-help': 'Needs branding help',
        'need-copy-help': 'Needs copy/content help',
        'hosting-maintenance': 'Hosting & Maintenance',
        'content-updates': 'Content Updates',
        'seo-local': 'SEO & Local Visibility',
        'brand-print': 'Brand & Print Collateral',
      };
      return items.map(item => labels[item] || item).join(', ') || 'None selected';
    };

    const budgetLabels: Record<string, string> = {
      'starter-website': 'Starter Website – from £500',
      'website-rescue': 'Website Rescue – from £1,295',
      'new-business-website': 'New Business Website – from £1,295',
      'ongoing-support': 'Ongoing Support – from £30/month',
      'custom': 'Not sure / Multiple services',
    };

    const timelineLabels: Record<string, string> = {
      'asap': 'ASAP',
      'within-1-month': 'Within 1 month',
      '1-3-months': '1–3 months',
      '3-plus-months': '3+ months',
      'just-exploring': 'Just exploring options',
    };

    // Send email to you
    const { error } = await resend.emails.send({
      from: 'Lawsons Creative <hello@lawsonscreative.co.uk>',
      to: ['hello@lawsonscreative.co.uk'],
      replyTo: data.email,
      subject: `New enquiry from ${data.name} (${data.businessName})`,
      html: `
        <h2>New Website Enquiry</h2>

        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Business:</strong> ${data.businessName}</p>
        <p><strong>Current Website:</strong> ${data.websiteUrl || 'None'}</p>

        <h3>Project Details</h3>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>

        <p><strong>Budget:</strong> ${data.budget ? budgetLabels[data.budget] || data.budget : 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${data.timeline ? timelineLabels[data.timeline] || data.timeline : 'Not specified'}</p>

        <h3>Branding & Content</h3>
        <p>${formatCheckboxes(brandingItems)}</p>

        <h3>Add-on Services Interested In</h3>
        <p>${formatCheckboxes(addOnItems)}</p>

        <hr>
        <p style="color: #666; font-size: 12px;">This enquiry was submitted via the Lawsons Creative contact form.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
