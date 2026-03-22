import type React from 'react';
import { ExitIntentPopup } from '@/components/exit-intent-popup';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ExitIntentPopup />
    </>
  );
}
