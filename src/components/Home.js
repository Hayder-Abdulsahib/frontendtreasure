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
            <br />
            <Link to={"/treasures"}>
              <button className="btn btn-warning">Treasure List</button>
            </Link>
          </div>
        )}
        <br />
        <div>
          <Link to={"/garbage"}>
            <button className="btn btn-danger">Garbage List</button>
          </Link>
        </div>
      </Center>
    </div>
  );
};

export default Home;
