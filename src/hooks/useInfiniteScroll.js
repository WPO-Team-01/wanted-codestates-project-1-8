import { useEffect, useState } from "react";

const useInfiniteScroll = (callback) => {
  const [target, setTarget] = useState(null);

  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      callback();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return setTarget;
};

export default useInfiniteScroll;
