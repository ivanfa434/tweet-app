import React, { FC } from "react";

interface PaginationSectionProps {
  page: number;
  count: number;
  limit: number;
  setPage: (page: number) => void;
}
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const PaginationSection: FC<PaginationSectionProps> = ({
  page,
  count,
  limit,
  setPage,
}) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil(count / limit);

    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <section className="mt-8">
      <Pagination>
        <PaginationContent>
          {/* Button Prev */}
          <PaginationItem>
            <PaginationPrevious onClick={handlePrev} />
          </PaginationItem>

          {/* page */}
          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>

          {/* Button Next */}
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default PaginationSection;
