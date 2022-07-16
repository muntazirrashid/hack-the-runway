import { useState } from "react";

const useToggle = (initialState = false) => {
  const [componentState, AlterComponentState] = useState(initialState);
  const Toggle = () => AlterComponentState(!componentState);
  return [componentState, Toggle];
};

export default useToggle;
