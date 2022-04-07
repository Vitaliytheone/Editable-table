import { TBody } from "../../type";

const Tbody = ({ state, isEditing }: TBody) => {
    return (
        <tbody>
            {state.map((item, idx) => (
                <tr key={idx}>
                    {Object.entries(item).map((arr, idx2) => {
                        const label = arr[0][0].toUpperCase() + arr[0].slice(1);
                        const isNumberInput = arr[0] === "age" || arr[0] === "mark";
                        return (
                            <td key={idx2} data-label={label}>
                                <input type={isNumberInput ? "number" : "text"} value={arr[1]} disabled={isEditing} />
                            </td>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default Tbody;
