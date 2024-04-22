import Logo from "./logo";
import classes from "./nav-bar.module.css";
import Link from "next/link";

function NavBar() {
  const links = [
    { href: "/books", title: "All Books" },
    { href: "/contact", title: "Contact" },
    { href: "/login", title: "Login" },
  ];

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo></Logo>
      </Link>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
