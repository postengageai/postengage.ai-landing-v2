interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <div className='relative mx-auto max-w-3xl text-center'>
      {/* Subtle radial glow behind header */}
      <div className='pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/6 rounded-full blur-3xl' />

      <div className='relative'>
        {badge && (
          <div className='mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary'>
            {badge}
          </div>
        )}
        <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance leading-[1.08]'>
          {title}
        </h1>
        <p className='mt-6 text-lg sm:text-xl text-muted-foreground font-light leading-relaxed text-pretty max-w-2xl mx-auto'>
          {description}
        </p>
      </div>
    </div>
  );
}
