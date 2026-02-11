interface PageHeroProps {
  title: string;
  subtitle?: string;
  imagePlaceholder?: string;
  height?: 'small' | 'medium' | 'large';
}

export default function PageHero({ title, subtitle, imagePlaceholder = 'Hero Image', height = 'medium' }: PageHeroProps) {
  const heightClasses = {
    small: 'h-48 md:h-64',
    medium: 'h-64 md:h-80',
    large: 'h-80 md:h-96'
  };

  return (
    <div className={`relative ${heightClasses[height]} bg-gradient-to-r from-earth to-clay overflow-hidden`}>
      {/* Placeholder for background image */}
      <div className="absolute inset-0 bg-ink/20 flex items-center justify-center">
        <span className="text-mist/40 text-sm font-medium">{imagePlaceholder} (1920x600px)</span>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-mist/90 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
