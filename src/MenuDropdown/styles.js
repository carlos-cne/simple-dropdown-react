import styled from "styled-components";

const px2vw = (size, defaultWidth = 1440) => `${(size / defaultWidth) * 100}vw`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  width: max-content;
  height: max-content;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 8px 0 rgba(206, 206, 206, 0.5);
  border: 1px solid #c0c0c6;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? "visibility" : "hidden")};
  position: absolute;
  transition: all 300ms ease;
  top: ${px2vw(28)};
  right: -25px;
`;

export const Container = styled.div`
  width: ${px2vw(24)};
  height: ${px2vw(24)};
  object-fit: contain;
  svg {
    width: 100%;
    height: 100%;
  }
  position: relative;
  outline: none;
  cursor: pointer;
  border: none;
`;
