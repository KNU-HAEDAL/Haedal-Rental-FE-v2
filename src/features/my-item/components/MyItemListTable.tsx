import { Badge, cn } from '@/shared';

import { BodyData, HeaderData } from '../model';

type Props = {
  headerData: HeaderData[];
  bodyData: BodyData[];
};

export const MyItemListTable = ({ headerData, bodyData }: Props) => {
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
        {bodyData.map((item, index) => (
          <tr
            key={item.itemId}
            className={cn('cursor-pointer', {
              'border-b': index !== bodyData.length - 1,
            })}
          >
            <td className='py-2'>{item.type}</td>
            <td>{item.name}</td>
            <td>
              <Badge
                variant={
                  item.status === '반납 가능' ? 'available' : 'unavailable'
                }
              >
                {item.status}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
