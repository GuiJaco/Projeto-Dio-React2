import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture } from "./styles"

import {FiThumbsUp} from "react-icons/fi"

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src="https://dio.es.gov.br/Media/dio/Slides/Banner_CONSULTA%20[Recuperado]-01%20(1).jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/115431791?v=4"/>
                    <div>
                        <h4>Guilherme</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card