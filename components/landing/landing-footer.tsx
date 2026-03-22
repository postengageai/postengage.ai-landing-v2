import Link from 'next/link';
import { AppLogo } from '@/components/app/app-logo';

export function LandingFooter() {
  const footerLinks = {
    Product: [
      { label: 'Product', href: '/product' },
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Changelog', href: '/changelog' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Data Deletion', href: '/data-deletion' },
    ],
  };

  return (
    <footer className='border-t border-border py-12'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <AppLogo height={28} />
            <p className='mt-4 max-w-xs text-sm text-muted-foreground'>
              AI-powered Instagram engagement that sounds like you. Your voice,
              amplified — while you sleep.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className='font-medium'>{category}</h4>
              <ul className='mt-4 space-y-2'>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} PostEngageAI. All rights reserved.
          </p>
          <div className='flex gap-4'>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Twitter
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Instagram
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
