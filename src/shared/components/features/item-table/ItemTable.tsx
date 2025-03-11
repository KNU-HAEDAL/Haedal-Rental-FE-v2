type TableHeader = {
  text: string;
  value: string;
};

type TableProps<T> = {
  headers: TableHeader[];
  items: T[];
  renderCell?: (key: keyof T, item: T) => React.ReactNode;
};

export const ItemTable = <T extends Record<string, any>>({
  headers,
  items,
  renderCell,
}: TableProps<T>) => {
  if (!headers || headers.length === 0) {
    throw new Error('<DataTable /> headers는 필수 요소입니다.');
  }

  return (
    <table className='w-full border-collapse'>
      <thead>
        <tr className='border-b-2'>
          {headers.map(({ text, value }) => (
            <th key={value} className='px-5 py-2'>
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className='border-b'>
            {headers.map(({ value }) => (
              <td key={value + index} className='px-3 py-2 text-center'>
                {renderCell ? renderCell(value as keyof T, item) : item[value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
