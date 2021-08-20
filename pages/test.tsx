import React, { useEffect, useState, FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

const Test: NextPage = () => {
  return (
    <div>
      <h1 style={{ flex: 1, textAlign: "center" }}>Testing Page</h1>
      <Image
        src="https://source.unsplash.com/random/400x200"
        alt="Pokeball"
        width={400}
        height={200}
        layout="fixed"
      />
    </div>
  );
};

export default Test;
