import { MdMail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { IFormData } from "./types";

import { Container, Column, CreatText, ForgetText, Row, SubTitleLogin, Title,TitleLogin, Wrapper } from "./styles"

const schema = yup.object({
    email: yup.string().email('E-mail não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  }).required();


const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit , formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou Senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail"leftIcon={<MdMail/>}/>    

                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>    

                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <ForgetText>Esqueci minha senha</ForgetText>
                        <CreatText><a href="/signUp">Criar Conta</a></CreatText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export default Login