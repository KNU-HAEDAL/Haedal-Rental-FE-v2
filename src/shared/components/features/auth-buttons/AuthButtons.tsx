import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { authStorage, Button, TOKEN } from '@/shared';

export const AuthButtons = () => {
  // TODO: 로그인 UI 완성 시 해당 로직 수정
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = authStorage.accessToken.get();
    if (accessToken !== null) {
      setIsLogin(true);
    }
  }, []);

  const onClickLogin = () => {
    setIsLogin(true);
    authStorage.accessToken.set(TOKEN.accessToken);
    authStorage.refreshToken.set(TOKEN.refreshToken);
  };

  const onClickLogout = () => {
    setIsLogin(false);
    authStorage.accessToken.set(undefined);
    authStorage.refreshToken.set(undefined);
  };

  return (
    <section className='flex w-[550px] justify-end gap-2 py-3'>
      {isLogin ? (
        <div className='flex w-full items-center justify-between'>
          <p className='font-bold'>김해달님 반갑습니다.</p>
          <Button variant='sun' onClick={onClickLogout}>
            로그아웃
          </Button>
        </div>
      ) : (
        <>
          <Link to='/signup'>
            <Button variant='ghost'>회원가입</Button>
          </Link>
          <Link to='/login'>
            <Button variant='moon' onClick={onClickLogin}>
              로그인
            </Button>
          </Link>
        </>
      )}
    </section>
  );
};
