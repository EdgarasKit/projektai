import "./navi.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };
  return (
    <>
      {loggedIn ? (
        <nav className="navigacija">
          <div>
            <Link to="/">
              {" "}
              <h1 className="naviguoti home">HOME</h1>
            </Link>
          </div>
          <div>
            <button className="naviguoti" onClick={logout}>
              Logout
            </button>
            <Link to="/add">
              <button className="naviguoti">Add gif</button>
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="navigacija">
          <div></div>
          <div>
            <Link to="/login">
              <button className="naviguoti">Login</button>
            </Link>
            <Link to="/register">
              <button className="naviguoti">Sign Up</button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
export default Navigation;