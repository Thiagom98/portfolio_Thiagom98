import styled from "styled-components";

export const SectionContainer = styled.section`
  background-color: var(--color-secundary); 
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: var(--font-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: 15%;
  margin-right: 15%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: inherit;
  color: #fff;
  padding: 10px 20px;
  margin-right: 10px;
  border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff ;
    color: var(--color-grey-600);  /* Cor do botão ao passar o mouse */
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;