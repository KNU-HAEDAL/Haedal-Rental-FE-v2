export const getAfterDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
  }).format(date);
};
