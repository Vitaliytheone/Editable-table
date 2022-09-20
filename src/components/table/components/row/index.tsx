import { memo } from "react";
import { TRow } from "../../type";
import Col from "../col";

const Row = ({ index, style, data }: TRow) => {
    const { items, isEditing, onChange } = data;
    return (
        <tr style={style}>
            {Object.entries(items[index]).map((item, idx) => {
                const label = item[0][0].toUpperCase() + item[0].slice(1);
                const isNumberInput = item[0] === "age" || item[0] === "mark";
                return (
                    <Col
                        key={idx}
                        idx={index}
                        field={item[0]}
                        type={isNumberInput ? "number" : "text"}
                        label={label}
                        onChange={onChange}
                        disabled={!isEditing}
                        value={item[1]}
                    />
                );
            })}
        </tr>
    );
};

export default memo(Row);
