import { useState } from "react";
import { Title, Table } from "./components";

function App() {
    const [test, setTest] = useState(0);
    return (
        <>
            <button onClick={() => setTest(test + 1)}>click</button>
            <Title>Editable table with parting load</Title>
            <Table test={test} />
        </>
    );
}

export default App;
