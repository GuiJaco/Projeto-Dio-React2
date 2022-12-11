import Header from "../../components/Header"
import Input from "../../components/Input"
import {Button} from "../../components/Button"
import { MdMail, MdLock } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { useForm } from "react-hook-form";


import { Container, TextContainer, Column, Wrapper, SubTextContent, SubTitleContent, TextContent, TitleContent } from "./styles"

const SignUp = () => {
    const { control } = useForm();
    
    
    return(<>
        <Header/>
        <Container>
            <Column>
                <TextContainer>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </TextContainer>
            </Column>
            <Column>
                <TitleContent>Comece agora grátis</TitleContent>
                <SubTitleContent>Crie sua conta e make the change._</SubTitleContent>
                <Wrapper>
                    <form>
                       <Input name="Nome Completo" control={control} placeholder="Nome Completo"leftIcon={<FaUser/>}/>  

                       <Input name="email" control={control} placeholder="E-mail"leftIcon={<MdMail/>}/>

                       <Input name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                    </form>
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </Wrapper>
                <TextContent>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </TextContent>
                <SubTextContent>Já tenho conta. <a href="/login">Fazer login</a></SubTextContent>
            </Column>
        </Container>
    </>)
}

export default SignUp