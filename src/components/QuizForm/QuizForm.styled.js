import styled from 'styled-components'
import {Form,Field,ErrorMessage} from 'formik'


export const StyledForm = styled(Form)`
display: flex;
gap: 8px;
flex-direction: column;
max-width: 320px;
`;


export const StyledField = styled(Field)`
padding: 4px;
font: inherit;


`;

export const FormGroup = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
`



export const ErrorMsg = styled(ErrorMessage)`
color: red;
font-size: 14px;

`