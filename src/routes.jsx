import MainLayout from "./Layouts/MainLayout";
import SocialMediaLayout from "./Layouts/SocialMediaLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Tasks from "./Projects/1-Tasks";
import SocialMedia from "./Projects/2-Social-Media";
import Discover from "./Projects/2-Social-Media/pages/Discover";
import Profile from "./Projects/2-Social-Media/pages/Profile";
import Register from "./Projects/2-Social-Media/pages/Register";
import QrCodeGenerator from "./Projects/3-QrCodeGenerator";
import SongLyricsFinder from "./Projects/4-SongLyricsFinder";

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
        path: "social-media",
        element: <SocialMediaLayout />,
        children: [
          {
            index: true,
            element: <SocialMedia />,
          },
          {
            path: "discover",
            element: <Discover />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: ":profile",
            element: <Profile />,
          },
          {
            path: "post/:postID",
            element: "Post",
          },
        ],
      },
      {
        path: "qr-code-generator",
        element: <QrCodeGenerator />,
      },
      {
        path: "song-lyrics-finder",
        element: <SongLyricsFinder />,
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
