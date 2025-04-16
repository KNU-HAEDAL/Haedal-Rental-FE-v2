import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type SignupFormData, signupAPI, signupFormSchema } from '@/features';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from '@/shared';

const inputFields = [
  {
    name: 'id',
    label: '아이디',
    type: 'text',
    button: '중복 확인',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); // TODO: API 요청
    },
    guide: '영문(소문자)와 숫자 6~12자리로 입력해주세요.',
  },
  {
    name: 'password',
    label: '비밀번호',
    type: 'password',
    guide: '영문, 숫자, 특수문자 8~20자리로 입력해주세요.',
  },
  { name: 'passwordConfirm', label: '비밀번호 확인', type: 'password' },
  { name: 'name', label: '이름', type: 'text' },
  {
    name: 'phone',
    label: '휴대폰 번호',
    type: 'number',
    button: '중복 확인',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log('핸드폰 번호 중복 확인'); // TODO: API 요청
    },
  },
];

export const SignupForm = () => {
  const { mutate: signupData } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다.');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phone: '',
    },
  });
  const { control, handleSubmit, formState } = form;

  const onSubmit = (data: SignupFormData) => {
    // Todo: API 요청
    console.log(data);
    signupData({
      id: data.id,
      password: data.password,
      name: data.name,
      phoneNumber: data.phone,
    });
  };

  // const onSuccess = (data: { accessToken: string; refreshToken: string }) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-8 px-6 sm:px-8'
      >
        <ul className='flex flex-col gap-3'>
          {inputFields.map(({ name, label, type, button, onClick, guide }) => (
            <FormField
              key={name}
              control={control}
              name={name as keyof SignupFormData}
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <Label className='text-sm font-semibold'>{label}</Label>
                  <div className='flex w-full flex-row gap-3'>
                    <FormControl>
                      <Input type={type} className='text-sm' {...field} />
                    </FormControl>
                    {button && (
                      <Button
                        variant='outline'
                        className='rounded-md'
                        onClick={onClick}
                      >
                        {button}
                      </Button>
                    )}
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    {guide && <p className='text-xs text-gray-500'>{guide}</p>}
                    <FormMessage className='text-xs' />
                  </div>
                </FormItem>
              )}
            />
          ))}
        </ul>
        <div className='w-full'>
          <Button
            type='submit'
            disabled={!formState.isValid}
            size='lg'
            className='w-full px-4 py-2'
          >
            회원가입
          </Button>
        </div>
      </form>
    </Form>
  );
};
