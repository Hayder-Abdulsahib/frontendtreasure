import { useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import GarbageItem from "./GarbageItem";

const GarbageList = () => {
  const garbages = useSelector((state) => state.garbages.garbages);

  const history = useHistory();

  const garbageList = garbages.map((garbage) => (
    <GarbageItem garbage={garbage} key={garbage.id} />
  ));

  return <div>{garbageList}</div>;
};

export default GarbageList;
