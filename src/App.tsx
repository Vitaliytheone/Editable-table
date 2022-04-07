import { useMemo, useState } from "react";
import { Title, Table } from "./components";
import { getData } from "./components/table/helpers";

function App() {
    const [isEdit, setIsEdit] = useState(false);
    const onClick = () => {
        setIsEdit(!isEdit);
    };
    return (
        <>
            <Title>Editable table with parting load</Title>
            <Table isEdit={isEdit} />
        </>
    );
}

export default App;
