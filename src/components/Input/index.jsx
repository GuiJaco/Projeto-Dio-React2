import { InputContainer, IconContainer, InputText, ErrorText } from "./styles"
import { Controller } from "react-hook-form";

const Input = ({leftIcon, errorMesage, control, name, ...rest}) => {
    return(
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <InputText {...field}{...rest}/>}
            />
            
        </InputContainer>
        {errorMesage ? <ErrorText>{errorMesage}</ErrorText> : null}
        </>
    )
}

export default Input