import { useForm } from 'react-hook-form';

import {
  Button,
  cn,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared';

type FormData = {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: number;
};

export const SignupContainer = () => {
  const form = useForm<FormData>({ mode: 'onChange' });
  const { control, handleSubmit, formState } = form;

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
    },
    { name: 'password', label: '비밀번호', type: 'password' },
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

  const onSubmit = (data: FormData) => {
    // Todo: API 요청
    console.log(data);
  };

  return (
    <div className='flex w-96 flex-col gap-8 rounded-xl bg-white py-6 text-black'>
      <h1 className='px-8 text-xl font-semibold'>회원가입</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
          <ul className='flex flex-col gap-3 px-8'>
            {inputFields.map(({ name, label, type, button, onClick }) => (
              <FormField
                key={name}
                control={control}
                name={name as keyof FormData}
                rules={{ required: `${label}을 입력해주세요.` }}
                render={({ field }) => (
                  <FormItem className='flex flex-col items-start'>
                    <label className='text-sm font-semibold'>{label}</label>
                    <div className='flex w-full flex-row gap-3'>
                      <FormControl>
                        <input
                          type={type}
                          className='w-full rounded-md border px-3 py-2 text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                          {...field}
                          value={field.value}
                        />
                      </FormControl>
                      {button && (
                        <Button
                          variant='outline'
                          className='rounded-md shadow-none'
                          onClick={onClick}
                        >
                          {button}
                        </Button>
                      )}
                    </div>
                    <FormMessage className='text-xs' />
                  </FormItem>
                )}
              />
            ))}
          </ul>
          <div className='w-full px-8'>
            <button
              type='submit'
              disabled={!formState.isValid}
              className={cn(
                `w-full rounded-md border px-4 py-2 text-sm font-semibold`,
                !formState.isValid
                  ? 'cursor-not-allowed bg-gray-200 text-gray-500'
                  : 'bg-haedal text-white',
              )}
            >
              회원가입
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
