import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button, Form, ItemCategory, NAVIGATE_BUTTONS_DATA } from '@/shared';
import { BottomContainer, ButtonSection, ContentsContainer } from '@/widgets';

import { RentalItemRequest, itemRentalAPI } from '../../apis';
import {
  CategorySelectField,
  ImageUploadField,
  ItemNameField,
  RentalPeriodField,
} from '../../components';
import { useGoStep } from '../../hooks';
import { ApplyForm, ApplyFormSchema } from '../../model';
import { ProgressSection } from '../section';

type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const ApplyFormStep = ({ step, setStep }: Props) => {
  const { goNextStep } = useGoStep({ step, setStep });

  const { mutate: applyItemMutate } = useMutation({
    mutationFn: (data: RentalItemRequest) => itemRentalAPI(data),
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      onError();
    },
  });

  const navigate = useNavigate();

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

  const onSuccess = () => {
    toast.success('물품 대여 요청이 제출되었습니다!');
    goNextStep();
  };

  const onError = () => {
    toast.error('물품 대여 요청이 제출되지 않았습니다. 다시 시도해주세요.');
  };

  const onSubmit = (data: ApplyForm) => {
    applyItemMutate({
      name: data.itemName,
      itemCategory: data.category as ItemCategory,
      rentalDate: data.rentalStartDate,
      returnDate: data.rentalEndDate,
      picture: data.itemImage[0],
    });

    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-layout mb-3 flex flex-col gap-5'
      >
        <ContentsContainer title={NAVIGATE_BUTTONS_DATA[1].title}>
          <ItemNameField />
        </ContentsContainer>
        <CategorySelectField />
        <RentalPeriodField />
        <ImageUploadField />
      </form>
      <BottomContainer>
        <ProgressSection step={step} progressValue={(step / 2) * 100} />
        <ButtonSection>
          <Button variant='outline' onClick={() => navigate(-1)}>
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
        </ButtonSection>
      </BottomContainer>
    </Form>
  );
};
