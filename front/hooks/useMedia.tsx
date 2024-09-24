import { mediaQuery } from "@/styles/media";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function useMedia() {
  const media = useMediaQuery({ query: mediaQuery.tablet });
  const [isTablet, setIsTablet] = useState(false);

  // 미디어 쿼리
  useEffect(() => {
    setIsTablet(media);
  }, [media]);
  return isTablet;
}
