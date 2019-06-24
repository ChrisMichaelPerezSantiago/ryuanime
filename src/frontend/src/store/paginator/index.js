export const paginator = (items, page, per_page) => {
  var page = page || 1,
  per_page = per_page || 10,
  offset = (page - 1) * per_page,

  paginatedItems = items.slice(offset).slice(0, per_page),
  total_pages = Math.ceil(items.length / per_page),

  paginContent = {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: (total_pages > page) ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
  };
  console.log("Paginate Item: ", paginatedItems);
  console.log("Pagin Content: ", paginContent);
  const total = paginContent.total;
  return paginContent.data;
};