import { useState } from 'react';

import { Badge, cn } from '@/shared';

import { BodyData, HeaderData } from '../model';

import { ReturnAlert } from './ReturnAlert';

type Props = {
  headerData: HeaderData[];
  bodyData: BodyData[];
};

export const MyRentalTable = ({ headerData, bodyData }: Props) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const processedBodyData = bodyData.map((item) => ({
    ...item,
    isOverdue: item.dueDate < today,
  }));

  return (
    <>
      <ReturnAlert isOpen={isAlertOpen} setIsOpen={setIsAlertOpen} />
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
          {processedBodyData.map((item, index) => (
            <tr
              key={item.itemId}
              className={cn('cursor-pointer', {
                'border-b': index !== processedBodyData.length - 1,
              })}
              onClick={() => setIsAlertOpen(true)}
            >
              <td className='py-2'>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.dueDate}</td>
              <td>
                <Badge variant={item.isOverdue ? 'overdue' : 'unavailable'}>
                  {item.isOverdue ? '기한 초과' : '이용 중'}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
