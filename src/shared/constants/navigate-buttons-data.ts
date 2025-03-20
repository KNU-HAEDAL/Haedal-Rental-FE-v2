import RentIcon from '@/shared/_assets/icons/rent-icon.png';
import searchIcon from '@/shared/_assets/icons/search-icon.png';
import SettingIcon from '@/shared/_assets/icons/setting-icon.png';
import WriteIcon from '@/shared/_assets/icons/write-icon.png';

import { RouterPath } from '@/shared';

export const NAVIGATE_BUTTONS_DATA = [
  {
    title: '해달 물품 목록',
    description: '해달 동아리방 물품 목록입니다.',
    icon: searchIcon,
    navigateTo: RouterPath.ITEMS,
    key: 'items',
  },
  {
    title: '물품 대여 장부 작성',
    description: '',
    icon: WriteIcon,
    navigateTo: RouterPath.APPLY_FORM,
    key: 'apply-form',
  },
  {
    title: '나의 대여 물품 확인',
    description: '님이 대여한 물품 목록입니다.',
    icon: RentIcon,
    navigateTo: RouterPath.MY_RENTAL,
    key: 'my-rental',
  },
  {
    title: '관리자 페이지',
    description: '해달 동아리방 물품을 관리합니다.',
    icon: SettingIcon,
    navigateTo: RouterPath.ADMIN,
    key: 'admin',
  },
] as const;
