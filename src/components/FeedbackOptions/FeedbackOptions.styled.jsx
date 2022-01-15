import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const OptionBtn = styled.button`
  width: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #ffffff;
  background-color: gray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: transparent;
  }
`;
