import {  ListTechs, TechsContainer, TitleTechs, IconTechs } from "../../styles/techs";
import { PiFileHtmlFill, PiFileCssBold  } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export const Techs = () => {
    return (
      <TechsContainer>
        <TitleTechs>Algumas das tecnologias que domino</TitleTechs>
        <ListTechs>
            <IconTechs><PiFileHtmlFill size={50}/></IconTechs>
            <IconTechs><PiFileCssBold size={50}/></IconTechs>
            <IconTechs><SiJavascript size={50}/></IconTechs>
            <IconTechs><FaNode size={50}/></IconTechs>
            <IconTechs><FaReact size={50}/></IconTechs>
            <IconTechs><FaPython size={50}/></IconTechs>
        </ListTechs>
      </TechsContainer>
    );
  };