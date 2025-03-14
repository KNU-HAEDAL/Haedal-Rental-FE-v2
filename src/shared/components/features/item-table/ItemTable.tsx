import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDynamicPath } from '@/shared/utils';

type TableHeader = {
  text: string;
  value: string;
};

type TableProps<T extends Record<string, unknown>> = {
  headers: TableHeader[];
  items: T[];
  selectable?: boolean;
  itemKey?: keyof T;
  updateSelection: (selection: T[keyof T][]) => void;
  renderCell?: (key: keyof T, item: T) => React.ReactNode;
};

export const ItemTable = <T extends Record<string, unknown>>({
  headers,
  items,
  renderCell,
  selectable = false,
  itemKey,
  updateSelection,
}: TableProps<T>) => {
  const effectiveItemKey = itemKey ?? (headers[0]?.value as keyof T);

  const [selection, setSelection] = useState<Set<T[keyof T]>>(new Set());

  const navigate = useNavigate();

  if (!headers || headers.length === 0) {
    throw new Error('<ItemTable /> headers는 필수 요소입니다.');
  }

  // 특정 행의 선택 상태를 변경하는 함수
  const onChangeSelect = (value: T[keyof T]) => {
    const newSelection = new Set(selection);
    if (newSelection.has(value)) {
      newSelection.delete(value);
    } else {
      newSelection.add(value);
    }
    setSelection(newSelection);
    updateSelection([...newSelection]);
  };

  const getAbledItems = (items: T[]): T[] => {
    return items.filter((item) => !(item as { disabled?: boolean }).disabled);
  };

  const onChangeSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allCheckedSelection = new Set(
        getAbledItems(items).map((item) => item[effectiveItemKey]),
      );
      setSelection(allCheckedSelection);
      updateSelection([...allCheckedSelection]);
    } else {
      setSelection(new Set());
      updateSelection([]);
    }
  };

  const isSelectedAll = () => {
    return selection.size === getAbledItems(items).length;
  };

  return (
    <table className='w-full border-collapse'>
      <thead>
        <tr className='border-b-2'>
          {selectable && (
            <th>
              <input
                type='checkbox'
                checked={isSelectedAll()}
                onChange={onChangeSelectAll}
              />
            </th>
          )}
          {headers.map(({ text, value }) => (
            <th key={value} className='px-5 py-2'>
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const isDisabled = (item as { disabled?: boolean }).disabled;
          const isSelected = selection.has(item[effectiveItemKey]);

          return (
            <tr
              key={index}
              onClick={() => {
                navigate(getDynamicPath.rentItemDetail(String(item.itemId)));
              }}
              className={`border-b ${isSelected ? 'bg-gray-200' : ''} ${isDisabled ? 'opacity-50' : ''}`}
            >
              {selectable && (
                <td>
                  <input
                    type='checkbox'
                    disabled={isDisabled}
                    checked={isSelected}
                    onChange={() => onChangeSelect(item[effectiveItemKey])}
                  />
                </td>
              )}
              {headers.map(({ value }) => (
                <td
                  key={value + index}
                  className='cursor-pointer px-3 py-2 text-center'
                >
                  {renderCell
                    ? renderCell(value as keyof T, item)
                    : (item[value] as React.ReactNode)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
