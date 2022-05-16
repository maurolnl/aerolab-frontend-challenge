import {createContext, useContext, useEffect, useState} from "react";

import {PRODUCT_QUANTITY, SORT_TYPES} from "../../constants";
import {usePageLimit, usePager} from "../layout/hooks";

interface Context {
  page: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  limit: number;
  totalPages: number;
  sort: string;
  handleSortChange: (index: number) => void;
  filter: string;
  handleFilterChange: (index: string | undefined) => void;
}

const filterContext = createContext({} as Context);

export const ProvideFilters: React.FC = ({children}) => {
  const filters = useProvideFilters();

  return <filterContext.Provider value={filters}>{children}</filterContext.Provider>;
};

export const useFilters = () => {
  return useContext(filterContext);
};

const useProvideFilters = () => {
  const [sort, setSort] = useState<string>(SORT_TYPES[0]);
  const [filter, setFilter] = useState<string>("All Products");
  const {page, handleNextPage, handlePreviousPage, handleNavigate} = usePager();
  const {limit} = usePageLimit();

  const totalPages = Math.ceil(PRODUCT_QUANTITY / limit);

  useEffect(() => {
    if (page > totalPages) {
      handleNavigate(totalPages);
    }
  });

  const handleSortChange = (index: number) => {
    const newSort = SORT_TYPES[index];

    setSort(newSort);
  };

  const handleFilterChange = (label: string | undefined) => {
    if (label) setFilter(label);
  };

  return {
    page,
    handleNextPage,
    handlePreviousPage,
    limit,
    totalPages,
    sort,
    handleSortChange,
    filter,
    handleFilterChange,
  };
};
