import styled from '@emotion/styled';

interface Props{
    readonly name: string;
    readonly onClick? : () => void;
}

const Container = styled.button`
    border: 0;
    color: #ffffff;
    background-color: #ff5722;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;
    margin-left: 4px;

    &:hover{
        background-color: #ff572;
        opacity: 0.8;
    }

    &:active{
        box-shadow: inset 5px 5px 10px rgba(0,0,0,0,2);
    }
`

export const Button = ({ name, onClick }: Props) => {
    return <Container onClick={onClick}>{name}</Container>
}