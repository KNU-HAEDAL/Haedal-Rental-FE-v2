import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/shared';
import { ContentsContainer } from '@/widgets';

import {
  CategorySelectField,
  ItemNameField,
  RentalPeriodField,
} from '../../components';
import { ApplyForm, ApplyFormSchema } from '../../model';

export const ItemApplyForm = () => {
  const form = useForm<ApplyForm>({
    resolver: zodResolver(ApplyFormSchema),
    defaultValues: {
      itemName: '',
      category: '',
      rentalStartDate: '',
      rentalEndDate: '',
      images: [],
    },
  });

  return (
    <Form {...form}>
      <form
        className='w-layout flex flex-col items-center gap-5'
        onSubmit={(e) => e.preventDefault()}
      >
        <ContentsContainer
          className='mb-0 text-start'
          title='물품 대여 장부 작성'
        >
          <ItemNameField name='itemName' />
        </ContentsContainer>
        <CategorySelectField name='category' />
        <RentalPeriodField />
      </form>
    </Form>
  );
};
