// eslint-disable-next-line

import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import banner from "../../assets/banner.png"
import Header from "../../components/Header"

import { Container, TextContent, Title, TitleHighLight } from "./styles"

const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implement 
                    <br />
                    </TitleHighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Comçar agora" variant="secondary" onClick={handleClickSignIn}></Button>
            </div>
            <div>
                <img src={banner} alt="logo principal"/>
            </div>
        </Container>
    </>)
}

export default Home
