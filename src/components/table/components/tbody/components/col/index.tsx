import { memo } from "react";
import { TBodyCol } from "../../../../type";

const Col = ({ label, idx, disabled, onChange, type, defaultValue, field }: TBodyCol) => {
    console.info("render Col");
    return (
        <td data-label={label}>
            <input
                data-idx={idx}
                data-field={field}
                type={type}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChange}
            />
        </td>
    );
};

export default memo(Col);
