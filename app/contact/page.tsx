'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  MessageSquare,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  HelpCircle,
  Loader2,
} from 'lucide-react';

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@postengage.ai',
    href: 'mailto:support@postengage.ai',
    description: 'Best for billing, account, or technical issues.',
    badge: 'Replies in 24h',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@postengage.ai',
    href: 'https://www.instagram.com/postengage.ai/',
    description: 'Follow us and DM for quick questions.',
    badge: 'DM us',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'PostEngageAI',
    href: 'https://www.linkedin.com/company/postengageai',
    description: 'Connect for partnerships and enterprise enquiries.',
    badge: 'Partnerships',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    value: '@PostEngageAI',
    href: 'https://twitter.com/PostEngageAI',
    description: 'Quick updates, announcements, and public support.',
    badge: 'Follow us',
    badgeColor: 'bg-muted/50 text-muted-foreground border-border',
  },
];

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

const faqs = [
  {
    question: 'How fast will I get a reply?',
    answer:
      'We aim to reply to all email and form submissions within 24 hours on business days. Urgent technical issues are typically addressed within a few hours.',
  },
  {
    question: 'I need help setting up my automation — is there support?',
    answer:
      'Yes! Email support@postengage.ai with your account details and what you are trying to set up. Our team will walk you through it.',
  },
  {
    question: 'I want to use PostEngage.ai for my clients. Who do I contact?',
    answer:
      'For agency and reseller enquiries, reach out via LinkedIn or select "Partnership / agency" in the form above. We have dedicated agency plans.',
  },
  {
    question: 'Is there a live chat?',
    answer:
      'We do not offer live chat currently, but email and DM support are monitored closely throughout the day. Most tickets are resolved same-day.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    // Simulate a small delay — replace with real API call when ready
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-4 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground'>
              Contact
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-balance'>
              We&apos;d love to hear from you
            </h1>
            <p className='mt-6 text-lg text-muted-foreground text-pretty'>
              Whether you have a question about features, pricing, need help
              getting set up, or want to explore a partnership — our team is
              here and replies fast.
            </p>
          </div>
        </section>

        {/* ── Contact Channel Cards ──────────────────────────── */}
        <section className='mt-16 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {contactChannels.map(channel => {
                const Icon = channel.icon;
                return (
                  <Link
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:bg-card/80'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10'>
                        <Icon className='h-4 w-4 text-primary' />
                      </div>
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${channel.badgeColor}`}>
                        {channel.badge}
                      </span>
                    </div>
                    <p className='font-semibold text-sm'>{channel.label}</p>
                    <p className='text-xs text-primary mt-0.5'>{channel.value}</p>
                    <p className='mt-2 text-xs text-muted-foreground leading-relaxed'>
                      {channel.description}
                    </p>
                    <div className='mt-3 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors'>
                      <span>Open</span>
                      <ArrowRight className='h-3 w-3' />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Form + Trust sidebar ──────────────────────────── */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-4xl'>
            <div className='grid gap-12 lg:grid-cols-[1fr_320px]'>

              {/* Form */}
              <div>
                <h2 className='text-2xl font-bold mb-2'>Send us a message</h2>
                <p className='text-sm text-muted-foreground mb-8'>
                  Fill in the form below and we will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className='rounded-xl border border-green-500/30 bg-green-500/5 p-10 text-center'>
                    <div className='flex justify-center mb-4'>
                      <CheckCircle2 className='h-12 w-12 text-green-400' />
                    </div>
                    <h3 className='text-xl font-bold mb-2'>Message sent!</h3>
                    <p className='text-muted-foreground text-sm'>
                      Thanks for reaching out, {formData.name.split(' ')[0]}. We will reply
                      to <span className='text-foreground font-medium'>{formData.email}</span> within
                      24 hours.
                    </p>
                    <Button
                      variant='outline'
                      className='mt-6'
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-5'>
                    {/* Name + Email row */}
                    <div className='grid gap-4 sm:grid-cols-2'>
                      <div className='space-y-1.5'>
                        <label htmlFor='name' className='text-sm font-medium'>
                          Your name <span className='text-red-400'>*</span>
                        </label>
                        <Input
                          id='name'
                          name='name'
                          placeholder='Sanjeev Sharma'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className='bg-card border-border h-11'
                        />
                      </div>
                      <div className='space-y-1.5'>
                        <label htmlFor='email' className='text-sm font-medium'>
                          Email address <span className='text-red-400'>*</span>
                        </label>
                        <Input
                          id='email'
                          name='email'
                          type='email'
                          placeholder='you@example.com'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className='bg-card border-border h-11'
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className='space-y-1.5'>
                      <label htmlFor='subject' className='text-sm font-medium'>
                        Subject
                      </label>
                      <select
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        className='w-full h-11 rounded-md border border-border bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0'
                      >
                        <option value=''>Select a topic...</option>
                        {subjectOptions.map(opt => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className='space-y-1.5'>
                      <label htmlFor='message' className='text-sm font-medium'>
                        Message <span className='text-red-400'>*</span>
                      </label>
                      <Textarea
                        id='message'
                        name='message'
                        placeholder='Tell us what you need help with, or what you would like to know...'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className='bg-card border-border resize-none'
                      />
                    </div>

                    <Button
                      type='submit'
                      size='lg'
                      className='w-full sm:w-auto px-10'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                          Sending...
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

              {/* Trust sidebar */}
              <div className='space-y-6'>
                {/* Response time */}
                <div className='rounded-xl border border-border bg-card p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10'>
                      <Clock className='h-4 w-4 text-primary' />
                    </div>
                    <h3 className='font-semibold text-sm'>Response times</h3>
                  </div>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-start gap-2'>
                      <Zap className='h-3.5 w-3.5 text-yellow-400 mt-0.5 shrink-0' />
                      <span className='text-muted-foreground'>
                        <span className='text-foreground font-medium'>Technical issues</span>
                        {' '}— within a few hours
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle2 className='h-3.5 w-3.5 text-green-400 mt-0.5 shrink-0' />
                      <span className='text-muted-foreground'>
                        <span className='text-foreground font-medium'>Email & form</span>
                        {' '}— within 24 hours
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <MessageSquare className='h-3.5 w-3.5 text-primary mt-0.5 shrink-0' />
                      <span className='text-muted-foreground'>
                        <span className='text-foreground font-medium'>Instagram DM</span>
                        {' '}— same day
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Trust points */}
                <div className='rounded-xl border border-border bg-card p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10'>
                      <ShieldCheck className='h-4 w-4 text-primary' />
                    </div>
                    <h3 className='font-semibold text-sm'>You are in good hands</h3>
                  </div>
                  <ul className='space-y-3 text-sm text-muted-foreground'>
                    {[
                      'Official Meta API partner',
                      'Available in 21 countries',
                      'Free tier — no card required',
                      'Your data is never sold',
                      'Trusted by 1,250+ creators',
                    ].map(point => (
                      <li key={point} className='flex items-center gap-2'>
                        <CheckCircle2 className='h-3.5 w-3.5 text-green-400 shrink-0' />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick links */}
                <div className='rounded-xl border border-border bg-card p-6'>
                  <h3 className='font-semibold text-sm mb-3'>Quick links</h3>
                  <ul className='space-y-2 text-sm'>
                    {[
                      { label: 'Help docs', href: '/blog' },
                      { label: 'Pricing', href: '/pricing' },
                      { label: 'Security', href: '/security' },
                      { label: 'Privacy Policy', href: '/privacy' },
                      { label: 'Terms of Service', href: '/terms' },
                    ].map(link => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className='flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors'
                        >
                          <ArrowRight className='h-3 w-3' />
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

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='flex items-center gap-3 mb-10'>
              <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10'>
                <HelpCircle className='h-4 w-4 text-primary' />
              </div>
              <h2 className='text-2xl font-bold'>Common questions</h2>
            </div>

            <div className='space-y-4'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6'
                >
                  <h3 className='font-semibold mb-2'>{faq.question}</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='rounded-2xl border border-primary/30 bg-primary/5 p-12'>
              <h2 className='text-2xl font-bold mb-3'>
                Not sure yet? Try it free first.
              </h2>
              <p className='text-muted-foreground mb-6'>
                Auto DM and auto comment reply are free forever — no credit card, no trial expiry.
                Connect your Instagram in 3 minutes.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
                <Button asChild size='lg'>
                  <Link href='/#waitlist'>
                    Start free
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button asChild variant='outline' size='lg'>
                  <Link href='/pricing'>See pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <LandingFooter />
    </div>
  );
}
