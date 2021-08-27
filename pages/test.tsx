import React, { useEffect, useState, FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Tabs } from "react-bootstrap";
import "animate.css";
import styled from "styled-components";

const Test: NextPage = () => {
  const [tabState, setTabState] = useState({
    tab1: true,
    tab2: false,
  });

  const switchTab1 = () => {
    console.log("tab 1");
    setTabState({
      tab1: true,
      tab2: false,
    });
  };
  const switchTab2 = () => {
    console.log("tab 2");
    setTabState({
      tab1: false,
      tab2: true,
    });
  };

  return (
    <div>
      <TestWrapper>
        <h1>Testing Page</h1>
        {/* <Image
          src="https://source.unsplash.com/random/400x200"
          alt="Pokeball"
          width={400}
          height={200}
          // layout="fixed"
        /> */}
      </TestWrapper>

      <BoxContainer>
        <BoxWrapper className="shadow-lg">
          <TabWrapper>
            <h2
              onClick={() => switchTab1()}
              style={{ backgroundColor: tabState.tab1 ? "" : "#ECFAFF" }}
            >
              Tab 1
            </h2>
            <h2
              onClick={() => switchTab2()}
              style={{ backgroundColor: tabState.tab2 ? "" : "#ECFAFF" }}
            >
              Tab 2
            </h2>
          </TabWrapper>
          {tabState.tab1 ? (
            <BoxBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nisl erat, tincidunt sit amet condimentum sed, dictum nec sapien.
              Donec blandit tincidunt ex, semper sollicitudin enim vestibulum
              vitae. Aliquam efficitur tempus leo, in tincidunt odio laoreet id.
              Quisque viverra, nibh eget consectetur fermentum, lacus dui
              lobortis purus, eget sagittis lectus diam vitae mauris. Aenean ac
              felis non elit auctor semper. Vivamus cursus ipsum vel elit ornare
              viverra. In libero dui, ultricies a luctus ac, volutpat porttitor
              magna. Morbi augue lorem, tincidunt eu venenatis eu, posuere ac
              felis. In sit amet facilisis sapien, faucibus commodo ante.
              Massuris vel lacinia enim, vitae pharetra purus. Nunc sapien
              tortor, rhoncus at leo at, euismod vulputate lectus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Cras hendrerit nibh
              et consequat condimentum. TAB 1
            </BoxBody>
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nisl erat, tincidunt sit amet condimentum sed, dictum nec sapien.
              Donec blandit tincidunt ex, semper sollicitudin enim vestibulum
              vitae. Aliquam efficitur tempus leo, in tincidunt odio laoreet id.
              Quisque viverra, nibh eget consectetur fermentum, lacus dui
              lobortis purus, eget sagittis lectus diam vitae mauris. Aenean ac
              felis non elit auctor semper. Vivamus cursus ipsum vel elit ornare
              viverra. TAB 2
            </p>
          )}
        </BoxWrapper>
      </BoxContainer>

      <BoxContainer>
        <div>
          <MyImage
            src="/right-arrow.png"
            alt="Pokeball"
            width={100}
            height={100}
          />
        </div>
      </BoxContainer>
    </div>
  );
};

const TestWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 0 19px 38px rgba(0, 38, 108, 0.1),
    0 15px 12px rgba(0, 38, 108, 0.1);
  width: 50%;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  justify-content: center;

  h2 {
    display: inline-block;
    width: 50%;
    text-align: center;
    color: #0194ca;
    margin: 0;
    padding: 10px;
    font-weight: 500;
  }

  h2:hover {
    cursor: pointer;
  }
`;

const BoxBody = styled.div`
  width: 100%;
  // border-radius: 5px;
  padding: 40px 40px;
  // border: 0px;
  // background-color: #ecfaff;
  font-size: 16px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
`;

const MyImage = styled(Image)`
  overflow: hidden;
  transition-duration: 0.8s;
  transition-property: transform;
  :hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

export default Test;
