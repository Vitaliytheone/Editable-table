import { TBody } from "../../type";
import { Col } from "./components";
import { CSSProperties } from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }: { index: number; style: CSSProperties }) => <div style={style}>Row {index}</div>;

const Tbody = ({ data, isEditing, onChange }: TBody) => {
    return (
        <List className="List" height={150} itemCount={1000} itemSize={35} width={300}>
            {Row}
            {/* {data.map((item, idx) => (
                    <Row key={idx}>
                        {Object.entries(item).map((arr, idx2) => {
                            const label = arr[0][0].toUpperCase() + arr[0].slice(1);
                            const isNumberInput = arr[0] === "age" || arr[0] === "mark";
                            return (
                                <Col
                                    key={idx2}
                                    idx={idx}
                                    field={arr[0]}
                                    type={isNumberInput ? "number" : "text"}
                                    label={label}
                                    defaultValue={arr[1]}
                                    disabled={!isEditing}
                                    onChange={onChange}
                                />
                            );
                        })}
                    </Row>
                ))} */}
        </List>
    );
};

export default Tbody;
