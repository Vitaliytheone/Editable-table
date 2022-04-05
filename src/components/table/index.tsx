import { scheme } from "./sheme";
import { TTable } from "./type";
import "./style.scss";

const Table = ({}: TTable) => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Address</th>
                    <th scope="col">Age</th>
                    <th scope="col">Avg.mark</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Name">Vitaliy</td>
                    <td data-label="Surname">Shevchenko</td>
                    <td data-label="Address">Sevastopol</td>
                    <td data-label="Age">28</td>
                    <td data-label="Avg.mark">4.5</td>
                </tr>
                <tr>
                    <td data-label="Name">Vitaliy</td>
                    <td data-label="Surname">Shevchenko</td>
                    <td data-label="Address">Sevastopol</td>
                    <td data-label="Age">28</td>
                    <td data-label="Avg.mark">4.5</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
