import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import {PRODUCT_QUANTITY} from "../../constants";

export const useMedia = (queries: string[], values: boolean[], defaultValue = false) => {
  const mediaQueryLists: any[] = queries.map((q) =>
    typeof window !== "undefined" ? window.matchMedia(q) : false,
  );

  const getValue = () => {
    if (mediaQueryLists[0]) {
      const index = mediaQueryLists.findIndex((mql) => mql.matches);

      return index > -1 ? values[index] : defaultValue;
    }

    return true;
  };

  const [value, setValue] = useState<boolean>(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => mql.addListener(handler));

    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);

  return value;
};

export const usePager = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const router = useRouter();
  const {page} = router.query;

  useEffect(() => {
    if (page) {
      setPageNumber(Number(page));
    }
  }, [page]);

  const handleNextPage = () => {
    router.push(`/?page=${pageNumber + 1}`, undefined, {scroll: false});
  };

  const handlePreviousPage = () => {
    router.push(`/?page=${pageNumber - 1}`, undefined, {scroll: false});
  };

  const handleNavigate = (page: number) => {
    router.push(`/?page=${page}`, undefined, {scroll: false});
  };

  return {
    page: pageNumber,
    handleNextPage,
    handlePreviousPage,
    handleNavigate,
  };
};

export const usePageLimit = () => {
  const [limitPerPage, setLimit] = useState<number>(16);
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const isMobile = useMedia(["(max-width: 1023px)"], [true]);
  const isMobileS = useMedia(["(max-width: 620px)"], [true]);
  const isTablet = !isDesktop && !isMobile && !isMobileS;

  useEffect(() => {
    if (isTablet) {
      setLimit(12);

      return;
    } else if (isMobile) {
      setLimit(8);

      return;
    }
    setLimit(16);
  }, [isDesktop, isMobile, isTablet]);

  return {
    limit: limitPerPage,
  };
};
