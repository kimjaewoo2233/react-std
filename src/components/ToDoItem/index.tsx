import styled from '@emotion/styled';
import { Button } from '../Button';

interface Props{
    readonly key: string;
    readonly label: string;
    readonly onDelete?: () => void;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

const Label = styled.div`
    flex: 1;
    font-size: 1.2rem;
    margin-right: 16px;
`;

export const ToDoItem = ({ label, onDelete}: Props) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Button name='삭제' onClick={onDelete}/>
        </Container>
    )
}