import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, TOKEN, authStorage } from '@/shared';

export const AuthButtons = () => {
  // TODO: 로그인 UI 완성 시 해당 로직 수정
  const [isLogin, setIsLogin] = useState(false);
  const name = '김해달';

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
    <div className='flex w-[550px] justify-end gap-2 py-4'>
      {isLogin ? (
        <div className='flex w-full items-center justify-between'>
          <p className='font-bold'>{name} 님 반갑습니다.</p>
          <Button variant='danger' onClick={onClickLogout}>
            로그아웃
          </Button>
        </div>
      ) : (
        <>
          <Link to='/signup'>
            <Button variant='secondary'>회원가입</Button>
          </Link>
          <Link to='/login'>
            <Button variant='primary' onClick={onClickLogin}>
              로그인
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};
