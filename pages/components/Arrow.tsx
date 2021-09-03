import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  item_name: string;
}

const Arrow = (props: Props) => {
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const rotateArrow = () => {
    setIsArrowRotated(!isArrowRotated);
  };

  return (
    <ImageTestWrapper onClick={() => rotateArrow()}>
      <MyImage
        src="/right-arrow.png"
        alt="test"
        width={50}
        height={50}
        isArrowRotated={isArrowRotated}
      />
      {props.item_name === "1" && isArrowRotated ? (
        <p>this is 1</p>
      ) : props.item_name === "2" && isArrowRotated ? (
        <p>this is 2</p>
      ) : null}
    </ImageTestWrapper>
  );
};

export default Arrow;

const ImageTestWrapper = styled.div`
  margin: 50px auto;
  width: 100px;
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
