import { Badge } from '@/shared';

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
        {bodyData.map((item) => (
          <tr key={item.itemId} className='cursor-pointer border-b-1'>
            <td className='py-2'>{item.type}</td>
            <td>{item.name}</td>
            <td>
              <Badge
                variant={item.status === '반납 가능' ? 'moon' : 'sun'}
                className='px-2 py-1 font-bold'
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
