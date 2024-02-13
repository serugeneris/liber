import Image from "next/image";
import classes from "./logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <div className={classes.image}>
        <Image src="/liber-logo.webp" alt="logo" width={65} height={65}></Image>
      </div>
    </div>
  );
}

export default Logo;
