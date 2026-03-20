'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Clock,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const subjectOptions = [
  'General enquiry',
  'Technical support',
  'Billing & credits',
  'Partnership / agency',
  'Feature request',
  'Bug report',
  'Press & media',
  'Other',
];

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@postengage.ai',
    href: 'mailto:support@postengage.ai',
    badge: '24h reply',
    badgeClass: 'bg-green-500/10 text-green-400 border-green-500/20',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@postengage.ai',
    href: 'https://www.instagram.com/postengage.ai/',
    badge: 'DM us',
    badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'PostEngageAI',
    href: 'https://www.linkedin.com/company/postengageai',
    badge: 'Partnerships',
    badgeClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    value: '@PostEngageAI',
    href: 'https://twitter.com/PostEngageAI',
    badge: 'Follow us',
    badgeClass: 'bg-muted/50 text-muted-foreground border-border',
  },
];

const quickLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog & Docs', href: '/blog' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Security', href: '/security' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/v1/marketing/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.subject || undefined,
          company: formData.company || undefined,
          phone: formData.phone || undefined,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          (body as { message?: string })?.message ?? 'Failed to send message'
        );
      }
      setSubmittedName(formData.name);
      setSubmittedEmail(formData.email);
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='py-24 px-4 sm:px-6 scroll-mt-20'>
      <div className='mx-auto max-w-6xl'>
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className='mb-14 text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground'>
            <MessageCircle className='h-3.5 w-3.5' />
            Get in touch
          </div>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-balance'>
            We&apos;d love to hear from you
          </h2>
          <p className='mt-4 text-muted-foreground text-pretty max-w-xl mx-auto'>
            Have a question about features, pricing, or anything else? Our team
            replies within 24 hours on business days.
          </p>
        </div>

        {/* ── Channel cards row ──────────────────────────────────────────── */}
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 mb-14'>
          {contactChannels.map(ch => {
            const Icon = ch.icon;
            return (
              <Link
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  ch.href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className='group flex flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-card/80'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10'>
                    <Icon className='h-3.5 w-3.5 text-primary' />
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${ch.badgeClass}`}
                  >
                    {ch.badge}
                  </span>
                </div>
                <div>
                  <p className='text-sm font-semibold'>{ch.label}</p>
                  <p className='text-xs text-primary truncate'>{ch.value}</p>
                </div>
                <div className='flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors mt-auto'>
                  Open <ArrowRight className='h-3 w-3' />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Main grid: form + sidebar ──────────────────────────────────── */}
        <div className='grid gap-10 lg:grid-cols-[1fr_300px]'>
          {/* Form ──────────────────────────────────────────────────────── */}
          <div className='rounded-2xl border border-border bg-card p-8'>
            <h3 className='text-xl font-bold mb-1'>Send us a message</h3>
            <p className='text-sm text-muted-foreground mb-7'>
              Fill in the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            {submitted ? (
              /* ── Success state ─────────────────────────────────────── */
              <div className='rounded-xl border border-green-500/30 bg-green-500/5 p-10 text-center'>
                <div className='flex justify-center mb-4'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10'>
                    <CheckCircle2 className='h-8 w-8 text-green-400' />
                  </div>
                </div>
                <h4 className='text-xl font-bold mb-2'>Message sent! 🎉</h4>
                <p className='text-sm text-muted-foreground mb-1'>
                  Thanks,{' '}
                  <span className='text-foreground font-medium'>
                    {submittedName.split(' ')[0]}
                  </span>
                  ! We&apos;ve received your message.
                </p>
                <p className='text-sm text-muted-foreground'>
                  A confirmation has been sent to{' '}
                  <span className='text-foreground font-medium'>
                    {submittedEmail}
                  </span>
                  . We&apos;ll reply within 24 hours.
                </p>
                <Button
                  variant='outline'
                  size='sm'
                  className='mt-6'
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      company: '',
                      phone: '',
                      message: '',
                    });
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              /* ── Form ──────────────────────────────────────────────── */
              <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Name + Email */}
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-name'
                      className='text-sm font-medium'
                    >
                      Your name <span className='text-red-400'>*</span>
                    </label>
                    <Input
                      id='contact-name'
                      name='name'
                      placeholder='Sanjeev Sharma'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='bg-background border-border h-11'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-email'
                      className='text-sm font-medium'
                    >
                      Email address <span className='text-red-400'>*</span>
                    </label>
                    <Input
                      id='contact-email'
                      name='email'
                      type='email'
                      placeholder='you@example.com'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='bg-background border-border h-11'
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-subject'
                    className='text-sm font-medium'
                  >
                    Topic
                  </label>
                  <select
                    id='contact-subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0'
                  >
                    <option value=''>Select a topic...</option>
                    {subjectOptions.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company + Phone */}
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-company'
                      className='text-sm font-medium'
                    >
                      Company{' '}
                      <span className='text-muted-foreground font-normal text-xs'>
                        (optional)
                      </span>
                    </label>
                    <Input
                      id='contact-company'
                      name='company'
                      placeholder='Acme Inc.'
                      value={formData.company}
                      onChange={handleChange}
                      className='bg-background border-border h-11'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-phone'
                      className='text-sm font-medium'
                    >
                      Phone{' '}
                      <span className='text-muted-foreground font-normal text-xs'>
                        (optional)
                      </span>
                    </label>
                    <Input
                      id='contact-phone'
                      name='phone'
                      type='tel'
                      placeholder='+91 98765 43210'
                      value={formData.phone}
                      onChange={handleChange}
                      className='bg-background border-border h-11'
                    />
                  </div>
                </div>

                {/* Message */}
                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-message'
                    className='text-sm font-medium'
                  >
                    Message <span className='text-red-400'>*</span>
                  </label>
                  <Textarea
                    id='contact-message'
                    name='message'
                    placeholder='Tell us what you need help with, or what you would like to know...'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='bg-background border-border resize-none'
                  />
                </div>

                {error && (
                  <div className='rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400'>
                    {error}
                  </div>
                )}

                <Button
                  type='submit'
                  size='lg'
                  className='w-full sm:w-auto px-10'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar ───────────────────────────────────────────────────── */}
          <div className='space-y-5'>
            {/* Response times */}
            <div className='rounded-xl border border-border bg-card p-5'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10'>
                  <Clock className='h-3.5 w-3.5 text-primary' />
                </div>
                <h4 className='font-semibold text-sm'>Response times</h4>
              </div>
              <ul className='space-y-2.5 text-sm'>
                <li className='flex items-start gap-2'>
                  <Zap className='h-3.5 w-3.5 text-yellow-400 mt-0.5 shrink-0' />
                  <span className='text-muted-foreground'>
                    <span className='text-foreground font-medium'>
                      Technical issues
                    </span>{' '}
                    — a few hours
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='h-3.5 w-3.5 text-green-400 mt-0.5 shrink-0' />
                  <span className='text-muted-foreground'>
                    <span className='text-foreground font-medium'>
                      Email & form
                    </span>{' '}
                    — within 24 hours
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Mail className='h-3.5 w-3.5 text-primary mt-0.5 shrink-0' />
                  <span className='text-muted-foreground'>
                    <span className='text-foreground font-medium'>
                      Instagram DM
                    </span>{' '}
                    — same day
                  </span>
                </li>
              </ul>
            </div>

            {/* Trust */}
            <div className='rounded-xl border border-border bg-card p-5'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10'>
                  <ShieldCheck className='h-3.5 w-3.5 text-primary' />
                </div>
                <h4 className='font-semibold text-sm'>
                  You&apos;re in good hands
                </h4>
              </div>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                {[
                  'Official Meta API partner',
                  'Available in 21 countries',
                  'Free tier — no card required',
                  'Your data is never sold',
                  'Trusted by 1,250+ creators',
                ].map(point => (
                  <li key={point} className='flex items-center gap-2'>
                    <CheckCircle2 className='h-3 w-3 text-green-400 shrink-0' />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className='rounded-xl border border-border bg-card p-5'>
              <h4 className='font-semibold text-sm mb-3'>Quick links</h4>
              <ul className='grid grid-cols-2 gap-x-4 gap-y-2'>
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors'
                    >
                      <ArrowRight className='h-3 w-3 shrink-0' />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
