import { TBody } from "../../type";

const Tbody = ({ data, isEditing, onChange }: TBody) => {
    console.info("render Tbody");
    return (
        <tbody>
            {data.map((item, idx) => (
                <tr key={idx}>
                    {Object.entries(item).map((arr, idx2) => {
                        const label = arr[0][0].toUpperCase() + arr[0].slice(1);
                        const isNumberInput = arr[0] === "age" || arr[0] === "mark";
                        return (
                            <td key={idx2} data-label={label}>
                                <input
                                    data-idx={idx}
                                    data-field={arr[0]}
                                    type={isNumberInput ? "number" : "text"}
                                    defaultValue={arr[1]}
                                    disabled={!isEditing}
                                    onChange={onChange}
                                />
                            </td>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default Tbody;
