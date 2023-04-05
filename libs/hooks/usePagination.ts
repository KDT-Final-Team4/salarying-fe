// const usePagination: number[][] = (dataLength: number) => {
//   const limit = 5;
//   const totalPages = Math.ceil(dataLength! / limit);
//   let pageGroups = [];

//   for (let pageGroup = 1; pageGroup <= totalPages; pageGroup++) {
//     let tmp = [];
//     let offset = (pageGroup - 1) * limit;
//     let end = Math.min(offset + limit, dataLength!);
//     for (let page = offset; page < end; page++) {
//       tmp.push(page);
//     }
//     pageGroups.push(tmp);
//   }

//   return pageGroups;
// };

const usePagination = (arr, itemsPerPage) => {
  if (!arr) return [];
  const totalPages = Math.ceil(arr.length / itemsPerPage);
  let pages = [];

  for (let page = 0; page < totalPages; page++) {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    pages.push(arr.slice(start, end));
  }

  return pages;
};

export default usePagination;
