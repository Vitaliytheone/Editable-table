import "./style.scss";
import { Thead, Tbody } from "./components";
import { TTable } from "./type";

const Table = ({ data, isEditing }: TTable) => {
    return (
        <table>
            <Thead />
            <Tbody data={data} isEditing={isEditing} />
        </table>
    );
};

export default Table;
