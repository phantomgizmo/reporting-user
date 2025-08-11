import { lazy } from 'react';
import { useRoutes, Outlet } from 'react-router-dom';

const DashboardLayout = lazy(
  () => import('@/components/layout/dashboard-layout')
);

// const SignInPage = lazy(() => import('@/pages/auth/signin'));

const Report = lazy(() => import('@/pages/reports'));
const CreateReport = lazy(() => import('@/pages/reports/create'));
const ReportDetail = lazy(() => import('@/pages/reports/details'));

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        {
          path: '/',
          element: <Report />
        },
        {
          path: '/reports/create',
          element: <CreateReport />
        },
        {
          path: '/reports/:id',
          element: <ReportDetail />
        }
      ]
    }
  ];

  //   const publicRoutes = [
  //     {
  //       path: '/login',
  //       element: <SignInPage />,
  //       index: true
  //     }
  //   ];

  const routes = useRoutes([...dashboardRoutes]);

  return routes;
}
