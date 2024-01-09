import appLogo from "../../public/assets/appLogo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../ContextStore/AppProvider";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { setSearch } = useContext(AppContext);
  const totalItemsInCart = useSelector((store) => store.cart.totalQuantity);

  return (
    <>
      <header className="header flex justify-between m-3 relative bg-orange-100  items-center sm:bg-r-cream">
        <img
          data-testid="appLogo"
          src={appLogo}
          alt="app-logo"
          className="appLogo max-w-[140px] max-h-[140px]" // Arbitrary custom values to be given like this
        />
        <div className="search ">
          <TextField
            sx={{ width: "50ch" }}
            id="search-bar"
            className="text"
            variant="outlined"
            placeholder="Search........."
            size="small"
            onChange={(e) =>
              setSearch({
                type: "SEARCH_RES",
                payload: { searchText: e.target.value },
              })
            }
            style={{ paddingRight: "5px" }}
          />
          <Button
            className="m-7"
            variant="outlined"
            onClick={() => {
              setSearch({ type: "SEARCH_CLICK" });
            }}
          >
            <span className="bi-search p-0.5">Search</span>
          </Button>
        </div>
        <div className="nav-items">
          <ul className="flex mb-0 ">
            <li className="m-3 font-bold text-lg  ">
              <Link className="text-orange-800 no-underline" to="/">
                Home
              </Link>
            </li>
            <li className="m-3 font-bold text-lg ">
              <Link className="text-orange-800 no-underline" to="/offers">
                Offers
              </Link>
            </li>
            <li className="m-3 font-bold text-lg ">
              <Link to="/help" className="text-orange-800 no-underline">
                Help
              </Link>
            </li>
            <li className="m-3 font-bold text-lg ">
              <Link to="/lazy" className="text-orange-800 no-underline">
                Lazy Component
              </Link>
            </li>
            <Link to="/cart" className="no-underline text-orange-800">
              <li
                data-testid="cart"
                className="bi bi-cart m-3 font-bold no-underline "
                style={{ fontSize: "25px" }}
              >
                {totalItemsInCart === 0 ? "" : totalItemsInCart}
              </li>
            </Link>
            <li className="m-3 font-bold text-lg">
              <Button
                variant="outlined"
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                }}
                endIcon={<i className="bi bi-person"></i>}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </Button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
