import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="120"
      width="120"
      color="#2626bd"
      ariaLabel="bars-loading"
      visible={true}
      wrapperStyle={{ alignSelf: "center" }}
    />
  );
};

export default Loader;
