import RentIcon from '@/features/_assets/main/rent-icon.png';
import searchIcon from '@/features/_assets/main/search-icon.png';
import SettingIcon from '@/features/_assets/main/setting-icon.png';
import WriteIcon from '@/features/_assets/main/write-icon.png';

import { RouterPath } from '@/shared';

export const NAVIGATE_BUTTONS_DATA = [
  {
    title: '해달 물품 목록',
    icon: searchIcon,
    navigateTo: RouterPath.ITEM_LIST,
    key: 'search',
  },
  {
    title: '물품 대여 장부 작성',
    icon: WriteIcon,
    navigateTo: RouterPath.APPLY_FORM,
    key: 'write',
  },
  {
    title: '나의 물품 대여 확인',
    icon: RentIcon,
    navigateTo: RouterPath.MY_ITEMS,
    key: 'my-rent',
  },
  {
    title: '관리자 페이지',
    icon: SettingIcon,
    navigateTo: RouterPath.ADMIN,
    key: 'admin',
  },
] as const;
