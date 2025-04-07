export const categoryFormat = (category: string) => {
  const categoryMap: Record<string, string> = {
    BOOK: '책',
    BOARD_GAME: '보드게임',
    OFFICE_SUPPLY: '사무용품',
    ETC: '기타',
  };

  return categoryMap[category];
};
