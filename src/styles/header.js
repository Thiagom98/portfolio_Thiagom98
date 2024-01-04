import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;
  background-color: var(--color-grey-600);
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-primary);

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const RightDiv = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  margin-right: 10px;
`;