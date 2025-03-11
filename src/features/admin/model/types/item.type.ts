export type ItemList = {
  header: { text: string; value: string }[];
  body: {
    type: string;
    name: string;
    status: string;
    date: string;
    borrower: string;
  }[];
};
