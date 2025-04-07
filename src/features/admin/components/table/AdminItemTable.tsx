import { useNavigate } from 'react-router-dom';

import {
  Badge,
  categoryFormat,
  cn,
  formatDate,
  getDynamicPath,
  statusFormat,
  statusVariantMap,
} from '@/shared';

import { BodyData, HeaderData } from '../../model';

type Props = {
  headerData: HeaderData[];
  bodyData: BodyData[];
};

export const AdminItemTable = ({ headerData, bodyData }: Props) => {
  const navigate = useNavigate();

  const goToRentedItemDetail = (itemId: string) => {
    navigate(getDynamicPath.rentedItemDetail(String(itemId)));
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
        {bodyData.map((item, index) => (
          <tr
            key={item.itemId}
            className={cn('cursor-pointer', {
              'border-b': index !== bodyData.length - 1,
            })}
            onClick={() => goToRentedItemDetail(item.itemId)}
          >
            <td className='px-3 py-2'>{categoryFormat(item.itemCategory)}</td>
            <td>{item.itemName}</td>
            <td>
              <Badge
                className='px-1/2 w-full border-none'
                variant={statusVariantMap[item.itemStatus]}
              >
                {statusFormat(item.itemStatus)}
              </Badge>
            </td>
            <td className='text-sm font-medium'>
              {item.itemStatus === 'RENTAL_AVAILABLE'
                ? '-'
                : formatDate(item.returnDate)}
            </td>
            <td className='text-sm font-medium'>{item.rentalMemberName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
