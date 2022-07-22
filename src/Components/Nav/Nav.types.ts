import type { Dispatch, SetStateAction } from "react";

type NavProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default NavProps;
