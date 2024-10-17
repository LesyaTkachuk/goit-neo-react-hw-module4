import ReactModal from "react-modal";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

import Loader from "../Loader/Loader";
import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  content: {
    backgroundColor: "transparent",
    padding: 0,
    width: "fit-content",
    border: "none",
    display: "flex",
    flexDirection: "column",
    alightItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    color: "white",
  },
};

const ImageModal = ({ isOpen, image, closeModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoadError, setIsImageLoadError] = useState(false);

  const onError = () => {
    setIsImageLoadError(true);
    setIsLoading(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Image Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      {isLoading && <Loader />}

      {isImageLoadError && (
        <h3>
          Sorry, we couldn&apos;t load image at the moment. Try again later
        </h3>
      )}

      {!isImageLoadError && (
        <div className={css.container}>
          <img
            src={image?.urls?.regular || ""}
            alt={image?.alt_description || "image"}
            onLoad={() => setIsLoading(false)}
            onError={onError}
          />
          {!isLoading && (
            <div className={css.info}>
              <p>Author: {image?.user?.name || "Unknown"} </p>
              {image?.user?.instagram_username && (
                <p>
                  <FaInstagram className={css.icon} /> {image.user.instagram_username}
                </p>
              )}

              <p>Likes: {image?.likes || 0}</p>
            </div>
          )}
        </div>
      )}
    </ReactModal>
  );
};

export default ImageModal;
