import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { default: MainLayout } = await import("../layouts/MainLayout");
      return { Component: MainLayout };
    },
    children: [
      {
        index: true,
        Component: lazy(() => import("./MainPage/MainPage")),
      },
    ],
  },
]);

export default router;
