import { useEffect, useState } from "react";

const useInfiniteScroll = (callback) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;
    const onIntersect = ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        callback();
        observer.observe(entry.target);
      }
    };

    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, callback]);

  return setTarget;
};

export default useInfiniteScroll;
