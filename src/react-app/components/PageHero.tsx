interface PageHeroProps {
  title: string;
  subtitle?: string;
  imagePlaceholder?: string;
  imageSrc?: string;
  imagePosition?: string;
  contentPosition?: 'top' | 'center' | 'bottom';
  height?: 'small' | 'medium' | 'large';
}

export default function PageHero({
  title,
  subtitle,
  imagePlaceholder = 'Hero Image',
  imageSrc,
  imagePosition = 'object-center',
  contentPosition = 'bottom',
  height = 'medium'
}: PageHeroProps) {
  const heightClasses = {
    small: 'h-48 md:h-64',
    medium: 'h-64 md:h-80',
    large: 'h-[450px] md:h-[550px]'
  };

  const paddingClasses = {
    top: {
      small: 'justify-start pt-6 md:pt-8',
      medium: 'justify-start pt-8 md:pt-12',
      large: 'justify-start pt-12 md:pt-16'
    },
    center: {
      small: 'justify-center',
      medium: 'justify-center',
      large: 'justify-center'
    },
    bottom: {
      small: 'justify-end pb-6 md:pb-8',
      medium: 'justify-end pb-8 md:pb-12',
      large: 'justify-end pb-12 md:pb-16'
    }
  };

  return (
    <div className={`relative ${heightClasses[height]} bg-gradient-to-r from-earth to-clay overflow-hidden`}>
      {/* Background image or placeholder */}
      {imageSrc ? (
        <div className="absolute inset-0">
          <img src={imageSrc} alt={imagePlaceholder} className={`w-full h-full object-cover ${imagePosition}`} />
          <div className="absolute inset-0 bg-ink/30"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-ink/20 flex items-center justify-center">
          <span className="text-mist/40 text-sm font-medium">{imagePlaceholder} (1920x600px)</span>
        </div>
      )}

      {/* Content */}
      <div className={`relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${paddingClasses[contentPosition][height]} items-center text-center`}>
        <div className="bg-ink/35 backdrop-blur-sm px-6 py-5 md:px-10 md:py-7 rounded-2xl max-w-3xl mx-auto border border-white/10 shadow-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm md:text-base lg:text-lg text-mist/95 font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
