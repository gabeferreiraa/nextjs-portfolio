/**
 * Return an array with objects containing data of sample images. Supports custom images.
 *
 * @param length - Optional. A number of slides. This is ignored if customImages is provided.
 * @param sig    - Optional. The signature for getting a different image. Used for random images only.
 * @param customImages - Optional. An array of strings representing URLs for custom images.
 *
 * @return An array with objects for sample images.
 */
export function generateSlides(
  length = 10,
  sig = 0,
  customImages = [
    "https://res.cloudinary.com/dsuhgv4an/image/upload/v1710785240/portfolio-wireframes_g51zlw.jpg",
    "https://res.cloudinary.com/dsuhgv4an/image/upload/v1710785806/portfolio-menu-wireframe_yzmz0a.jpg",
    "https://res.cloudinary.com/dsuhgv4an/image/upload/v1710786097/portfolio-wireframe-contact_guydpo.jpg",
  ]
): Array<{ src: string; alt: string }> {
  // If custom images are provided, use them instead of generating random Unsplash URLs
  if (customImages.length > 0) {
    return customImages.map((src, index) => ({
      src,
      alt: `Custom Image ${index + 1}`,
    }));
  }

  // No custom images provided, generate random Unsplash URLs
  return Array.from({ length }).map((value, index) => {
    index = sig || index;
    return {
      src: `${customImages}`,
      alt: `Image ${index + 1}`,
    };
  });
}
