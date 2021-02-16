const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const getCurrentDate = (createdDate) => {
  const newDate = new Date(createdDate ?? null);
  return newDate.toLocaleDateString('en-us', dateOptions);
};
