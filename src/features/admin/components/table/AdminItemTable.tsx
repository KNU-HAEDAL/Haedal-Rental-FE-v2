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

import { AdminBodyData, AdminHeaderData } from '../../model';

type Props = {
  adminHeaderData: AdminHeaderData[];
  adminBodyData: AdminBodyData[];
};

export const AdminItemTable = ({ adminHeaderData, adminBodyData }: Props) => {
  const navigate = useNavigate();

  const goToRentedItemDetail = (itemId: string) => {
    navigate(getDynamicPath.rentedItemDetail(String(itemId)));
  };

  const renderItemInfo = (status: string, value: string | null | undefined) => {
    return status === 'RENTAL_AVAILABLE' ? '-' : value || '-';
  };

  return (
    <table className='w-full border-collapse justify-center'>
      <thead>
        <tr className='border-b-2'>
          {adminHeaderData.map((header) => (
            <th key={header.value} className='py-2'>
              {header.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {adminBodyData.map((item, index) => (
          <tr
            key={item.itemId}
            className={cn('cursor-pointer', {
              'border-b': index !== adminBodyData.length - 1,
            })}
            onClick={() => goToRentedItemDetail(item.itemId)}
          >
            <td className='px-3 py-2'>{categoryFormat(item.itemCategory)}</td>
            <td>{item.itemName}</td>
            <td>
              <Badge variant={statusVariantMap[item.itemStatus]}>
                {statusFormat(item.itemStatus)}
              </Badge>
            </td>
            <td>
              {renderItemInfo(item.itemStatus, formatDate(item.returnDate))}
            </td>
            <td>{renderItemInfo(item.itemStatus, item.rentalMemberName)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
