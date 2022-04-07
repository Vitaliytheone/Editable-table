import { useState } from "react";
import { Title, Table, Button } from "./components";

function App() {
    const [isEditing, setIsEdit] = useState(false);
    const onClick = () => {
        setIsEdit(!isEditing);
    };
    return (
        <>
            <Title>Editable table with parting load</Title>
            <Button isEditing={isEditing} onSetisEdit={onClick} />
            <Table isEditing={isEditing} />
        </>
    );
}

export default App;
