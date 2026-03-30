// Helper function to generate optimized image URLs with proper alt text
export function getOptimizedImageUrl(src: string, width = 1200, height = 630, quality = 80): string {
  // If the image is already a full URL, return it
  if (src.startsWith("http")) {
    return src
  }

  // For local images, add optimization parameters
  return `${src}?w=${width}&h=${height}&q=${quality}&fit=crop`
}

// Helper function to generate proper alt text for images
export function generateAltText(imageName: string, defaultAlt = ""): string {
  if (defaultAlt) return defaultAlt

  // Convert file name to readable alt text
  const nameWithoutExtension = imageName.split(".")[0]
  const nameWithSpaces = nameWithoutExtension
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()

  // Capitalize first letter of each word
  return nameWithSpaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}
