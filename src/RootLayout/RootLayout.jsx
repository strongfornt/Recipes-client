import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../shared/NavBar/Nav";
import TopHeader from "../shared/NavBar/TopHeader";
import Footer from "../shared/Footer/Footer";
import Spinner from "../shared/Spineer/Spinner";

export default function RootLayout() {
  const navigation = useNavigation()
  return (
    <>
      <header>
        <TopHeader />
      </header>
      <header>
        <Nav />
      </header>
      <main>
      {
            navigation.state ==="loading" ? <Spinner/> : <Outlet/>
        }
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
