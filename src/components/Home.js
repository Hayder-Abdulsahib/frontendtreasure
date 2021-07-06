import { Center } from "../styles";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <Center>
        <img src="https://drclue.com/wp-content/uploads/2016/11/trasure-hunt.jpg" />
        {user && (
          <div>
            <Link to={"/treasures"}>
              <button>Treasure List</button>
            </Link>
          </div>
        )}
        <div>
          <Link to={"/garbage"}>
            <button>Garbage List</button>
          </Link>
        </div>
      </Center>
    </div>
  );
};

export default Home;
