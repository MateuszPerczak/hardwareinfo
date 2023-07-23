import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "@/components/root/Root";
import Home from "@/pages/Home";

// const Library = lazy(() => import("../pages/library/Library"));
const Settings = lazy(() => import("../pages/Settings"));
// const Playlist = lazy(() => import("../pages/playlist/Playlist"));
// const Updates = lazy(() => import("../pages/updates/Updates"));

// const Home = lazy(() => import("../pages/Home"));
// const Blog = lazy(() => import("../pages/Blog"));
// const Dev = lazy(() => import("../pages/Dev"));
// const PageNotFound = lazy(() => import("../components/pageNotFound/PageNotFound"));

// const Library = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../pages/library/Library")), 30000);
//   });
// });

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        path: "home",
      },
      // {
      //   element: <Settings />,
      //   path: "settings",
      // },
      // {
      //   element: <Playlist />,
      //   path: "playlist/:id",
      // },
      {
        element: <Settings />,
        path: "settings",
      },
      { path: "*", element: <></> },
    ],
  },
]);
