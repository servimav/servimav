export default function EventListener() {

  /**
   * Check if an element is on viewport
   * @param el 
   * @returns 
   */
  function isOnViewport(el?: Element) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return {
    isOnViewport,
    /**
     * Run callback when element is on viewport
     * @param el 
     * @param fn 
     */
    whenOnViewport: (el?: Element, fn?: (p?: Element) => void, clear = false) => {
      if (!el || !fn) return;

      const listener = () => {
        if (isOnViewport(el)) {
          fn(el);
        }
      }

      if (clear)
        return removeEventListener('scroll', listener);
      return document.addEventListener('scroll', listener);
    },
  }
}

export const isOnViewport = EventListener().isOnViewport;
export const whenOnViewport = EventListener().whenOnViewport;

// const observer = new IntersectionObserver(
//   ([entry]) => {
//     animate.value = entry.isIntersecting;
//   },
//   {
//     threshold: 0.5
//   }
// );
// onMounted(() => {
//   observer.observe(target.value);
// });
