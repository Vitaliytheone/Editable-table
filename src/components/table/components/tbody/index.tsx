import { TBody } from "../../type";
import { Col, Row } from "./components";
import { FixedSizeList as List } from "react-window";
import useWindowDimensions from "../../../../_hooks/useWindowDimension";
import Thead from "../thead";

const Table = ({ children }: any) => {
    return (
        <table>
            <Thead />
            <tbody>{children}</tbody>
        </table>
    );
};

const Tbody = ({ data, isEditing, onChange }: TBody) => {
    const { height } = useWindowDimensions();
    return (
        <List
            className="wrapper"
            outerElementType="div"
            innerElementType={Table}
            height={height}
            itemCount={data.length}
            itemData={{ items: data, isEditing, onChange }}
            width="100%"
            itemSize={50}
        >
            {Row}
        </List>
    );
};

export default Tbody;
