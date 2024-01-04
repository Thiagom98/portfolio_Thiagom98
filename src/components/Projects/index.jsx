import { ProjectContainer, ProjectList, ProjectTitle } from "../../styles/project";
import { ProjectCard, ProjectCard2 } from "./ProjectCard";

export const ProjectSection = () => {
    return (
      <ProjectContainer>
        <ProjectTitle>Meus Projetos</ProjectTitle>
        <ProjectList>
          <ProjectCard title={"KenzieMovie"} text={"Um projeto front end realizado em equipe, feito utilizando typescript e react. Disponibiliza as funções de um site de avaliações de filme."} link={"https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-movie-entrega-template-grupo-3-tsunode"} />
          <ProjectCard title={"KenzieHub"}  text={"Um projeto front que possui criação e login de usuários e uma página contendo informações do usuário, realizado em react e javascript"} link={"https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_Thiagom98"}/>
          <ProjectCard title={"Kimóveis"}  text={"Projeto front onde simulamos uma imobiliária. É possível realizar o cadastro de imóveis e de usuários interessados na aquisição de propriedades. Além disso, deverá ser possível realizar o agendamento e consultar horários de visitas às propriedades disponíveis no banco de dados da imobiliária. Realizado utilizando TypeORM e relacionamentos. "} link={"https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis_Thiagom98"}/>
          <ProjectCard title={"BandKamp Generic View"}  text={"Refatoração de um projeto anterior, aplicando os conceitos de Generic View, Model Serializer e alterando o banco de dados para o PostgreSQL."} link={"https://github.com/Thiagom98/m5-bandkamp-generic-view_Thiagom98"}/>
          <ProjectCard title={"Kanvas"}  text={"Projeto que desenvolve uma API Rest para o gerenciamento de cursos e aulas de uma escola de modalidade EAD. Possui diversas rotas e diversos relacionamentos. Feito em python."} link={"https://github.com/Thiagom98/m5-projeto-final-kanvas_Thiagom98"}/>
          <ProjectCard2 title={"Agenda Online FullStack"}  text={"Projeto fullstack que simula uma agenda online, front end realizado em react com javascript. Back end realizado no express com typescript"} link={"https://github.com/Kenzie-Academy-Brasil-Developers/desafio_fullstack_thiagom98_front"} link2={"https://github.com/Kenzie-Academy-Brasil-Developers/desafio_fullstack_thiagom98_back"}/>
        </ProjectList>
      </ProjectContainer>
    );
  };
  