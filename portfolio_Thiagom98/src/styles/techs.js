import styled from 'styled-components';

export const TechsContainer = styled.section`
  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #eaeaea;
  overflow-x: auto; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleTechs = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-family: var(--font-primary);
`;

export const ListTechs = styled.ul`
  display: flex;
  justify-content: space-around;
`;
export const IconTechs = styled.li`
  margin-right: 10px;
`;