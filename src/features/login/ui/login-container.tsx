import { useForm } from 'react-hook-form';

import {
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
};

export const LoginContainer = () => {
  const form = useForm<FormData>({ mode: 'onChange' });

  const { control, handleSubmit, formState } = form;

  const inputFields = [
    { name: 'id', label: '아이디', type: 'text' },
    { name: 'password', label: '비밀번호', type: 'password' },
  ];

  const onSubmit = (data: FormData) => {
    // Todo: API 요청
    console.log(data);
  };

  return (
    <div className='flex w-96 flex-col gap-8 rounded-xl bg-white py-6 text-black'>
      <h1 className='px-8 text-xl font-semibold'>로그인</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
          <ul className='flex flex-col gap-3 px-8'>
            {inputFields.map(({ name, label, type }) => (
              <FormField
                key={name}
                control={control}
                name={name as keyof FormData}
                rules={{ required: `${label}를 입력해주세요.` }}
                render={({ field }) => (
                  <FormItem className='flex flex-col items-start'>
                    <label className='text-sm font-semibold'>{label}</label>
                    <FormControl>
                      <input
                        type={type}
                        {...field}
                        className='w-full rounded-lg border px-3 py-2 text-sm'
                      />
                    </FormControl>
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
                `w-full rounded-lg border px-4 py-2 text-sm font-semibold`,
                !formState.isValid
                  ? 'cursor-not-allowed bg-gray-200 text-gray-500'
                  : 'bg-[#0F1729] text-white',
              )}
            >
              로그인
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
