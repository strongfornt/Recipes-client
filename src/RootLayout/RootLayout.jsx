import { Outlet } from "react-router-dom";
import Nav from "../shared/NavBar/Nav";
import TopHeader from "../shared/NavBar/TopHeader";
import Footer from "../shared/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <header>
        <TopHeader />
      </header>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
