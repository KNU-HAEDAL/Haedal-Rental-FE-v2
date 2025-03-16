import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AVAILABLE_ITEM_BODIES,
  AVAILABLE_ITEM_HEADERS,
  ITEM_TYPE,
  ItemListDescriptionSection,
} from '@/features';

// Todo: DescriptionSection 스타일을 컴포넌트화할 필요
// 같은 절대 경로에서 import하는 모듈들 이름 재설정 (admin 내 모듈들)
// ITEM_TYPE에서 type이 '책'이고 value가 'book'인 게 맞나? / label: '책', type: 'book'으로 수정

import { Button, ItemTable } from '@/shared';

import { LogoContainer } from '@/widgets';

export const ItemListPage = () => {
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState<string>('책');

  const handleSelectedItem = (item: string) => {
    setIsSelected(item);
  };

  return (
    <>
      <LogoContainer title='대여 가능 물품 목록'>
        <ItemListDescriptionSection />
        {/* item list container */}
        <div className='flex w-full flex-col justify-center gap-5'>
          <div className='flex w-full justify-between px-3'>
            <div className='flex gap-2'>
              {ITEM_TYPE.map((item) => (
                <Button
                  key={item.type}
                  variant={isSelected === `${item.type}` ? 'moon' : 'outline'}
                  onClick={() => handleSelectedItem(item.type)}
                >
                  {item.type}
                </Button>
              ))}
            </div>
          </div>
          <div className='overflow-hidden px-3'>
            <ItemTable
              headers={AVAILABLE_ITEM_HEADERS}
              items={AVAILABLE_ITEM_BODIES}
              selectable={false}
              itemKey='name'
              updateSelection={(newSelection) =>
                setSelection(new Set(newSelection))
              }
              renderCell={(key, item) => {
                if (key === 'status') {
                  return (
                    <span
                      className={`flex justify-center px-1 py-1 text-sm font-bold ${
                        item.status === '대여가능'
                          ? 'bg-moon text-haedal'
                          : 'bg-sun text-white'
                      }`}
                    >
                      {item.status}
                    </span>
                  );
                }
                return item[key];
              }}
            />
          </div>
        </div>
      </LogoContainer>
      <div className='w-full pt-2 pb-6'>
        <Button
          onClick={() => navigate(-1)}
          variant='outline'
          className='px-6 shadow-md'
        >
          뒤로
        </Button>
      </div>
    </>
  );
};
