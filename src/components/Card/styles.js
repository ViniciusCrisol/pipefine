import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 #f2576440;
  border-top: 20px solid #f2576408;
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 20px;
  }

  p {
    line-height: 20px;
    font-weight: 500;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background-color: transparent;
      box-shadow: none;
      cursor: grabbing !important;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 30px;
  height: 10px;

  border-radius: 5px;
  display: inline-block;
  background-color: ${(props) => props.color};
`;
