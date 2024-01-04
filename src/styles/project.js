import styled from 'styled-components';

export const ProjectContainer = styled.section`
  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;
  background-color: var(--color-grey-600);
  font-family:var(--font-primary) ;
  color: #fff;
`;

export const ProjectTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: var(--color-grey-600);
`;

export const CardContent = styled.p`
  font-size: 14px;
  color: var(--color-grey-600);
`;

export const CardLink = styled.a`
    font-size: 14px;
    font-weight: bold;
    color: var(--color-grey-600);
`