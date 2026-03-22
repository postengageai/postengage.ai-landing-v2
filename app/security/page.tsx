import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { PageHeader } from '@/components/marketing/page-header';
import {
  Shield,
  Lock,
  Eye,
  Server,
  Key,
  RefreshCw,
  ShieldCheck,
  Database,
  CreditCard,
  Clock,
  UserCheck,
  Ban,
  CheckCircle2,
  XCircle,
  Instagram,
  Layers,
  Fingerprint,
  Trash2,
} from 'lucide-react';

export default function SecurityPage() {
  const coreSecurityPrinciples = [
    {
      icon: Key,
      title: 'Official Instagram Graph API Only',
      description:
        "We connect to Instagram exclusively through Meta's official Graph API and Messaging API. No screen scraping, no reverse-engineered endpoints, no unofficial methods — ever. Your account stays safe from policy violations.",
    },
    {
      icon: Fingerprint,
      title: 'OAuth 2.0 Authentication',
      description:
        'We never see or store your Instagram password. Authentication happens directly with Meta via OAuth 2.0. We only receive scoped access tokens that you explicitly authorize.',
    },
    {
      icon: Lock,
      title: 'JWT Session Management',
      description:
        'Your sessions are secured with JSON Web Tokens (JWT) with automatic token refresh. Sessions are stateless and cryptographically signed, preventing tampering and session hijacking.',
    },
    {
      icon: Shield,
      title: 'Rate Limiting & Request Validation',
      description:
        'Every API endpoint is protected with rate limiting — 30 requests/minute for heavy operations, 60 requests/minute default. All incoming requests are validated against strict schemas before processing.',
    },
    {
      icon: Server,
      title: 'CORS & Transport Security',
      description:
        'All data is encrypted in transit via HTTPS/TLS. Cross-Origin Resource Sharing (CORS) policies ensure only authorized origins can communicate with our servers.',
    },
    {
      icon: Database,
      title: 'Encrypted Data Storage',
      description:
        'Primary data lives in MongoDB with strict access controls. Semantic memory uses PostgreSQL (pgvector) — isolated and encrypted. Redis caching uses TTL expiry with 30-minute conversation cache windows.',
    },
  ];

  const userControlFeatures = [
    {
      icon: RefreshCw,
      title: 'Disconnect Anytime',
      description:
        'One click disconnects your Instagram account and revokes API access immediately. No waiting periods, no retention tricks.',
    },
    {
      icon: Trash2,
      title: 'Full Account Deletion (GDPR)',
      description:
        'Exercise your right to erasure. Deleting your account triggers a cascading deletion of all your data — comments, conversations, Voice DNA, automation rules, and media files.',
    },
    {
      icon: UserCheck,
      title: 'You Control Every Rule',
      description:
        'You decide what gets replied, when automations run, and how many replies per hour or day. Set time windows so automations only operate during your preferred schedule.',
    },
    {
      icon: Eye,
      title: 'Review Before Sending',
      description:
        'Optionally review and approve AI-generated replies before they are sent. You maintain full oversight of every interaction with your audience.',
    },
  ];

  const metaComplianceItems = [
    'Meta-approved integration via official Instagram Business API',
    'Only works with Business and Creator accounts — never personal accounts',
    'Strictly respects Instagram rate limits and API cooldown periods',
    'Human-like timing delays between actions to prevent spam flagging',
    'Loop guard protection prevents infinite reply chains automatically',
    'All required permissions are clearly disclosed during OAuth connection',
    'User data handling follows Meta Platform Terms and Developer Policies',
  ];

  const neverDoItems = [
    'Store your Instagram password',
    'Sell or share your data with third parties',
    'Access your account outside official API scopes',
    'Send spam or unsolicited messages',
    'Use unofficial or reverse-engineered APIs',
    'Share your AI training data (Voice DNA) with other users',
    'Post content without your configured permission',
    'Share data with third-party advertisers',
  ];

  const paymentSecurityItems = [
    {
      icon: CreditCard,
      title: 'PCI-DSS Compliant Processing',
      description:
        'All payments are processed through Razorpay, a PCI-DSS Level 1 compliant payment gateway. Your card details never touch our servers.',
    },
    {
      icon: ShieldCheck,
      title: 'Webhook Signature Verification',
      description:
        'Every payment event is cryptographically verified using webhook signatures. This prevents spoofing and ensures payment data integrity.',
    },
    {
      icon: Ban,
      title: 'Zero Card Data Storage',
      description:
        'We never store credit card numbers, CVVs, or sensitive payment credentials on our infrastructure. Razorpay handles it all.',
    },
  ];

  const infrastructureItems = [
    {
      icon: Layers,
      title: 'Security-First Architecture',
      description:
        'Built on NestJS with security middleware baked into every layer — guards, interceptors, and pipes validate every request before it reaches business logic.',
    },
    {
      icon: Clock,
      title: 'Reliable Event Processing',
      description:
        'BullMQ queue system with dead letter queue (DLQ) ensures no event is silently lost. Failed events are captured, logged, and retried with backoff strategies.',
    },
    {
      icon: Shield,
      title: 'Deduplication & Audit Trails',
      description:
        'Webhook deduplication prevents double processing of Instagram events. Admin audit trails track all system operations for accountability and incident response.',
    },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <PageHeader
            badge='Security'
            title='Your trust is our foundation'
            description="You're giving us access to your audience — that's a responsibility we take seriously. Here's exactly how we protect your account, your data, and your reputation."
          />
        </section>

        {/* Security Commitment Banner */}
        <section className='mt-20 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center'>
              <Shield className='h-12 w-12 text-primary mx-auto mb-6' />
              <h2 className='text-2xl font-bold mb-4'>
                Our Security Commitment
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                Security is not an afterthought at PostEngage.ai — it is a core
                architectural decision. From OAuth 2.0 authentication to
                encrypted data storage and rate-limited APIs, every system is
                built with your account safety as the primary concern. We use
                only official Meta APIs, we never see your password, and you
                stay in full control at all times.
              </p>
            </div>
          </div>
        </section>

        {/* API & Authentication Security */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl font-bold mb-3'>
                API & Authentication Security
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Multiple layers of protection between your Instagram account and
                the outside world.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              {coreSecurityPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6'
                >
                  <div className='flex items-start gap-4'>
                    <div className='shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                      <principle.icon className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-2'>{principle.title}</h3>
                      <p className='text-sm text-muted-foreground leading-relaxed'>
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Control */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl font-bold mb-3'>
                You Stay in Full Control
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Your account, your rules. Disconnect, delete, or adjust anything
                at any time.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              {userControlFeatures.map((feature, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6'
                >
                  <div className='flex items-start gap-4'>
                    <div className='shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center'>
                      <feature.icon className='h-5 w-5 text-green-500' />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-2'>{feature.title}</h3>
                      <p className='text-sm text-muted-foreground leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram / Meta Compliance */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='text-center mb-12'>
              <Instagram className='h-8 w-8 text-primary mx-auto mb-4' />
              <h2 className='text-2xl font-bold mb-3'>
                Instagram / Meta Compliance
              </h2>
              <p className='text-muted-foreground'>
                We operate strictly within Meta&apos;s Platform Terms and
                Developer Policies. Your account is never at risk.
              </p>
            </div>

            <div className='space-y-3'>
              {metaComplianceItems.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3'
                >
                  <CheckCircle2 className='h-4 w-4 text-green-500 shrink-0' />
                  <span className='text-sm'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Security */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl font-bold mb-3'>Payment Security</h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Your financial data is handled by industry-leading payment
                infrastructure. We never touch your card details.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
              {paymentSecurityItems.map((item, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6 text-center'
                >
                  <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                    <item.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-5xl'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl font-bold mb-3'>
                Infrastructure Security
              </h2>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Built from the ground up with security-first engineering
                practices.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
              {infrastructureItems.map((item, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-border bg-card p-6 text-center'
                >
                  <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                    <item.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Never Do */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl font-bold mb-3'>What We Never Do</h2>
              <p className='text-muted-foreground'>
                Clear boundaries we will never cross. No exceptions.
              </p>
            </div>

            <div className='grid gap-3 sm:grid-cols-2'>
              {neverDoItems.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3'
                >
                  <XCircle className='h-4 w-4 text-red-500 shrink-0' />
                  <span className='text-sm'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Summary Table */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl font-bold mb-3'>
                Data Storage at a Glance
              </h2>
              <p className='text-muted-foreground'>
                Where your data lives and how it is protected.
              </p>
            </div>

            <div className='rounded-xl border border-border overflow-hidden'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b border-border bg-muted/50'>
                    <th className='text-left px-5 py-3 font-semibold'>
                      Data Type
                    </th>
                    <th className='text-left px-5 py-3 font-semibold'>
                      Storage
                    </th>
                    <th className='text-left px-5 py-3 font-semibold'>
                      Protection
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-border'>
                  <tr>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Account & automation data
                    </td>
                    <td className='px-5 py-3'>MongoDB</td>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Access controls, TLS
                    </td>
                  </tr>
                  <tr>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Voice DNA & semantic memory
                    </td>
                    <td className='px-5 py-3'>PostgreSQL (pgvector)</td>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Isolated, encrypted
                    </td>
                  </tr>
                  <tr>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Conversation cache
                    </td>
                    <td className='px-5 py-3'>Redis</td>
                    <td className='px-5 py-3 text-muted-foreground'>
                      TTL expiry (30 min)
                    </td>
                  </tr>
                  <tr>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Media files
                    </td>
                    <td className='px-5 py-3'>S3-compatible storage</td>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Encrypted at rest
                    </td>
                  </tr>
                  <tr>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Payment data
                    </td>
                    <td className='px-5 py-3'>Razorpay (PCI-DSS)</td>
                    <td className='px-5 py-3 text-muted-foreground'>
                      Never stored on our servers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className='mt-24 px-4 sm:px-6'>
          <div className='mx-auto max-w-xl text-center'>
            <Lock className='h-8 w-8 text-primary mx-auto mb-4' />
            <h2 className='text-xl font-bold mb-4'>Security questions?</h2>
            <p className='text-sm text-muted-foreground mb-6'>
              We are happy to answer any questions about how we handle your
              data, protect your account, or comply with privacy regulations.
              Reach out anytime.
            </p>
            <a
              href='mailto:postengage.ai@gmail.com'
              className='inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors'
            >
              postengage.ai@gmail.com
            </a>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
