import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Tasks from "./Projects/1-Tasks";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
