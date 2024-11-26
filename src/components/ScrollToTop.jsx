import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  useEffect(() => {
    // Cuộn lên đầu khi đường dẫn thay đổi
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null; // Thành phần này không cần render gì
};

export default ScrollToTop;
