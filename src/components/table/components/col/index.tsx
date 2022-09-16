import { memo } from "react";
import { TBodyCol } from "../../type";

const Col = ({ label, idx, disabled, onChange, type, value, field }: TBodyCol) => {
    return (
        <td data-label={label}>
            <input
                type={type}
                data-idx={idx}
                data-field={field}
                value={value}
                disabled={disabled}
                onChange={onChange}
            />
        </td>
    );
};

export default memo(Col);
