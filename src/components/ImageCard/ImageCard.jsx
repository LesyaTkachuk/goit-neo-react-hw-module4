import css from "./ImageCard.module.css";

const name = ({ image }) => {
  const { alt_description, urls } = image;
  return (
    <div>
      <img
        className={css.img}
        src={urls.small}
        alt={alt_description || "image"}
      />
    </div>
  );
};

export default name;
