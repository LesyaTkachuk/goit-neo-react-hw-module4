import { AiOutlineReload } from "react-icons/ai";

import Button from "../Button/Button";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <Button title="Load more" onClick={onLoadMore} icon={<AiOutlineReload />} />
  );
};

export default LoadMoreBtn;
