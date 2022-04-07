import { scheme } from "./sheme";
import { TTable } from "./type";
import { data } from "./helpers";

import "./style.scss";
import { useMemo } from "react";

const Table = ({}: TTable) => {
    const tableData = useMemo(() => data(), [data]);
    console.info(tableData);
    // console.info(data());
    return (
        <table>
            <thead>
                <tr>
                    {scheme.map((item, idx) => {
                        const { name, width } = item;
                        return (
                            <th scope="col" key={idx} style={{ width }}>
                                {name}
                            </th>
                        );
                    })}
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
