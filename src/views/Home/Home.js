import { Link } from "react-router-dom";
import mockData from "./../../mocks/mock-data.json";

const Home = () => {
  const userActivityData = mockData.USER_ACTIVITY;
  console.log(userActivityData);
  return (
    <div className="Home">
      {userActivityData.map((user) => (
        <Link key={`user-${user.userId}`} to={`/user/${user.userId}`} >
          <button>Utilisateur {user.userId}</button>
        </Link>
      ))}
    </div>
  );
};

export default Home;