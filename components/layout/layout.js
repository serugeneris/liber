import NavBar from "./nav-bar";
import ScrollToTopButton from "./scroll-to-top-button";

function Layout(props) {
  return (
    <>
      <NavBar></NavBar>
      <main>{props.children}</main>
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
