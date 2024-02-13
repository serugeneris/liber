import Image from "next/image";
import classes from "./landing-component.module.css";
import SearchBox from "./search-box";

function LandingComponent() {
  return (
    <section className={classes.container}>
      <div className={classes.image}>
        <Image
          src="/landing-page.webp"
          width={640}
          height={640}
          //style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>
      <div className={classes.search}>
        <div className={classes.h1}>
          <h1>Find the book you've been looking for...</h1>
        </div>
        <SearchBox></SearchBox>
      </div>
    </section>
  );
}

export default LandingComponent;
