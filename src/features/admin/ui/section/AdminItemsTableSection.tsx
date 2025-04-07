import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, ItemStatus, RouterPath, Spinner } from '@/shared';

import { AdminItemTable } from '../../components';
import { RemoveAlert } from '../../components/alter';
import { useGetAdminItemList } from '../../hooks';
import { ADMIN_ITEM_HEADERS } from '../../model';

export const AdminItemsTableSection = () => {
  const [statusFilter, setStatusFilter] = useState<ItemStatus | ''>('');
  const [open, setOpen] = useState<boolean>(false);

  const { data: itemListData, isPending } = useGetAdminItemList({
    itemStatus: statusFilter,
  });

  const navigate = useNavigate();

  const toggleStatusFilter = (status: ItemStatus) => {
    setStatusFilter((prev) => (prev === status ? '' : status));
  };

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full px-3'>
        <div className='flex w-full justify-between'>
          <div className='flex gap-2'>
            <Button
              variant={
                statusFilter === 'RENTAL_AVAILABLE' ? 'moonTag' : 'outline'
              }
              onClick={() => toggleStatusFilter('RENTAL_AVAILABLE')}
            >
              대여 가능
            </Button>
            <Button
              variant={statusFilter === 'RENTING' ? 'moonTag' : 'outline'}
              onClick={() => toggleStatusFilter('RENTING')}
            >
              대여 중
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button onClick={() => navigate(RouterPath.ADMIN_ADD_ITEM)}>
              물품 추가
            </Button>
            <Button variant='danger' onClick={() => setOpen(true)}>
              물품 삭제
            </Button>
          </div>
        </div>
        <div className='overflow-hidden pt-5'>
          <AdminItemTable
            adminHeaderData={ADMIN_ITEM_HEADERS}
            adminBodyData={Array.isArray(itemListData) ? itemListData : []}
          />
        </div>
      </div>
      <RemoveAlert open={open} setOpen={setOpen} />
    </>
  );
};
