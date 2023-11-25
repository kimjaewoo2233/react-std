import styled from '@emotion/styled';
import { Button } from '../Button';
import { useState } from 'react';

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

export const ToDoItem = ({ label, onDelete }: Props) => {
    const [isEditing, setIsEditing] = useState(false); // 첫클릭시 div 두번클릭시 input
    const [editedLabel, setEditedLabel] = useState(label);
    const [stdLabel, setStdLabel] = useState(label);

    const handleEdit = () => {  // edit 모드일 경우
        setIsEditing(true);
    }

    const handleSave = () => { //수정 재클릭시
        setStdLabel(editedLabel);
        setIsEditing(false);
    }

    return (
        <Container>
            {
            isEditing ? (
                    <>
                        <input type='text' value={editedLabel} onChange={(e) => setEditedLabel(e.target.value)}/>
                        <Button name='저장' onClick={handleSave}></Button>
                    </>
                ) : (
                    <>
                        <span>{stdLabel}</span>
                        <Button name='수정' onClick={handleEdit}/>
                        <Button name='삭제' onClick={onDelete}/>
                    </>
                )
            }
        </Container>
    )
}