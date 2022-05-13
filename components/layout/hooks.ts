import {useEffect, useState} from "react";

const useMedia = (queries: string[], values: boolean[], defaultValue = false) => {
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

export default useMedia;
