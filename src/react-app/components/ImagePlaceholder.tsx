interface ImagePlaceholderProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
}

export default function ImagePlaceholder({ width, height, text, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br from-sand to-mist border-2 border-dashed border-earth/30 flex items-center justify-center ${className}`}
      style={{ width: '100%', aspectRatio: `${width}/${height}` }}
    >
      <div className="text-center p-4">
        <svg className="w-12 h-12 mx-auto mb-2 text-earth/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-xs text-earth/60 font-medium">
          {text || 'Image Placeholder'}
        </p>
        <p className="text-xs text-earth/40 mt-1">
          {width}x{height}px
        </p>
      </div>
    </div>
  );
}
