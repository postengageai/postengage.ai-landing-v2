'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type LogoVariant = 'wordmark' | 'mark';
type LogoColorScheme = 'dark' | 'light' | 'auto';

interface AppLogoProps {
  variant?: LogoVariant;
  colorScheme?: LogoColorScheme;
  height?: number;
  href?: string | false;
  className?: string;
  priority?: boolean;
}

export function AppLogo({
  variant = 'wordmark',
  colorScheme = 'auto',
  height = 32,
  href = '/',
  className,
  priority = false,
}: AppLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scheme: 'dark' | 'light' =
    colorScheme === 'auto'
      ? mounted
        ? resolvedTheme === 'dark'
          ? 'dark'
          : 'light'
        : 'light'
      : colorScheme;

  const isWordmark = variant === 'wordmark';
  const src = isWordmark
    ? scheme === 'dark'
      ? '/logo-transparent-dark.png'
      : '/logo-transparent-light.png'
    : scheme === 'dark'
      ? '/logo-mark-dark.png'
      : '/logo-mark-light.png';

  const naturalW = isWordmark ? 839 : 512;
  const naturalH = isWordmark ? 130 : 512;
  const width = Math.round((height * naturalW) / naturalH);

  const img = (
    <Image
      src={src}
      alt='PostEngage.AI'
      width={width}
      height={height}
      priority={priority}
      className={cn('object-contain', className)}
      style={{ height, width }}
    />
  );

  if (href === false) return img;

  return (
    <Link href={href} className='flex items-center w-fit shrink-0'>
      {img}
    </Link>
  );
}
