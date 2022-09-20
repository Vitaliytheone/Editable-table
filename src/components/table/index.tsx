import "./style.scss";
import { Wrapper, Row } from "./components";
import { TTable } from "./type";
import useWindowDimensions from "../../_hooks/useWindowDimension";
import { FixedSizeList as List } from "react-window";

const Table = ({ subHeight, data, isEditing, onChange }: TTable) => {
    const { height } = useWindowDimensions();
    return (
        <List
            className="wrapper"
            outerElementType="div"
            innerElementType={Wrapper}
            height={height - subHeight}
            itemCount={data.length}
            itemData={{ items: data, isEditing, onChange }}
            width="100%"
            itemSize={50}
        >
            {Row}
        </List>
    );
};

export default Table;
