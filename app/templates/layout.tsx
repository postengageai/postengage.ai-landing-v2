import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Automation Templates — Ready-to-Use Flows | PostEngage.ai',
  description:
    'Browse 15+ pre-built Instagram automation templates. DM flows, comment replies, lead capture, giveaways, and more. Start automating in minutes.',
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
