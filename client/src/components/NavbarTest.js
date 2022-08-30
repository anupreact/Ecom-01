import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { logout } from "../../actions/loginActions";
import { useToastMessage } from "../Testing/Hooks/useToastMessage";
import "./NavBar.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

function NavBar() {
  const authUser = localStorage.getItem("authUser");
  const dispatch = useDispatch();
  const notifyMessage = useToastMessage();

  const loginState = useSelector((state) => state.loginReducer);

  const [loginRedirect, setLoginRedirect] = useState(false);

  //   const { authUser } = loginState;

  //   console.log("authUser---", authUser);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              className="drop"
              onClick={() => {
                setLoginRedirect(true);
                notifyMessage("Logged out successfuly ");
                setTimeout(() => {
                  dispatch(logout());
                  setLoginRedirect(false);
                }, 1000);
              }}
            >
              <i
                class="fa fa-sign-in"
                style={{ color: "black", marginRight: ".2rem" }}
                aria-hidden="true"
              ></i>
              Logout
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <NavLink activeClassName="active" className="drop" to="/orders">
              <i class="fa fa-truck"  aria-hidden="true"></i>{" "}
              {" "}My Orders
            </NavLink>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <>
      <ToastContainer position="top-left" />

      {!authUser && (loginRedirect ? <Navigate to="/" /> : "")}

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </div>

          <div className={click ? "nav-menu active" : "nav-menu"}>
            {/* <span>{authUser ? "hello auth" : "No Auth"}</span> */}

            {authUser ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/cart"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <i
                      class="fa fa-cart-plus"
                      style={{ color: "white", marginRight: ".2rem" }}
                      aria-hidden="true"
                    ></i>
                    Cart
                  </NavLink>
                </li>

                <li className="nav-item">
                  <Dropdown overlay={menu}>
                    <a
                      className="nav-links "
                      onClick={(e) => e.preventDefault()}
                    >
                      <Space>
                        <span>Anup</span>
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/cart"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <i
                      class="fa fa-cart-plus"
                      style={{ color: "white", marginRight: ".2rem" }}
                      aria-hidden="true"
                    ></i>
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <i
                      class="fa fa-sign-in"
                      style={{ color: "white", marginRight: ".2rem" }}
                      aria-hidden="true"
                    ></i>
                    Login/Sign-up
                  </NavLink>
                </li>
              </>
            )}
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              style={{ color: "white" }}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
