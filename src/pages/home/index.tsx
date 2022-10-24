import React from "react";
import Header from "../../components/header";
import Nav from "../../components/nav";
import Search from "../../components/search";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <Nav />
      <Search />
    </div>
  );
};

export default Home;
