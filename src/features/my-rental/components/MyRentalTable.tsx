import { Badge, cn } from '@/shared';

import { BodyData, HeaderData } from '../model';

type Props = {
  headerData: HeaderData[];
  bodyData: BodyData[];
};

export const MyRentalTable = ({ headerData, bodyData }: Props) => {
  const today = new Date().toISOString().split('T')[0];

  const returnItem = (itemId: string) => {
    // todo: 반납 모달 오픈
    console.log('return item', itemId);
  };

  return (
    <table className='w-full border-collapse justify-center'>
      <thead>
        <tr className='border-b-2'>
          {headerData.map((header) => (
            <th key={header.value} className='py-2'>
              {header.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((item, index) => {
          const isOverdue = item.dueDate < today;

          return (
            <tr
              key={item.itemId}
              className={cn('cursor-pointer', {
                'border-b': index !== bodyData.length - 1,
              })}
              onClick={() => returnItem(item.itemId)}
            >
              <td className='py-2'>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.dueDate}</td>
              <td>
                <Badge variant={isOverdue ? 'unavailable' : 'available'}>
                  {isOverdue ? '기한 초과' : '이용 중'}
                </Badge>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
