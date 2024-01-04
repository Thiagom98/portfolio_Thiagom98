import { AiFillLinkedin , AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { HeaderContainer, LeftDiv, RightDiv, Icon } from "../../styles/header"


export const Header = () => {
    const abrirWhats = () => {
        window.open('https://wa.me/55988798161"', '_blank');
    };
    const abrirGit = () => {
        window.open('https://github.com/Thiagom98', '_blank');
    };
    const abrirLinkedin = () => {
        window.open('https://www.linkedin.com/in/thiago-mesquita-b82a87263/', '_blank');
    };
      
    return(
        <HeaderContainer>
            <LeftDiv>
                <img src="" alt="" />
                <p>Thiago Barros Mesquita</p>
            </LeftDiv>
            
            <RightDiv>
                <Icon>
                    <div onClick={abrirWhats} style={{ cursor: 'pointer' }}>
                        <AiOutlineWhatsApp size={24} />
                    </div>
                </Icon>
                <Icon>
                    <AiFillLinkedin  size={24} style={{ cursor: 'pointer' }} onClick={abrirLinkedin} />
                </Icon>
                <Icon>
                    <AiFillGithub  size={24} style={{ cursor: 'pointer' }} onClick={abrirGit}/>
                </Icon>
            </RightDiv>
        </HeaderContainer>
    )
}