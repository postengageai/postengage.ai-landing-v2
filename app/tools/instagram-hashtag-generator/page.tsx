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
  Hash,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  TrendingUp,
  BarChart3,
  Target,
} from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';

// Metadata is handled via layout.tsx for this client component

interface HashtagTier {
  label: string;
  icon: typeof TrendingUp;
  description: string;
  reach: string;
  hashtags: string[];
}

const hashtagDatabase: Record<string, HashtagTier[]> = {
  fitness: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#fitness',
        '#gym',
        '#workout',
        '#fitfam',
        '#motivation',
        '#health',
        '#bodybuilding',
        '#training',
        '#fitnessmotivation',
        '#gymlife',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#fitnessjourney',
        '#homeworkout',
        '#fitlife',
        '#workoutmotivation',
        '#strengthtraining',
        '#fitnessgirl',
        '#gymmotivation',
        '#healthylifestyle',
        '#fitnessgoals',
        '#personaltrainer',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#fitnesstransformation2026',
        '#homegymsetup',
        '#functionalfitness',
        '#strengthandconditioning',
        '#fitover30',
        '#naturalbodybuilding',
        '#calisthenicsworkout',
        '#fitnessaccountability',
        '#morningworkoutroutine',
        '#fitnesscommunitygoals',
      ],
    },
  ],
  fashion: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#fashion',
        '#style',
        '#ootd',
        '#fashionblogger',
        '#outfitoftheday',
        '#streetstyle',
        '#fashionstyle',
        '#instafashion',
        '#fashionista',
        '#lookoftheday',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#fashioninspo',
        '#casualstyle',
        '#outfitideas',
        '#fashiondaily',
        '#sustainablefashion',
        '#styleinspo',
        '#fashionlovers',
        '#whatiworetoday',
        '#minimalfashion',
        '#effortlessstyle',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#capsulewardrobeideas',
        '#thriftedoutfit',
        '#slowfashionmovement',
        '#fashionover40',
        '#modestfashioninspo',
        '#ethicalfashionbrand',
        '#vintagefinds2026',
        '#workwearstyle',
        '#colorblockingoutfit',
        '#petitestyle',
      ],
    },
  ],
  food: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#food',
        '#foodie',
        '#foodporn',
        '#instafood',
        '#foodphotography',
        '#yummy',
        '#homemade',
        '#delicious',
        '#foodstagram',
        '#cooking',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#foodblogger',
        '#healthyfood',
        '#homecooking',
        '#foodlover',
        '#mealprep',
        '#comfortfood',
        '#plantbased',
        '#bakingathome',
        '#recipeshare',
        '#foodphotographer',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#weeknightdinners',
        '#budgetmeals',
        '#airfryerrecipes',
        '#mealprepping2026',
        '#onepotrecipe',
        '#seasonalcooking',
        '#farmtotable',
        '#sourdoughbaker',
        '#fermentedfoods',
        '#foodsciencefacts',
      ],
    },
  ],
  tech: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#technology',
        '#tech',
        '#programming',
        '#coding',
        '#developer',
        '#software',
        '#ai',
        '#startup',
        '#innovation',
        '#webdevelopment',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#techlife',
        '#devlife',
        '#codelife',
        '#javascript',
        '#python',
        '#reactjs',
        '#machinelearning',
        '#saas',
        '#techstartup',
        '#cloudcomputing',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#100daysofcode2026',
        '#indiehackers',
        '#buildinpublic',
        '#devcommunity',
        '#nextjsdeveloper',
        '#typescripttips',
        '#rustlang',
        '#devopsengineering',
        '#opensourcecontributor',
        '#techfounderlife',
      ],
    },
  ],
  business: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#business',
        '#entrepreneur',
        '#marketing',
        '#success',
        '#motivation',
        '#startup',
        '#branding',
        '#smallbusiness',
        '#hustle',
        '#money',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#businessowner',
        '#onlinebusiness',
        '#digitalmarketing',
        '#growthmindset',
        '#businesstips',
        '#entrepreneurlife',
        '#socialmediamarketing',
        '#ecommerce',
        '#businessgrowth',
        '#personalbranding',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#solopreneurlife',
        '#saasfounder',
        '#bootstrappedstartup',
        '#buildingabusiness2026',
        '#emailmarketingtips',
        '#contentmarketingstrategy',
        '#b2bmarketing',
        '#businessautomation',
        '#founderstories',
        '#revenuegoals',
      ],
    },
  ],
  travel: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#travel',
        '#wanderlust',
        '#travelgram',
        '#vacation',
        '#adventure',
        '#explore',
        '#instatravel',
        '#travelphotography',
        '#trip',
        '#holiday',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#travelblogger',
        '#traveltheworld',
        '#solotravel',
        '#backpacking',
        '#travellife',
        '#digitalnomad',
        '#budgettravel',
        '#luxurytravel',
        '#roadtrip',
        '#traveltips',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#sustainabletravel2026',
        '#hiddengemsdestination',
        '#offthebeatenpath',
        '#slowtravel',
        '#vanlifeadventures',
        '#solofemaltravel',
        '#workanywhere',
        '#houseswapping',
        '#culturalimmersion',
        '#ecotourismtravel',
      ],
    },
  ],
  beauty: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#beauty',
        '#makeup',
        '#skincare',
        '#beautyblogger',
        '#cosmetics',
        '#mua',
        '#makeupartist',
        '#beautiful',
        '#glam',
        '#selfcare',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#skincareRoutine',
        '#cleanbeauty',
        '#beautytips',
        '#makeuptutorial',
        '#naturalskincare',
        '#beautyproducts',
        '#makeupaddict',
        '#skincaretips',
        '#glowup',
        '#beautycommunity',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#skinbarrierrepair',
        '#kbeautyroutine',
        '#retinoljourney',
        '#cleanbeautyswaps',
        '#drugstoredupes2026',
        '#acnejourneyupdate',
        '#texturedskinnormalize',
        '#glasskinroutine',
        '#maturebeautytips',
        '#microbiomeskincare',
      ],
    },
  ],
  education: [
    {
      label: 'Popular',
      icon: TrendingUp,
      description: 'High-volume hashtags for maximum exposure',
      reach: '1M - 50M posts',
      hashtags: [
        '#education',
        '#learning',
        '#teacher',
        '#school',
        '#study',
        '#knowledge',
        '#student',
        '#teaching',
        '#onlinelearning',
        '#studygram',
      ],
    },
    {
      label: 'Medium',
      icon: BarChart3,
      description: 'Balanced reach with less competition',
      reach: '100K - 1M posts',
      hashtags: [
        '#teacherlife',
        '#studytips',
        '#edtech',
        '#elearning',
        '#studymotivation',
        '#learningisfun',
        '#teachersofinstagram',
        '#homeschool',
        '#stemlearning',
        '#lifelonglearning',
      ],
    },
    {
      label: 'Niche',
      icon: Target,
      description: 'Targeted hashtags for engaged communities',
      reach: '10K - 100K posts',
      hashtags: [
        '#microlearningcontent',
        '#studywithme2026',
        '#aieducation',
        '#projectbasedlearning',
        '#teacherhacks',
        '#flippedclassroom',
        '#educatorinspiration',
        '#skillbasedlearning',
        '#montessoriathome',
        '#studyabroadtips',
      ],
    },
  ],
};

// Aliases and fallback matching
const nicheAliases: Record<string, string> = {
  gym: 'fitness',
  health: 'fitness',
  workout: 'fitness',
  exercise: 'fitness',
  style: 'fashion',
  clothing: 'fashion',
  outfit: 'fashion',
  cooking: 'food',
  recipe: 'food',
  restaurant: 'food',
  baking: 'food',
  coding: 'tech',
  programming: 'tech',
  software: 'tech',
  developer: 'tech',
  ai: 'tech',
  startup: 'business',
  marketing: 'business',
  entrepreneur: 'business',
  ecommerce: 'business',
  vacation: 'travel',
  adventure: 'travel',
  backpacking: 'travel',
  tourism: 'travel',
  makeup: 'beauty',
  skincare: 'beauty',
  cosmetics: 'beauty',
  teaching: 'education',
  school: 'education',
  studying: 'education',
  learning: 'education',
};

function findNiche(input: string): string | null {
  const lower = input.toLowerCase().trim();
  if (hashtagDatabase[lower]) return lower;
  if (nicheAliases[lower]) return nicheAliases[lower];
  // Try partial match
  for (const key of Object.keys(hashtagDatabase)) {
    if (lower.includes(key) || key.includes(lower)) return key;
  }
  for (const [alias, niche] of Object.entries(nicheAliases)) {
    if (lower.includes(alias) || alias.includes(lower)) return niche;
  }
  return null;
}

export default function HashtagGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [tiers, setTiers] = useState<HashtagTier[]>([]);
  const [generated, setGenerated] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  function handleGenerate() {
    const matched = findNiche(topic);
    if (matched && hashtagDatabase[matched]) {
      setTiers(hashtagDatabase[matched]);
      setGenerated(true);
      setNoMatch(false);
    } else {
      // Fallback: show fitness as default with a note
      setTiers([]);
      setGenerated(false);
      setNoMatch(true);
    }
    setCopiedAll(false);
  }

  const handleCopyAll = useCallback(async () => {
    const all = tiers.flatMap(tier => tier.hashtags).join(' ');
    await navigator.clipboard.writeText(all);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  }, [tiers]);

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
              Instagram Hashtag Generator
            </h1>
            <p className='mt-4 text-lg text-muted-foreground max-w-xl mx-auto'>
              Get 30 strategically organized hashtags for your niche. Popular,
              medium, and niche-specific — all designed to maximize your reach.
            </p>
          </div>
        </section>

        {/* Generator */}
        <section className='mt-16 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <Card className='border-border'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Hash className='h-5 w-5 text-primary' />
                  Generate Hashtags
                </CardTitle>
                <CardDescription>
                  Enter your niche or topic (e.g. fitness, fashion, tech, food,
                  business, travel, beauty, education)
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='topic'>Your Niche / Topic</Label>
                  <div className='flex gap-3'>
                    <Input
                      id='topic'
                      placeholder='e.g. fitness, cooking, tech startup'
                      value={topic}
                      onChange={e => setTopic(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleGenerate()}
                    />
                    <Button onClick={handleGenerate} disabled={!topic.trim()}>
                      Generate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {noMatch && (
              <div className='mt-6 rounded-xl border border-border bg-card p-6 text-center'>
                <p className='text-muted-foreground'>
                  We do not have pre-built hashtags for that exact topic yet.
                  Try one of these: fitness, fashion, food, tech, business,
                  travel, beauty, or education.
                </p>
              </div>
            )}

            {/* Results */}
            {generated && tiers.length > 0 && (
              <div className='mt-8 space-y-6'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-semibold'>Your 30 Hashtags</h2>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={handleCopyAll}
                    className='gap-1.5'
                  >
                    {copiedAll ? (
                      <>
                        <Check className='h-3.5 w-3.5' />
                        Copied All
                      </>
                    ) : (
                      <>
                        <Copy className='h-3.5 w-3.5' />
                        Copy All 30
                      </>
                    )}
                  </Button>
                </div>

                {tiers.map(tier => (
                  <Card key={tier.label} className='border-border'>
                    <CardHeader>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <tier.icon className='h-4 w-4 text-primary' />
                          <CardTitle className='text-base'>
                            {tier.label} Hashtags
                          </CardTitle>
                        </div>
                        <span className='text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-0.5'>
                          {tier.reach}
                        </span>
                      </div>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='flex flex-wrap gap-2'>
                        {tier.hashtags.map(tag => (
                          <span
                            key={tag}
                            className='text-sm text-primary bg-primary/10 rounded-full px-3 py-1 cursor-default'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
              Pair great hashtags with AI-powered engagement
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
              Hashtags bring people to your posts. PostEngage keeps them engaged
              with automated replies, DMs, and intelligent conversations.
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
            name: 'Instagram Hashtag Generator',
            description:
              'Generate 30 strategic Instagram hashtags organized by popularity tier for any niche.',
            url: 'https://postengage.ai/tools/instagram-hashtag-generator',
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
