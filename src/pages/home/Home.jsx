import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section id="home">
        <main>
          <h1>LIG LAV LAVAGEM©</h1>
          <p>
            Somos uma verdadeira lavanderia em domicílio, com produtos de otima
            qualidade.
          </p>
          <button>
            <Link to="about" smooth={true}>
              Conheça
            </Link>
          </button>
          <img src="/background-home.webp" alt="" />
        </main>
      </section>
    </>
  );
};

export default Home;
