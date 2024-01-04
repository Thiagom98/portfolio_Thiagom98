import { CardContent, CardItem, CardLink, CardTitle } from "../../../styles/project";

export const ProjectCard = ({title, text, link}) => {
    return (
      <> <CardItem>
        
            <CardTitle>{title}</CardTitle>
            <CardContent>{text}</CardContent>
            <CardLink href={link} target="_blank">Link para o Repositório</CardLink>
        
        </CardItem>  
      </>
    );
};
export const ProjectCard2 = ({title, text, link, link2}) => {
    return (
      <> <CardItem>
        
            <CardTitle>{title}</CardTitle>
            <CardContent>{text}</CardContent>
            <CardLink href={link} target="_blank">Link para o Repositório Front</CardLink>
            <CardLink href={link} target="_blank">Link para o Repositório Back</CardLink>
        
        </CardItem>  
      </>
    );
};
  