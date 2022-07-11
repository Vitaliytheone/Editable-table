import Col from "../col";
import { TRow } from "../../../../type";

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
                        idx={idx}
                        field={item[0]}
                        type={isNumberInput ? "number" : "text"}
                        label={label}
                        onChange={onChange}
                        disabled={!isEditing}
                        defaultValue={item[1]}
                    />
                );
            })}
        </tr>
    );
};

export default Row;
