import { memo } from "react";
import { TBodyCol } from "../../../../type";

const Col = ({ label, idx, disabled, onChange, type, defaultValue, field }: TBodyCol) => {
    console.info("render Col");
    console.info(field);
    return (
        <td data-label={label}>
            <input
                type={type}
                data-idx={idx}
                data-field={field}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChange}
            />
        </td>
    );
};

export default memo(Col);
