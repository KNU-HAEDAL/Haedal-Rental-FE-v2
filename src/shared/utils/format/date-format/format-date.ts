export const AddDateformat = (date: Date, daysToAdd: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + daysToAdd);

  return newDate.toISOString().split('T')[0];
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}`;
};
