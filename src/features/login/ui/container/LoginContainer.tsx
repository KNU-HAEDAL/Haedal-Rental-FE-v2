import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  authStorage,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  RouterPath,
  TOKEN,
} from '@/shared';

type FormData = {
  id: string;
  password: string;
};

export const LoginContainer = () => {
  const form = useForm<FormData>({ mode: 'onChange' });
  const { control, handleSubmit, formState } = form;

  const navigate = useNavigate();

  const inputFields = [
    { name: 'id', label: '아이디', type: 'text' },
    { name: 'password', label: '비밀번호', type: 'password' },
  ];

  const onSubmit = (data: FormData) => {
    // TODO: API 요청 로직 추가
    authStorage.accessToken.set(TOKEN.accessToken);
    authStorage.refreshToken.set(TOKEN.refreshToken);

    navigate(RouterPath.ROOT);
    alert('로그인 성공');

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
                    <Label className='text-sm font-semibold'>{label}</Label>
                    <FormControl>
                      <Input type={type} {...field} className='text-sm' />
                    </FormControl>
                    <FormMessage className='text-xs' />
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
              로그인
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
