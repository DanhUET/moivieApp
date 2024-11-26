import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import ModalProvider from "@context/ModalProvider";
import { lazy } from "react";
// import SearchPage from "@pages/SearchPage";
const Home = lazy(() => import("@pages/Home"));
const TVShowDetail = lazy(() => import("@pages/TVShowDetail"));
const PeoplePage = lazy(() => import("@pages/PeoplePage"));
const MovieDetail = lazy(() => import("@pages/MovieDetail"));
const SearchPage = lazy(() => import("@pages/SearchPage"));
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            },
          );
          return res;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>,
);
// const container = document.getElementById("root");

// // Tạo root chỉ một lần
// const root = ReactDOM.createRoot(container);

// // Render ứng dụng
// root.render(
//   <ModalProvider>
//     <RouterProvider router={router} />
//   </ModalProvider>,
// );
