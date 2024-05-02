export const handleAddTransaction = (
  setArray,
  description,
  type,
  data,
  createdAt,
) => {
  setArray(prevState => [
    ...prevState,
    {
      description: description,
      type: type,
      data: data,
      createdAt: createdAt,
      id: Math.random(),
    },
  ]);
};
