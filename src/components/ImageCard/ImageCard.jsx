import css from "./ImageCard.module.css";

const name = ({ image, onImageClick }) => {
  const { alt_description, urls } = image;
  return (
    <img
      className={css.img}
      src={urls.small}
      alt={alt_description || "image"}
      onClick={() => onImageClick(image)}
    />
  );
};

export default name;
