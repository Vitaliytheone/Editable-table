import { TData } from "../../type";

const Tbody = ({ state }: { state: TData }) => {
    return (
        <tbody>
            {state.map((item) => (
                <tr>
                    {Object.entries(item).map((arr) => {
                        const label = arr[0][0].toUpperCase() + arr[0].slice(1);
                        return <td data-label={label}>{arr[1]}</td>;
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default Tbody;
