import { list } from "@libs/constants";
import { createContext, useContext, useEffect, useState } from "react";
const ModalContext = createContext();
export const useModalContext = () => {
  return useContext(ModalContext);
};
const ModalProvider = ({ children }) => {
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [content, setContent] = useState();
  useEffect(() => {
    isLoadingModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [isLoadingModal]);
  const openModal = (content) => {
    setContent(content);
    setIsLoadingModal(true);
  };
  const mediaType = list;
  const [typeFilm, setTypeFilm] = useState("movie");
  const [genres, setGenres] = useState([]);
  const [statusRating, setStatusRating] = useState("all");
  return (
    <ModalContext.Provider
      value={{
        openModal,
        typeFilm,
        setTypeFilm,
        mediaType,
        genres,
        setGenres,
        statusRating,
        setStatusRating,
      }}
    >
      {children}
      {isLoadingModal && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-gray-100/40"
          onClick={() => setIsLoadingModal(!isLoadingModal)}
        >
          {content}
        </div>
      )}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
