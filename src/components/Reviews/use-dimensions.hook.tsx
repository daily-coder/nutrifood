import { RefObject, useCallback, useEffect, useState } from "react";
import invariant from "tiny-invariant";

import throttle from "../../utils/throttle";

function useDimensions(ref: RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const updateDimensions = useCallback(() => {
    invariant(ref.current, "'ref' is null");
    setDimensions({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
  }, [ref]);

  useEffect(() => {
    updateDimensions();
    const handleResize = throttle(updateDimensions, 250);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateDimensions]);

  return dimensions;
}

export default useDimensions;
