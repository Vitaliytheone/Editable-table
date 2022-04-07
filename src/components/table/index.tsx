import "./style.scss";
import { useMemo, useState } from "react";
import { Thead, Tbody } from "./components";
import { TTable } from "./type";
import { getData } from "./helpers";

const Table = ({ isEditing }: TTable) => {
    const defaultData = useMemo(() => getData(), []);
    const [state, setState] = useState(defaultData);
    return (
        <table>
            <Thead />
            <Tbody state={state} isEditing={isEditing} />
        </table>
    );
};

export default Table;
