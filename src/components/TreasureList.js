import { useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import TreasureItem from "./TreasureItem";

import { Center } from "../styles";

const TreasureList = () => {
  const user = useSelector((state) => state.auth.user);
  const treasures = useSelector((state) => state.treasures.treasures);

  const history = useHistory();
  if (!user) history.push("/");

  const treasureList = treasures.map((treasure) => (
    <TreasureItem treasure={treasure} key={treasure.id} />
  ));

  return (
    <div>
      <Center>
        <br />
        <h2>Treasure List</h2>
        <br />
        {treasureList}
      </Center>
    </div>
  );
};

export default TreasureList;
