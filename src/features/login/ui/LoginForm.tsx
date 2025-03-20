import { useForm } from 'react-hook-form';

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

type FormData = {
  id: string;
  password: string;
};

export const LoginForm = () => {
  const form = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  });
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
