import { ContentsContainer } from '@/widgets';

import {
  CategorySelectBox,
  ImageUploadBox,
  ItemNameBox,
} from '../../components';

export const CreateSection = () => {
  return (
    <div className='w-layout flex flex-col items-center gap-5'>
      <ContentsContainer className='mb-0' title='물품 대여 장부 작성'>
        <ItemNameBox />
      </ContentsContainer>

      <section className='w-full border p-6 text-start'>
        <CategorySelectBox />
      </section>

      <section className='w-full border p-6 text-start'>
        {/* <RentalPeriodBox /> */}
      </section>

      <section className='w-full border p-6 text-start'>
        <ImageUploadBox />
      </section>
    </div>
  );
};
