import React, { useContext, useRef, useEffect } from 'react';
import { MobileContext } from 'Context/MobileContext';
import styled, { css, keyframes } from 'styled-components';
import useWindowSize from 'customHooks/useWindowSize';
import style from './Texture.module.scss';

const moveSquare = () => {
  const directions = ['top', 'right', 'bottom', 'left'];
  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  return keyframes`
    from {
    ${randomDirection}: 0px;
  } to {
    ${randomDirection}: ${
    randomDirection === 'right' || randomDirection === 'bottom'
      ? -10 + 'px'
      : 10 + 'px'
  };
  }
`;
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const StyledTexture = styled.div`
  ${props =>
    props.showSquare
      ? css`
          display: flex;
          height: 100vh;
        `
      : css`
          display: none;
          height: 0;
          overflow: hidden;
        `};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Square = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${props =>
    props.position && props.position.top ? '#fff' : '#fff'};
  opacity: 0.4;
  position: relative;
  animation: ${props => moveSquare()} 900ms linear alternate infinite forwards;
`;

const Texture = () => {
  const { breakpoint, isMenuOpen } = useContext(MobileContext);

  const squareForRow = () => {
    switch (breakpoint.value) {
      case 'xs':
        return 10;
      case 'sm':
        return 15;
      default:
        return 0;
    }
  };

  const screen = useWindowSize();
  const numOfSquareForRow = squareForRow();
  const numOfSquareForColumn = Math.floor(screen.height / 50);
  const totalNumOfSquares = numOfSquareForRow * numOfSquareForColumn;
  const squaresRef = Array(totalNumOfSquares).fill(useRef(null));
  const squares = Array(totalNumOfSquares)
    .fill(null)
    .map((v, i) => ({
      id: 'id' + i,
    }));

  const getPosition = ind => {
    if (squaresRef && squaresRef[ind].current) {
      const top = parseInt(
        window
          .getComputedStyle(squaresRef[ind].current, null)
          .getPropertyValue('top'),
      );
      const left = parseInt(
        window
          .getComputedStyle(squaresRef[ind].current, null)
          .getPropertyValue('left'),
      );

      return { top, left };
    }
  };

  return (
    <StyledTexture showSquare={breakpoint.isMobile && isMenuOpen}>
      {isMenuOpen &&
        squares.map((square, ind) => {
          return (
            <StyledDiv key={square.id}>
              <Square ref={squaresRef[ind]} position={getPosition(ind)} />
            </StyledDiv>
          );
        })}
    </StyledTexture>
  );
};

export default Texture;
