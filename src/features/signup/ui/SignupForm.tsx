import { useForm } from 'react-hook-form';

import { signupFormSchema, type SignupFormData } from '@/features';

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

import { zodResolver } from '@hookform/resolvers/zod';

const inputFields = [
  {
    name: 'id',
    label: '아이디',
    type: 'text',
    button: '중복 확인',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log('아이디 중복 확인'); // Todo: API 요청
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
      console.log('핸드폰 번호 중복 확인'); // Todo: API 요청
    },
  },
];

export const SignupForm = () => {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
  });
  const { control, handleSubmit, formState } = form;

  const onSubmit = (data: SignupFormData) => {
    // Todo: API 요청
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        <ul className='flex flex-col gap-3 px-8'>
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
        <div className='w-full px-8'>
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
