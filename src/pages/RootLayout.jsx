import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "@components/ScrollToTop";
import { Suspense } from "react";
import Loading from "@components/Loading";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default RootLayout;
