import Image from "next/image"
import { generateAltText } from "@/lib/image-optimization"

interface OptimizedImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  quality?: number
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  loading?: "eager" | "lazy"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  fill = false,
  quality = 80,
  objectFit = "cover",
  loading,
  placeholder,
  blurDataURL,
}: OptimizedImageProps) {
  // Generate alt text if not provided
  const imageAlt = alt || generateAltText(src.split("/").pop() || "")

  // Default loading strategy based on priority
  const loadingStrategy = loading || (priority ? "eager" : "lazy")

  // Handle placeholder images properly
  const imageSrc = src || "/placeholder.svg"

  // Ensure proper sizes attribute for responsive images
  const imageSizes = sizes || (fill ? "100vw" : undefined)

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={imageAlt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      priority={priority}
      sizes={imageSizes}
      fill={fill}
      quality={quality}
      style={fill ? { objectFit } : undefined}
      loading={loadingStrategy}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  )
}
