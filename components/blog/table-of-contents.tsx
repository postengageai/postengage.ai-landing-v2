'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
  }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -40% 0px' }
    );

    items.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <nav className='flex flex-col space-y-3 text-sm'>
      {items.map(item => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleScroll(item.id)}
            className={cn(
              'transition-colors flex items-center gap-2',
              isActive
                ? 'text-foreground font-medium'
                : 'text-muted-foreground hover:text-primary'
            )}
          >
            {isActive ? (
              <CheckCircle2 className='h-4 w-4 text-primary' />
            ) : (
              <div className='h-1.5 w-1.5 rounded-full bg-border' />
            )}
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}
