import { useForm } from 'react-hook-form';

type FormData = {
  id: string;
  password: string;
};

export const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    // Todo: API 요청
    console.log(data);
  };

  const inputFields = [
    { name: 'id', label: '아이디', type: 'text' },
    { name: 'password', label: '비밀번호', type: 'password' },
  ];

  return (
    <div className='flex w-96 flex-col gap-8 rounded-xl bg-white py-6 text-black'>
      <h1 className='px-8 text-xl font-semibold'>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        <ul className='flex flex-col gap-3 px-8'>
          {inputFields.map(({ name, label, type }) => (
            <li key={name} className='flex flex-col items-start gap-2'>
              <label className='text-sm font-semibold'>{label}</label>
              <input
                type={type}
                {...register(name as keyof FormData, {
                  required: `${label}를 입력해주세요.`,
                })}
                className='w-full rounded-lg border px-3 py-2 text-sm'
              />
              {errors[name as keyof FormData] && (
                <p className='text-xs text-red-500'>
                  {errors[name as keyof FormData]?.message}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div className='w-full px-8'>
          <button
            type='submit'
            disabled={!isValid}
            className={`w-full rounded-lg border px-4 py-2 text-sm font-semibold ${!isValid ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'bg-[#0F1729] text-white'} `}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};
