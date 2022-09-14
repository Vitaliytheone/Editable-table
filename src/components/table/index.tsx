import "./style.scss";
import { Thead, Tbody } from "./components";
import { TTable } from "./type";

const Table = ({ data, isEditing, onChange }: TTable) => {
    return (
        <table>
            <Thead />
            <Tbody data={data} isEditing={isEditing} onChange={onChange} />
        </table>
    );
};

export default Table;
