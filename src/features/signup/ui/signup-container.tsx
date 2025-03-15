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

  // const inputFields = [
  //   { name: 'id', label: '아이디', type: 'text' },
  //   { name: 'password', label: '비밀번호', type: 'password' },
  //   { name: 'password confirm', label: '비밀번호 확인', type: 'password' },
  //   { name: 'name', label: '이름', type: 'text' },
  //   { name: 'phone', label: '휴대폰 번호', type: 'number' },
  // ];

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
            {/* 아이디 필드 */}
            <FormField
              control={control}
              name='id'
              rules={{
                required: '아이디를 입력해주세요.',
                // '영문과 숫자를 조합하여 6~12자로 입력해주세요.'
              }}
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <label className='text-sm font-semibold'>아이디</label>
                  <div className='flex w-full flex-row gap-3'>
                    <FormControl>
                      <input
                        type='text'
                        className='w-full rounded-md border px-3 py-2 text-sm'
                        {...field}
                      />
                    </FormControl>
                    <Button
                      variant='outline'
                      className='rounded-md shadow-none'
                    >
                      중복 확인
                    </Button>
                    {/* // Todo: 중복 확인 요청 */}
                  </div>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
            {/* 비밀번호 필드 */}
            <FormField
              control={control}
              name='password'
              rules={{
                required: '비밀번호를 입력해주세요.',
                // '영문, 숫자, 특수문자를 조합하여 8~20자로 입력해주세요.',
              }}
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <label className='text-sm font-semibold'>비밀번호</label>
                  <FormControl>
                    <input
                      type='password'
                      className='w-full rounded-md border px-3 py-2 text-sm'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
            {/* 비밀번호 확인 필드 */}
            <FormField
              control={control}
              name='passwordConfirm'
              rules={{
                required: '비밀번호를 입력해주세요.',
                // '비밀번호가 일치하지 않습니다.',
              }}
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <label className='text-sm font-semibold'>비밀번호 확인</label>
                  <FormControl>
                    <input
                      type='password'
                      className='w-full rounded-md border px-3 py-2 text-sm'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
            {/* 이름 필드 */}
            <FormField
              control={control}
              name='name'
              rules={{
                required: '이름을 입력해주세요.',
              }}
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <label className='text-sm font-semibold'>이름</label>
                  <FormControl>
                    <input
                      type='text'
                      className='w-full rounded-md border px-3 py-2 text-sm'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
            {/* 휴대폰 번호 필드 */}
            <FormField
              control={control}
              name='phone'
              rules={{
                required: '휴대폰 번호를 입력해주세요.',
                // '숫자만 입력해주세요.',
              }}
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <label className='text-sm font-semibold'>휴대폰 번호</label>
                  <div className='flex w-full flex-row gap-3'>
                    <FormControl>
                      <input
                        type='number'
                        className='w-full rounded-md border px-3 py-2 text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                        {...field}
                      />
                    </FormControl>
                    <Button
                      variant='outline'
                      className='rounded-md shadow-none'
                    >
                      중복 확인
                    </Button>
                    {/* // Todo: 중복 확인 요청 */}
                  </div>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
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
