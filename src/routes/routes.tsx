import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "@/components/root/Root";
import Home from "@/pages/Home";

const Settings = lazy(() => import("../pages/Settings"));
const Processor = lazy(() => import("../pages/Processor"));
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
      {
        element: <Processor />,
        path: "processor",
      },
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
