import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Title, Table, Button } from "./components";
import { getData } from "./helpers";

function App() {
    const ref = useRef<HTMLDivElement>(null);
    // default value - page top+bottom paddings
    const [subHeight, setSubHeight] = useState(24);
    const defaultData = useMemo(() => getData(), []);
    const [tableData, setData] = useState(defaultData);
    // changed fields for server request
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
        const { idx, field } = dataset;
        setData((prevState) => {
            let newState = [...prevState];
            (newState as any)[idx][field] = value;
            return newState;
        });
        setFieldData((prevState) => {
            let newState = [...prevState];
            const newObj = { idx: dataset.idx, [dataset.field]: value };
            const index = newState.findIndex((item) => item.idx === dataset.idx);
            index >= 0 ? (newState[index] = { ...newState[index], ...newObj }) : newState.push(newObj);
            return newState;
        });
    }, []);

    useEffect(() => {
        if (ref?.current) {
            setSubHeight((v) => v + ref.current!.offsetHeight);
        }
    }, []);

    return (
        <div className="app">
            <div ref={ref}>
                <Title>Editable table with parting load</Title>
                <Button isEditing={isEditing} onSetisEdit={onClick} />
            </div>
            <Table subHeight={subHeight} data={tableData} isEditing={isEditing} onChange={onChange} />
        </div>
    );
}

export default App;
