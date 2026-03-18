/**
 * Optimizes external video links for better playback or direct access.
 * Currently handles Dropbox links by ensuring dl=1 for direct access.
 * 
 * @param url The original external URL
 * @returns The optimized URL
 */
export const optimizeExternalLink = (url: string): string => {
  if (!url) return url;
  
  // Handle Dropbox links
  if (url.includes("dropbox.com")) {
    // Replace dl=0 with dl=1 if present, or add it if not
    if (url.includes("dl=0")) {
      return url.replace("dl=0", "dl=1");
    } else if (!url.includes("dl=1")) {
      const separator = url.includes("?") ? "&" : "?";
      return `${url}${separator}dl=1`;
    }
  }
  
  return url;
};
