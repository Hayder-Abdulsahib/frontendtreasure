import { useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import TreasureItem from "./TreasureItem";

const TreasureList = () => {
  const user = useSelector((state) => state.auth.user);
  const treasures = useSelector((state) => state.treasures.treasures);

  const history = useHistory();
  if (!user) history.push("/");

  const treasureList = treasures.map((treasure) => (
    <TreasureItem treasure={treasure} key={treasure.id} />
  ));

  return <div>{treasureList}</div>;
};

export default TreasureList;
