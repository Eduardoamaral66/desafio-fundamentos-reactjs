const formatDate = (date: Date): string => {
  const convertedDate = new Date(date);
  return Intl.DateTimeFormat('pt-BR').format(convertedDate);
};
export default formatDate;
