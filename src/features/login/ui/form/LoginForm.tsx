import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  RouterPath,
  authStorage,
} from '@/shared';

import { loginApi } from '../../apis/login.api';

type FormData = {
  id: string;
  password: string;
};

export const LoginForm = () => {
  const { mutate: loginData } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSuccess = (data: { accessToken: string; refreshToken: string }) => {
    navigate(RouterPath.ROOT);

    authStorage.accessToken.set(data.accessToken);
    authStorage.refreshToken.set(data.refreshToken);
    console.log(data);
  };

  const form = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const { control, handleSubmit, formState } = form;

  const navigate = useNavigate();

  const inputFields = [
    { name: 'id', label: '아이디', type: 'text' },
    { name: 'password', label: '비밀번호', type: 'password' },
  ];

  const onSubmit = (data: FormData) => {
    loginData({
      id: data.id,
      password: data.password,
    });
  };

  return (
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
  );
};
