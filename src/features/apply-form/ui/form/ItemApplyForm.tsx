// import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form } from '@/shared';
import { ContentsContainer } from '@/widgets';

import {
  CategorySelectField,
  ImageUploadField,
  ItemNameField,
  RentalPeriodField,
} from '../../components';
import { useGoStep } from '../../hooks';
import { ApplyForm, ApplyFormSchema } from '../../model';

type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const ItemApplyForm = ({ step, setStep }: Props) => {
  const { goNextStep, goPrevStep } = useGoStep({ step, setStep });
  // const [isValid, setIsValid] = useState({
  //   itemName: false,
  //   category: false,
  //   rentalStartDate: false,
  //   rentalEndDate: false,
  //   itemImage: false,
  // });

  const form = useForm<ApplyForm>({
    resolver: zodResolver(ApplyFormSchema),
    defaultValues: {
      itemName: '',
      category: '',
      rentalStartDate: '',
      rentalEndDate: '',
      itemImage: [],
    },
  });

  const onSubmit = () => {
    try {
      // if (!isValid.itemName) throw new Error('물품 이름을 입력해주세요.');
      // if (!isValid.category) throw new Error('카테고리를 선택해주세요.');
      // if (!isValid.rentalStartDate)
      //   throw new Error('대여 시작 날짜를 선택해주세요.');
      // if (!isValid.rentalEndDate)
      //   throw new Error('대여 종료 날짜를 선택해주세요.');
      // if (!isValid.itemImage) throw new Error('이미지를 업로드해주세요.');
      // const { itemName, category, rentalStartDate, rentalEndDate, itemImage } = form.getValues();
    } catch (error) {
      if (error instanceof Error) {
        // if (
        //   !isValid.itemName ||
        //   !isValid.category ||
        //   !isValid.rentalStartDate ||
        //   !isValid.rentalEndDate ||
        //   !isValid.itemImage
        // ) {
        //   alert(error.message);
        // }
        alert(error.message);
      }
      goNextStep();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-layout flex flex-col items-center gap-5'
      >
        <ContentsContainer
          className='mb-0 text-start'
          title='물품 대여 장부 작성'
        >
          <ItemNameField name='itemName' />
        </ContentsContainer>
        <CategorySelectField name='category' />
        <RentalPeriodField name='rentalStartDate' />
        <ImageUploadField name='itemImage' />
      </form>
      <div className='w-layout flex justify-between py-5'>
        <Button variant='secondary' onClick={() => form.reset()}>
          양식 지우기
        </Button>
        <div className='flex gap-3'>
          <Button variant='outline' onClick={goPrevStep}>
            뒤로
          </Button>
          <Button
            variant='outline'
            disabled={!form.formState.isValid}
            type='submit'
            onClick={() => form.handleSubmit(onSubmit)()}
          >
            제출
          </Button>
        </div>
      </div>
    </Form>
  );
};
