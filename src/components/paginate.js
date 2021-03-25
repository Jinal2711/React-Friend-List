const paginate = (arr, currentPage = 1, pageSize = 5) => {
  // debugger
  const totalItems = arr.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  // ensure current page isn't out of range
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  // calculate start and end item indexes
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); //

  // create an array of pages to loop in the pagination
  const pages = Array.from(Array(totalPages).keys()).map((i) => i + 1);
  const items = arr.slice(startIndex, endIndex+1); //

  return {
    items,
    pages,
    newCurrentPage: currentPage,
  };
};
export default paginate;
