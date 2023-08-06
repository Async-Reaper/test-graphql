export const getCountPage = (totalCount: number, limit: number) => {
   return Math.ceil(totalCount / limit);
};

export const getArrayPages = (totalPages: number) => {
   const result: number[] = [];
   for (let i = 1;  i < totalPages; i++) {
      result.push(i);
   }
   return result;
};
