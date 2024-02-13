import Logo from "./logo";
import classes from "./nav-bar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo></Logo>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/books">All Books</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
