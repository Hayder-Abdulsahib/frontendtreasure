import { useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import GarbageItem from "./GarbageItem";
import { Center } from "../styles";

const GarbageList = () => {
  const garbages = useSelector((state) => state.garbages.garbages);

  const history = useHistory();

  const garbageList = garbages.map((garbage) => (
    <GarbageItem garbage={garbage} key={garbage.id} />
  ));

  return (
    <div>
      <Center>
        <br />
        <h2>Garbage List</h2>
        <br />
        {garbageList}
      </Center>
    </div>
  );
};

export default GarbageList;
