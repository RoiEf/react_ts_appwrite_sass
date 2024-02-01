import { Outlet } from "react-router-dom";
// import ScrollToAnchor from "./helpers/ScrollToAnchor.tsx";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

export default function Layout() {
  return (
    <div className="container">
      {/* <ScrollToAnchor /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

