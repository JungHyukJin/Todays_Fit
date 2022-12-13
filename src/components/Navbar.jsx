import { Link } from "react-router-dom";
import { GrCoatCheck } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";
import User from "./User.jsx";
import Button from "./ui/Button.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  // const loginHandler = () => {
  //   login().then((user) => setUser(user));
  // };

  // const logoutHandler = () => {
  //   logout().then((user) => setUser(user));
  // };

  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link
        to="/"
        className="flex items-center text-4xl text-brand gap-2 mr-10"
      >
        <GrCoatCheck className="text-red shrink-0" />
        <p>Today's_Fit</p>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/cart">Cart</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsPencilSquare className="text-2xl" />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text="Login" />}
        {user && <Button onClick={logout} text="Logout" />}
      </nav>
    </header>
  );
}
