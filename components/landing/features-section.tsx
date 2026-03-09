'use client';

import { Shield, Gauge, Eye, LucideIcon } from 'lucide-react';
import { useTrackSectionView } from '@/hooks/use-track-section-view';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureItem({ feature, id }: { feature: Feature; id: string }) {
  const ref = useTrackSectionView(id);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className='text-center'>
      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
        <feature.icon className='w-6 h-6 text-primary' />
      </div>
      <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
      <p className='text-sm text-muted-foreground'>{feature.description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const ref = useTrackSectionView('features_section');
  const features = [
    {
      icon: Shield,
      title: "You're Always in Control",
      description:
        'Review pending replies, adjust AI behavior, set boundaries. Pause anytime. Your account, your rules.',
      id: 'feature_control_view',
    },
    {
      icon: Gauge,
      title: 'Speed = Algorithm Love',
      description:
        'Replies in seconds, not hours. Instagram rewards fast engagement with more reach. Simple math.',
      id: 'feature_speed_view',
    },
    {
      icon: Eye,
      title: 'Track What Matters',
      description:
        'See response rates, follower growth, credit usage. Know exactly how automation impacts your growth.',
      id: 'feature_analytics_view',
    },
  ];

  return (
    <section ref={ref} className='py-16 sm:py-24 border-t border-border'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, i) => (
            <FeatureItem key={i} feature={feature} id={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
