import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.Gmail}>
        <a href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
      </div>

      <div className={styles.Img}>
        <a href="https://www.google.com.br/imghp?hl=pt-BR&ogbl">Imagens</a>
      </div>

      <div className={styles.apps}>
        <a href="https://www.google.com.br/imghp?hl=pt-BR&ogbl">
          <img
            src="https://static.thenounproject.com/png/1714217-200.png"
            alt="Google-apps"
            width="26"
            height="26"
          />
        </a>
      </div>

      <div className={styles.profile}>
        <a href="https://accounts.google.com/SignOutOptions?hl=pt-BR&continue=https://www.google.com.br/">
          <img
            className={styles.profile_2}
            src="https://lh3.googleusercontent.com/ogw/AOh-ky1gr6twIrbb98eoWjDDnZk8xyElT2CeHf_6BLEh=s32-c-mo"
            alt="Google-profile"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
