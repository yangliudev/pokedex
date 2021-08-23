import React, { useEffect, useState, FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import styled from "styled-components";

const Test: NextPage = () => {
  return (
    <div>
      <TestWrapper>
        <h1>Testing Page</h1>
        <Image
          src="https://source.unsplash.com/random/400x200"
          alt="Pokeball"
          width={400}
          height={200}
          // layout="fixed"
        />
      </TestWrapper>
      <TabWrapper>
        <p>hello</p>
      </TabWrapper>
    </div>
  );
};

const TestWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabWrapper = styled.div`
  border-radius: 20px;
  padding: 40px;
`;

export default Test;
