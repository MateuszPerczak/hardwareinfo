import type { Dispatch, SetStateAction } from "react";

type NavProps = {
  setPage: Dispatch<SetStateAction<string>>;
};

export default NavProps;
