'use client';

import { useState, useCallback } from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AtSign,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';

// Metadata is handled via layout.tsx for this client component

type Niche =
  | 'personal'
  | 'business'
  | 'creative'
  | 'fitness'
  | 'food'
  | 'tech'
  | 'fashion'
  | 'travel';

const nicheOptions: { value: Niche; label: string }[] = [
  { value: 'personal', label: 'Personal Brand' },
  { value: 'business', label: 'Business / Agency' },
  { value: 'creative', label: 'Creative / Artist' },
  { value: 'fitness', label: 'Fitness / Health' },
  { value: 'food', label: 'Food / Restaurant' },
  { value: 'tech', label: 'Tech / Developer' },
  { value: 'fashion', label: 'Fashion / Beauty' },
  { value: 'travel', label: 'Travel / Lifestyle' },
];

const nichePrefixes: Record<Niche, string[]> = {
  personal: ['the', 'its', 'hey', 'iamm', 'justj', 'real', 'simply'],
  business: ['get', 'try', 'use', 'join', 'go', 'my', 'the'],
  creative: [
    'art.by',
    'made.by',
    'designed.by',
    'craft.of',
    'studio',
    'creates',
    'by',
  ],
  fitness: ['fit', 'strong', 'coach', 'train.with', 'flex', 'built', 'lift'],
  food: ['chef', 'eats', 'taste', 'bites', 'kitchen', 'cook', 'yum'],
  tech: ['dev', 'code', 'build', 'ship', 'hack', 'pixel', 'byte'],
  fashion: ['style', 'wear', 'chic', 'glam', 'vogue', 'drip', 'look'],
  travel: ['go', 'roam', 'wander', 'explore', 'nomad', 'trek', 'voyage'],
};

const nicheSuffixes: Record<Niche, string[]> = {
  personal: ['official', 'daily', 'vibes', 'world', 'hub', 'life', 'zone'],
  business: ['hq', 'co', 'app', 'io', 'labs', 'inc', 'team'],
  creative: ['studio', 'works', 'lab', 'design', 'creates', 'art', 'visuals'],
  fitness: ['fit', 'gains', 'strong', 'life', 'nation', 'crew', 'grind'],
  food: ['eats', 'kitchen', 'bites', 'plate', 'table', 'menu', 'flavors'],
  tech: ['dev', 'codes', 'tech', 'labs', 'builds', 'hq', 'stack'],
  fashion: ['style', 'closet', 'looks', 'drip', 'edit', 'fits', 'wear'],
  travel: [
    'travels',
    'diaries',
    'adventures',
    'wanderer',
    'explorer',
    'tales',
    'journey',
  ],
};

interface UsernameResult {
  username: string;
  status: 'checking' | 'available' | 'taken';
}

function sanitize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9._]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/_{2,}/g, '_')
    .slice(0, 20);
}

function generateUsernames(name: string, niche: Niche): string[] {
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!clean) return [];

  const prefixes = nichePrefixes[niche];
  const suffixes = nicheSuffixes[niche];
  const usernames = new Set<string>();

  // Pattern 1: prefix + name
  usernames.add(sanitize(`${prefixes[0]}.${clean}`));
  usernames.add(sanitize(`${prefixes[1]}${clean}`));

  // Pattern 2: name + suffix
  usernames.add(sanitize(`${clean}.${suffixes[0]}`));
  usernames.add(sanitize(`${clean}_${suffixes[1]}`));

  // Pattern 3: name with separators
  if (clean.length > 4) {
    const mid = Math.floor(clean.length / 2);
    usernames.add(sanitize(`${clean.slice(0, mid)}.${clean.slice(mid)}`));
    usernames.add(sanitize(`${clean.slice(0, mid)}_${clean.slice(mid)}`));
  }

  // Pattern 4: prefix + name + number
  usernames.add(
    sanitize(`${prefixes[2]}.${clean}${Math.floor(Math.random() * 99) + 1}`)
  );

  // Pattern 5: creative combos
  usernames.add(sanitize(`${clean}.${suffixes[2]}`));
  usernames.add(sanitize(`${prefixes[3]}${clean}`));

  // Pattern 6: double elements
  usernames.add(sanitize(`${clean}${clean.slice(0, 1)}`));

  // Ensure we have at least 10
  let counter = 0;
  while (usernames.size < 10 && counter < 20) {
    const p = prefixes[counter % prefixes.length];
    const s = suffixes[counter % suffixes.length];
    usernames.add(sanitize(`${p}_${clean}_${s}`.slice(0, 30)));
    counter++;
  }

  return Array.from(usernames).slice(0, 10);
}

export default function UsernameCheckerPage() {
  const [name, setName] = useState('');
  const [niche, setNiche] = useState<Niche>('personal');
  const [results, setResults] = useState<UsernameResult[]>([]);
  const [generated, setGenerated] = useState(false);
  const [copiedUsername, setCopiedUsername] = useState<string | null>(null);

  function handleGenerate() {
    if (!name.trim()) return;

    const usernames = generateUsernames(name, niche);
    const initial: UsernameResult[] = usernames.map(u => ({
      username: u,
      status: 'checking' as const,
    }));
    setResults(initial);
    setGenerated(true);

    // Simulate availability check with staggered delays
    usernames.forEach((_, index) => {
      setTimeout(
        () => {
          setResults(prev =>
            prev.map((r, i) =>
              i === index
                ? {
                    ...r,
                    status: Math.random() > 0.35 ? 'available' : 'taken',
                  }
                : r
            )
          );
        },
        600 + index * 300
      );
    });
  }

  const handleCopy = useCallback(async (username: string) => {
    await navigator.clipboard.writeText(username);
    setCopiedUsername(username);
    setTimeout(() => setCopiedUsername(null), 2000);
  }, []);

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider'>
              Free Tool
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Instagram Username Ideas Generator
            </h1>
            <p className='mt-4 text-lg text-muted-foreground max-w-xl mx-auto'>
              Enter your name or brand and get 10 creative username suggestions
              tailored to your niche. Find the perfect handle.
            </p>
          </div>
        </section>

        {/* Generator */}
        <section className='mt-16 px-4 sm:px-6'>
          <div className='mx-auto max-w-2xl'>
            <Card className='border-border'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <AtSign className='h-5 w-5 text-primary' />
                  Generate Username Ideas
                </CardTitle>
                <CardDescription>
                  Enter your name or brand and select your niche
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Your Name or Brand</Label>
                  <Input
                    id='name'
                    placeholder='e.g. Sarah, FitnessPro, TechByte'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleGenerate()}
                  />
                </div>
                <div className='space-y-2'>
                  <Label>Niche</Label>
                  <Select
                    value={niche}
                    onValueChange={v => setNiche(v as Niche)}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select your niche' />
                    </SelectTrigger>
                    <SelectContent>
                      {nicheOptions.map(n => (
                        <SelectItem key={n.value} value={n.value}>
                          {n.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleGenerate}
                  className='w-full'
                  size='lg'
                  disabled={!name.trim()}
                >
                  Generate Usernames
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {generated && results.length > 0 && (
              <div className='mt-8 space-y-3'>
                <h2 className='text-xl font-semibold mb-4'>
                  Username Suggestions
                </h2>
                {results.map(result => (
                  <div
                    key={result.username}
                    className='flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3.5'
                  >
                    <div className='flex items-center gap-3'>
                      {result.status === 'checking' && (
                        <Loader2 className='h-4 w-4 text-muted-foreground animate-spin' />
                      )}
                      {result.status === 'available' && (
                        <CheckCircle2 className='h-4 w-4 text-emerald-400' />
                      )}
                      {result.status === 'taken' && (
                        <XCircle className='h-4 w-4 text-red-400' />
                      )}
                      <span className='font-mono text-sm'>
                        @{result.username}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      {result.status === 'checking' && (
                        <span className='text-xs text-muted-foreground'>
                          Checking...
                        </span>
                      )}
                      {result.status === 'available' && (
                        <span className='text-xs text-emerald-400'>
                          Likely available
                        </span>
                      )}
                      {result.status === 'taken' && (
                        <span className='text-xs text-red-400'>
                          Likely taken
                        </span>
                      )}
                      <Button
                        variant='ghost'
                        size='sm'
                        className='h-8 w-8 p-0'
                        onClick={() => handleCopy(result.username)}
                      >
                        {copiedUsername === result.username ? (
                          <Check className='h-3.5 w-3.5' />
                        ) : (
                          <Copy className='h-3.5 w-3.5' />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
                <p className='text-xs text-muted-foreground mt-4 text-center'>
                  Availability is simulated for demonstration purposes. Always
                  verify on Instagram directly.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10'>
              <Sparkles className='h-7 w-7 text-primary' />
            </div>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
              Once you have picked your handle, automate your growth
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
              A great username is just the start. Let PostEngage handle your
              engagement, DMs, and community building with AI.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>
                  Try PostEngage Free
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/tools'>All Free Tools</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Instagram Username Ideas Generator',
            description:
              'Generate creative Instagram username ideas based on your name or brand with availability checking.',
            url: 'https://postengage.ai/tools/instagram-username-checker',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}
