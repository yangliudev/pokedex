import React, { useEffect, useState, FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Tabs } from "react-bootstrap";
import "animate.css";
import { motion } from "framer-motion";
import styled from "styled-components";

const Test: NextPage = () => {
  // Testing for tab switching
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

  // Testing for rotating ONE image

  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const rotateArrow = () => {
    setIsArrowRotated(!isArrowRotated);
  };

  // Testing for mapped image rotating component

  const [isImageRotated, setIsImageRotated] = useState(false);

  const [itemArray, setItemArray] = useState({
    Item1: false,
    Item2: false,
    Item3: false,
  });

  const rotateImage = (key, value) => {
    setItemArray({
      ...itemArray,
      [key]: !value,
    });
  };

  const ItemArrayComponent: Function = (): JSX.Element[] => {
    return Object.keys(itemArray).map((item: any, index: number) => (
      <Bar key={index}>
        <p style={{ fontSize: 40 }}>{item}</p>
        <ImageRotateWrapper
          isImageRotated={itemArray[item]}
          //animate={itemArray[item] ? { rotate: 90 } : { rotate: 0 }}
          onClick={() => rotateImage(item, itemArray[item])}
        >
          <Image src="/right-arrow.png" alt="Pokeball" width={50} height={50} />
        </ImageRotateWrapper>
      </Bar>
    ));
  };

  return (
    <div>
      <TestWrapper>
        <h1>Testing Page</h1>
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
        <ItemArrayComponent />
      </BoxContainer>
      <ImageTestWrapper onClick={() => rotateArrow()}>
        <MyImage
          src="/right-arrow.png"
          alt="test"
          width={50}
          height={50}
          isArrowRotated={isArrowRotated}
        />
      </ImageTestWrapper>
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

const ImageRotateWrapper = styled.div<{
  isImageRotated: boolean;
  isArrowRotated: boolean;
}>`
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  -webkit-backface-visibility: hidden;

  transform: ${({ isImageRotated, isArrowRotated }) =>
    isImageRotated || isArrowRotated ? "rotate(90deg)" : "rotate(0deg)"};
`;

const MyImage = styled.img<{ isArrowRotated: boolean }>`
  display: block;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;

  -webkit-transform: ${(props) =>
    props.isArrowRotated ? "rotate(90deg)" : "rotate(0deg)"};
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
`;

const Bar = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 400px;
  padding: 10px 20px;
  margin: 10px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //margin-left: 10%;
  margin-top: 5%;
  p {
    margin: 0px;
  }
  :hover {
    cursor: pointer;
  }
`;

const ImageTestWrapper = styled.div`
  margin: 50px auto;
  width: 100px;
`;

export default Test;
