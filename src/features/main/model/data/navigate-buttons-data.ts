import RentIcon from '@/features/_assets/main/rent-icon.png';
import searchIcon from '@/features/_assets/main/search-icon.png';
import SettingIcon from '@/features/_assets/main/setting-icon.png';
import WriteIcon from '@/features/_assets/main/write-icon.png';

import { RouterPath } from '@/shared';

export const NAVIGATE_BUTTONS_DATA = [
  {
    title: '해달 물품 목록',
    description: '해달 동아리방 물품 목록입니다.',
    icon: searchIcon,
    navigateTo: RouterPath.ITEM_LIST,
    key: 'search',
  },
  {
    title: '물품 대여 장부 작성',
    description: '',
    icon: WriteIcon,
    navigateTo: RouterPath.APPLY_FORM,
    key: 'write',
  },
  {
    title: '나의 물품 대여 확인',
    description: '김해달 님이 대여한 물품 목록입니다.', // Todo: 이름 동적으로 변경
    icon: RentIcon,
    navigateTo: RouterPath.MY_ITEMS,
    key: 'my-rent',
  },
  {
    title: '관리자 페이지',
    description: '해달 동아리방 물품을 관리합니다.',
    icon: SettingIcon,
    navigateTo: RouterPath.ADMIN,
    key: 'admin',
  },
] as const;

// Todo: 파일 경로 변경
