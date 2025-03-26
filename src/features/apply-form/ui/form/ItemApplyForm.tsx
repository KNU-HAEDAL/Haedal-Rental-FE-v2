import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form } from '@/shared';
import { ContentsContainer } from '@/widgets';

import {
  CategorySelectField,
  ImageUploadField,
  ItemNameField,
  ProgressBox,
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

  const form = useForm<ApplyForm>({
    resolver: zodResolver(ApplyFormSchema),
    mode: 'onChange',
    defaultValues: {
      itemName: '',
      category: '',
      rentalStartDate: '',
      rentalEndDate: '',
      itemImage: [],
    },
  });

  const onSubmit = (data: ApplyForm) => {
    console.log(data);
    goNextStep();
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
          <ItemNameField />
        </ContentsContainer>
        <CategorySelectField />
        <RentalPeriodField />
        <ImageUploadField />
      </form>
      <div className='w-layout flex flex-col items-center'>
        <ProgressBox step={step} progressValue={(step / 2) * 100} />
        <div className='flex w-full justify-center gap-3 py-3'>
          <Button variant='outline' onClick={goPrevStep}>
            뒤로
          </Button>
          <Button
            variant='primary'
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
