import { useEffect, useState } from "react";
import { throttle } from "../utils";

function useScrollPosition(throttleBy = 250) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }, throttleBy);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [throttleBy]);

  return [position.x, position.y];
}

export default useScrollPosition;
