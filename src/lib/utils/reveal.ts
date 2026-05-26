interface RevealOptions {
  delay?: number;
  threshold?: number;
}

export function reveal(
  node: HTMLElement,
  { delay = 0, threshold = 0.06 }: RevealOptions = {}
) {
  if (typeof window === "undefined") return;

  // Respect reduced motion preference — skip animation
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if (typeof IntersectionObserver === "undefined") {
    return;
  }

  node.classList.add("reveal");

  // Hard fallback: reveal after 3.5s in case IntersectionObserver never fires
  const fallback = setTimeout(() => {
    node.classList.add("revealed");
  }, 3500);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          if (delay > 0) {
            setTimeout(() => node.classList.add("revealed"), delay);
          } else {
            node.classList.add("revealed");
          }
          observer.unobserve(node);
        }
      });
    },
    {
      threshold,
      rootMargin: "80px 0px 0px 0px", // trigger 80px before element enters viewport
    }
  );

  observer.observe(node);

  return {
    destroy() {
      clearTimeout(fallback);
      observer.unobserve(node);
    },
  };
}
