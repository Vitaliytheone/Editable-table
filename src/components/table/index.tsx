import "./style.scss";
import { useMemo, useState } from "react";
import { Thead, Tbody } from "./components";
import { TData, TTable } from "./type";
import { getData } from "./helpers";

const Table = ({ isEdit }: TTable) => {
    console.info(isEdit);
    const defaultData = useMemo(() => getData(), []);
    const [state, setState] = useState<TData>([
        { name: "vitaliy", surname: "shavchenko", address: "123", age: 4, mark: 5 },
    ]);
    return (
        <table>
            <Thead />
            <Tbody state={state} />
        </table>
    );
};

export default Table;
