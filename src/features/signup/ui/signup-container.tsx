// import { useForm } from 'react-hook-form';
import { Button } from '@/shared';

// type FormData = {
//   id: string;
//   password: string;
//   passwordConfirm: string;
//   name: string;
//   phone: number;
// };

export const SignupContainer = () => {
  // const inputFields = [
  //   { name: 'id', label: '아이디', type: 'text' },
  //   { name: 'password', label: '비밀번호', type: 'password' },
  //   { name: 'password confirm', label: '비밀번호 확인', type: 'password' },
  //   { name: 'name', label: '이름', type: 'text' },
  //   { name: 'phone', label: '휴대폰 번호', type: 'number' },
  // ];

  return (
    <div className='flex w-96 flex-col gap-8 rounded-xl bg-white py-6 text-black'>
      <h1 className='px-8 text-xl font-semibold'>회원가입</h1>
      <form className='flex flex-col gap-8'>
        <ul className='flex flex-col gap-3 px-8'>
          {/* 아이디 필드 */}
          <li className='flex flex-col items-start gap-2'>
            <label className='text-sm font-semibold'>아이디</label>
            <div className='flex w-full flex-row gap-3'>
              <input
                type='text'
                className='w-full rounded-lg border px-3 py-2 text-sm'
              />
              <Button variant='outline' className='rounded-lg'>
                중복 확인
              </Button>
            </div>
            <p className='text-xs text-gray-500'>
              영문과 숫자를 조합하여 6~12자로 입력해주세요.
            </p>
          </li>
          {/* 비밀번호 필드 */}
          <li className='flex flex-col items-start gap-2'>
            <label className='text-sm font-semibold'>비밀번호</label>
            <input
              type='password'
              className='w-full rounded-lg border px-3 py-2 text-sm'
            />
            <p className='text-xs text-gray-500'>
              영문, 숫자, 특수문자를 조합하여 8~20자로 입력해주세요.
            </p>
          </li>
          {/* 비밀번호 확인 필드 */}
          <li className='flex flex-col items-start gap-2'>
            <label className='text-sm font-semibold'>비밀번호 확인</label>
            <input
              type='password'
              className='w-full rounded-lg border px-3 py-2 text-sm'
            />
            {/* <p className='text-xs text-red-500 text-red-500'> 
              비밀번호가 일치하지 않습니다.
            </p> */}
          </li>
          {/* 이름 필드 */}
          <li className='flex flex-col items-start gap-2'>
            <label className='text-sm font-semibold'>이름</label>
            <input
              type='password'
              className='w-full rounded-lg border px-3 py-2 text-sm'
            />
          </li>
          {/* 휴대폰 번호 필드 */}
          <li className='flex flex-col items-start gap-2'>
            <label className='text-sm font-semibold'>비밀번호</label>
            <div className='flex w-full flex-row gap-3'>
              <input
                type='password'
                className='w-full rounded-lg border px-3 py-2 text-sm'
              />
              <Button variant='outline' className='rounded-lg'>
                중복 확인
              </Button>
            </div>
            <p className='text-xs text-gray-500'>숫자만 입력해주세요.</p>
          </li>
        </ul>
        <div className='w-full px-8'>
          <button
            type='submit'
            className={`w-full rounded-lg border px-4 py-2 text-sm font-semibold`}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};
