import { Outlet } from "react-router-dom";
// import ScrollToAnchor from "./helpers/ScrollToAnchor.tsx";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

export default function Layout() {
  return (
    <>
      {/* <ScrollToAnchor /> */}
      <Header />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

