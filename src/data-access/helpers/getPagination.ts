export const getPagination = (page: number = 0, size: number = 10) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};
