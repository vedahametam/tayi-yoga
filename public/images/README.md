# Image Management Guide

This directory contains all images for the Tayi Yoga website. Images are organized by category for easy management.

## Directory Structure

```
public/images/
├── courses/         # Course-related images (Yoga TTC, Nature Cure, etc.)
├── teachers/        # Teacher profile photos
├── gallery/         # Gallery photos and general images
├── events/          # News & events images
├── heroes/          # Page hero banner images
└── general/         # Other content images
```

## Recommended Image Sizes

Based on the current placeholders in the codebase:

### Hero Banners (`heroes/`)
- **1920×600px** - Standard page hero banners (most common)
- **1920×1080px** - Large hero sections

### Course Images (`courses/`)
- **600×400px** - Standard course card images
- **600×500px** - Course section images
- **600×700px** - Featured course images

### Teacher Photos (`teachers/`)
- **400×400px** - Teacher profile photos
- **300×300px** - Small circular portraits (Guruji)

### Gallery (`gallery/`)
- **400×300px** - Gallery grid images
- **600×600px** - Featured gallery images

### Event Images (`events/`)
- **600×400px** - Event cards and thumbnails

## File Format Recommendations

- **JPEG (.jpg)** - For photographs (80-90% quality)
- **PNG (.png)** - For images requiring transparency
- **WebP (.webp)** - For optimized web delivery (recommended)

## How to Add Images

### 1. Add Your Image Files
Place your image files in the appropriate subdirectory:
```bash
public/images/courses/yoga-ttc-main.jpg
public/images/teachers/guruji-portrait.jpg
public/images/heroes/home-hero.jpg
```

### 2. Update Components
Replace `ImagePlaceholder` components with the `src` prop:

**Before:**
```tsx
<ImagePlaceholder
  width={600}
  height={400}
  text="Yoga TTC Course"
  className="rounded-lg shadow-lg"
/>
```

**After:**
```tsx
<ImagePlaceholder
  width={600}
  height={400}
  src="/images/courses/yoga-ttc-main.jpg"
  alt="Yoga Teacher Training Course"
  className="rounded-lg shadow-lg"
/>
```

### 3. The Component Handles Fallback Automatically
- If the image fails to load, the placeholder will be shown
- If no `src` is provided, the placeholder will be shown
- A smooth loading transition is applied when images load

## Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG, Squoosh, or ImageOptim)
2. **Use appropriate dimensions** - Don't upload 4000×3000px images if you only need 600×400px
3. **Consider WebP format** - Modern browsers support it and it offers better compression
4. **Use descriptive filenames** - `yoga-teacher-training.jpg` not `img123.jpg`

## Example Usage in Components

### Simple Image
```tsx
<ImagePlaceholder
  width={600}
  height={400}
  src="/images/courses/yoga-ttc.jpg"
  alt="Yoga Teacher Training"
  className="rounded-lg"
/>
```

### With Text Fallback
```tsx
<ImagePlaceholder
  width={600}
  height={400}
  src="/images/courses/nature-cure.jpg"
  alt="Nature Cure Course"
  text="Nature Cure TTC"
  className="rounded-lg shadow-lg"
/>
```

### Circular Profile Image
```tsx
<ImagePlaceholder
  width={300}
  height={300}
  src="/images/teachers/guruji.jpg"
  alt="Guruji Portrait"
  className="rounded-full shadow-2xl"
/>
```

## Components Using ImagePlaceholder

The following pages/components currently use placeholders (83+ total):

- **Home.tsx** - 5 placeholders
- **Disciples.tsx** - 2 placeholders
- **Gallery.tsx** - 24+ dynamic placeholders
- **NewsEvents.tsx** - Multiple event images
- **All Course pages** - 3-5 placeholders each
- **All Information pages** - 2-5 placeholders each

See the component files for specific usage and dimensions needed.

## Need Help?

- The `ImagePlaceholder` component automatically handles loading states and errors
- If an image path is wrong, you'll see the placeholder instead
- Check browser console for any image loading errors
- All image paths should start with `/images/` (not `public/images/`)
