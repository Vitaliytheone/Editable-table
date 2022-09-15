import { useMemo, useState, useCallback } from "react";
import { Title, Table, Button } from "./components";
import { getData } from "./helpers";

function App() {
    const defaultData = useMemo(() => getData(), []);
    const [state] = useState(defaultData);
    // changed fields for server response
    const [fieldData, setFieldData] = useState<Record<string, string>[]>([]);
    const [isEditing, setIsEdit] = useState(false);

    const onClick = () => {
        setIsEdit(!isEditing);
        if (isEditing && fieldData.length) {
            alert(`CHANGED FIELDS: ${JSON.stringify(fieldData)}`);
        }
    };

    const onChange = useCallback((e) => {
        const { dataset, value } = e.target;
        setFieldData((prevState) => {
            let newState = [...prevState];
            const newObj = { idx: dataset.idx, [dataset.field]: value };
            const index = newState.findIndex((item) => item.idx === dataset.idx);
            index >= 0 ? (newState[index] = { ...newState[index], ...newObj }) : newState.push(newObj);
            return newState;
        });
    }, []);

    return (
        <div className="app">
            <Title>Editable table with parting load</Title>
            <Button isEditing={isEditing} onSetisEdit={onClick} />
            <Table data={state} isEditing={isEditing} onChange={onChange} />
        </div>
    );
}

export default App;
