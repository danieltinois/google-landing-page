import React, { FormEvent, useEffect, useState } from "react";
import styles from "./search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import Swal from "sweetalert2";
import Loading from "../Loading";

const Search = () => {
  const [pesquisa, setPesquisa] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  const handlePesquisar = (event: FormEvent) => {
    event.preventDefault();

    if (pesquisa === "") {
      Swal.fire(
        "Validação",
        "Favor informar alguma mensagem para pesquisa.",
        "warning"
      );
      return;
    }

    let textoParaPesquisa = pesquisa.replace(" ", "+");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Validação",
      showConfirmButton: false,
      timer: 1500,
    });

    setInterval(() => {
      window.location.href = `https://www.google.com/search?q=${textoParaPesquisa}`;
    }, 1000);
  };

  const handleChangePesquisa = (textoDigitadoNovo: string) => {
    setPesquisa(textoDigitadoNovo);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className={styles.content}>
        <form id="pesquisar" onSubmit={handlePesquisar} autoComplete="off">
          <AiOutlineSearch className={styles.searchIcon} size={18} />
          <input
            type="text"
            className={`${styles.inputConfig}`}
            id="textoDigitado"
            name="textoDigitado"
            value={pesquisa}
            onChange={({ target: { value } }) => {
              handleChangePesquisa(value);
            }}
          />
        </form>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button_p}>
          <button className={styles.button_1} onClick={handlePesquisar}>
            Pesquisa Google
          </button>
        </div>
        <div className={styles.button_p}>
          <button className={styles.button_2} onClick={handlePesquisar}>
            Estou com sorte
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
