import { useNavigate } from "react-router-dom";
import {Button} from "../Button"
import { 
    Container,
    BuscarInputContainer, 
    Row,
    Input,
    Menu,
    MenuRight,
    UserPicture,
    Wrapper 
} from "./styles"

import logo from "../../assets/logo-dio.png"

const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleClickSignUp = () => {
        navigate('/signUp')
    }

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                </Row>
                <Row>
                    {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/115431791?v=4"/>
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickSignIn}/>
                            <Button title="Cadastrar" onClick={handleClickSignUp}/>                    
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header