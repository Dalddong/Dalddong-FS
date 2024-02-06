import { useState } from "react";
import { NOT_EXIST_PAGE } from "@/utils/constants/alertMessages";

interface UsePaginationProps {
  totalItems: number;
}

const usePagination = ({ totalItems }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const sliceNumber = currentPage * itemsPerPage + itemsPerPage;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > -1 && newPage < totalPages) setCurrentPage(newPage);
    else {
      alert(NOT_EXIST_PAGE);
    }
  };

  return {
    currentPage,
    itemsPerPage,
    startIndex,
    sliceNumber,
    handlePageChange,
  };
};

export default usePagination;
