import React, { useEffect, useState, FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  interface Props {
    src: string;
    width: number;
    quality: number;
  }

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=12");
    const data = await res.json();
    setPokemonData(data.results);
  };

  const PokemonDataMapped = pokemonData.map((item: any, index: number) => (
    <Col key={index} className={styles.card}>
      <a
        href={`https://bulbapedia.bulbagarden.net/wiki/${item.name}_(Pok%C3%A9mon)`}
        className={styles.cardText}
      >
        <Image
          alt="pokemon"
          src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png?raw=true`}
          width={200}
          height={200}
          layout="fixed"
        />
        <p>{item.name}</p>
      </a>
    </Col>
  ));

  return (
    <div>
      <Head>
        <title>Pokédex by Yang Liu</title>
        <meta name="description" content="Next.js and PokeApi :3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* In bootstrap we have a total of 12 units */}

      <main className={styles.main}>
        <div className={styles.flexRow}>
          <h1 className={styles.title}>Pokédex</h1>
          <div className="animate__animated animate__headShake animate__infinite">
            <Image
              src="/pokeball.png"
              alt="Pokeball"
              width={120}
              height={120}
              layout="fixed"
            />
          </div>
        </div>
      </main>

      <Link href="/test">
        <h1 style={{ textAlign: "center" }}>TEST - CLICK ME</h1>
      </Link>

      <Container>
        <Row className="animate__animated animate__fadeInDown ">
          {PokemonDataMapped}
        </Row>
      </Container>

      <footer className={styles.footer}>
        <p>Developed by Yang Liu &#169; 2021</p>
      </footer>
    </div>
  );
};

export default Home;
