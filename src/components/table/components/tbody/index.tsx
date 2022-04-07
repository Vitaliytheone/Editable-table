import { TData } from "../../type";

const Tbody = (state: TData) => {
    console.info(state);
    return (
        <tr>
            <td data-label="Name">Vitaliy</td>
            <td data-label="Surname">Shevchenko</td>
            <td data-label="Address">Sevastopol</td>
            <td data-label="Age">28</td>
            <td data-label="Avg.mark">4.5</td>
        </tr>
    );
};

export default Tbody;
