import React from "react";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.logoColor}>
          <img
            className={styles.logoColor_2}
            src="https://res.cloudinary.com/demo/image/fetch/f_auto/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="GoogleTema"
            width={272}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
