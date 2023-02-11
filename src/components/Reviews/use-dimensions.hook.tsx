import { RefObject, useEffect, useState } from "react";

import throttle from "../../utils/throttle";

function useDimensions(ref: RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!ref.current) {
      throw new Error("'ref' is null");
    }
    setDimensions({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
  }, [ref]);

  useEffect(() => {
    const handleResize = throttle(() => {
      if (!ref.current) {
        throw new Error("'ref' is null");
      }
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }, 250);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return dimensions;
}

export default useDimensions;
