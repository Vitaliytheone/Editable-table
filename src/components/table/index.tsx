import "./style.scss";
import { useMemo, useState } from "react";
import { Thead, Tbody } from "./components";
import { TTable } from "./type";
import { getData } from "./helpers";

const Table = ({ isEdit }: TTable) => {
    const defaultData = useMemo(() => getData(), []);
    const [state, setState] = useState(defaultData);
    return (
        <table>
            <Thead />
            <Tbody state={state} />
        </table>
    );
};

export default Table;
