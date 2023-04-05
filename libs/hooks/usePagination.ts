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

const usePagination = (arr) => {
  const length = 5;
  const start = 0;
  const res = [];
  const max = Math.ceil(arr?.length / 5);

  for (let i = 0; i < max; i++) {
    const page = arr.slice(start + i * length, start + i * length + length);
    res.push(page);
  }

  return res;
};

export default usePagination;
