import { Outlet, useLocation } from "react-router-dom";

function Layout() {
    const location = useLocation();

    const hideHeader = location.pathname === '/'
  return (
      <>
      {!hideHeader && <h1>Ta mostrando o Header</h1>}
      <Outlet />
    </>
  );
}

export default Layout;
