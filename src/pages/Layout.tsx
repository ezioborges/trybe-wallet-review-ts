import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

import '../styles/screen-size.css';

function Layout() {
    const location = useLocation();

    const hideHeader = location.pathname === '/'
  return (
      <div className="screen-full-size">
      {!hideHeader && <Header />}
      <Outlet />
    </div>
  );
}

export default Layout;
