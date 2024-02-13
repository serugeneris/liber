import NavBar from "./nav-bar";

function Layout(props) {
  return (
    <>
      <NavBar></NavBar>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
