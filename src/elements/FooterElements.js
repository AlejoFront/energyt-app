import styled from "styled-components";

const P = styled.p`
    &::after{
        content:  ${props => props.descripcion && `'${props.descripcion}'`};
    }             
`;


export {P}