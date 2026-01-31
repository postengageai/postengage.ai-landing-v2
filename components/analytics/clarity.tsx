'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';
import { CLARITY_PROJECT_ID, IS_DEV } from '@/lib/constants';

export function MicrosoftClarity() {
  useEffect(() => {
    if (CLARITY_PROJECT_ID) {
      Clarity.init(CLARITY_PROJECT_ID);
    } else if (IS_DEV) {
      console.warn(
        '[Clarity] Project ID is missing. Please set NEXT_PUBLIC_CLARITY_PROJECT_ID in your .env file.'
      );
    }
  }, []);

  return null;
}
