import css from "./Button.module.css";

const Button = ({ icon, title, onClick = () => {}, ...props }) => {
  return (
    <button className={css.button} onClick={onClick} {...props}>
      {!!icon && icon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
