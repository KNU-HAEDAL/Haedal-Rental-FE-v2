import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AdminPage,
  ApplyFormPage,
  ItemListPage,
  RentItemInfoPage,
  LoginPage,
  MainPage,
  MyItemPage,
  SignupPage,
  AddItemPage,
} from '@/pages';

import { RouterPath } from '@/shared';

const router = createBrowserRouter(
  [
    {
      path: RouterPath.ROOT,
      element: <MainPage />,
    },
    {
      path: RouterPath.LOGIN,
      element: <LoginPage />,
    },
    {
      path: RouterPath.SIGNUP,
      element: <SignupPage />,
    },
    {
      path: RouterPath.APPLY_FORM,
      element: <ApplyFormPage />,
    },
    {
      path: RouterPath.MY_ITEMS,
      element: <MyItemPage />,
    },
    {
      path: RouterPath.ITEM_LIST,
      element: <ItemListPage />,
    },
    {
      path: RouterPath.ADMIN,
      children: [
        {
          index: true,
          element: <AdminPage />,
        },
        {
          path: RouterPath.ADMIN_INFO,
          element: <RentItemInfoPage />,
        },
        {
          path: RouterPath.ADMIN_ADD_ITEM,
          element: <AddItemPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export const Routes = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};
