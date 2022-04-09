import { useMemo, useState } from "react";
import { Title, Table, Button } from "./components";
import { getData } from "./helpers";

function App() {
    const defaultData = useMemo(() => getData(), []);
    const [state, setState] = useState(defaultData);
    const [isEditing, setIsEdit] = useState(false);

    const onClick = () => {
        setIsEdit(!isEditing);
        const newState = [...state];
        newState[0].age = 20;
        setState(newState);
    };

    return (
        <>
            <Title>Editable table with parting load</Title>
            <Button isEditing={isEditing} onSetisEdit={onClick} />
            <Table data={state} isEditing={isEditing} />
        </>
    );
}

export default App;
