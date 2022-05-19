export const formatCurrency = (_number: number) => {
  const currency = Intl.NumberFormat("es-AR");

  return currency.format(_number);
};
