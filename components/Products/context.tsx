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
  total: number;
  handleTotalChange: (newTotal: number) => void;
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
  const [total, setTotal] = useState<number>(32);
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

  const handleTotalChange = (newTotal: number) => {
    setTotal(newTotal);
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
    total,
    handleTotalChange,
  };
};
