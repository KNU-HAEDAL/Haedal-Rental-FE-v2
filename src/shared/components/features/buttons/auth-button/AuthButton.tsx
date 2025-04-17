import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'sonner';

import { Button, RouterPath, authStorage } from '@/shared';

export const AuthButton = () => {
  const [isLogin, setIsLogin] = useState(false);
  const name = '김해달';

  useEffect(() => {
    const accessToken = authStorage.accessToken.get();
    if (accessToken !== null) {
      setIsLogin(true);
    }
  }, []);

  const onClickLogout = () => {
    toast.success('로그아웃 되었습니다.');

    setIsLogin(false);
    authStorage.accessToken.set(undefined);
    authStorage.refreshToken.set(undefined);
  };

  return (
    <section className='sm:w-pc w-mobile flex justify-end gap-2 px-3 py-3 sm:px-0'>
      {isLogin ? (
        <div className='flex w-full items-center justify-between'>
          <p className='font-bold'>{name} 님 반갑습니다.</p>
          <Button variant='danger' onClick={onClickLogout}>
            로그아웃
          </Button>
        </div>
      ) : (
        <>
          <Link to={RouterPath.SIGNUP}>
            <Button variant='secondary'>회원가입</Button>
          </Link>
          <Link to={RouterPath.LOGIN}>
            <Button variant='primary'>로그인</Button>
          </Link>
        </>
      )}
    </section>
  );
};
