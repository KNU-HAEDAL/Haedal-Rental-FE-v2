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

  const onSubmit = (data: FormData) => {
    // Todo: API 요청
    console.log(data);
  };

  // const inputFields = [
  //   { name: 'id', label: '아이디', type: 'text' },
  //   { name: 'password', label: '비밀번호', type: 'password' },
  // ];

  return (
    <div className='flex w-96 flex-col gap-8 rounded-xl bg-white py-6 text-black'>
      <h1 className='px-8 text-xl font-semibold'>로그인</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-8'
        >
          <ul className='flex flex-col gap-3 px-8'>
            {/* {inputFields.map(({ name, label, type }) => ( */}
            <FormField
              name='id'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-semibold'>아이디</label>
                  <FormControl>
                    <input
                      type='text'
                      {...field}
                      className='w-full rounded-lg border px-3 py-2 text-sm'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='password'
              render={({ field }) => (
                <FormItem>
                  <label className='text-sm font-semibold'>비밀번호</label>
                  <FormControl>
                    <input
                      type='password'
                      {...field}
                      className='w-full rounded-lg border px-3 py-2 text-sm'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ))}  */}
          </ul>
          <div className='w-full px-8'>
            <button
              type='submit'
              disabled={!form.formState.isValid}
              className={cn(
                `w-full rounded-lg border px-4 py-2 text-sm font-semibold`,
                !form.formState.isValid
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
