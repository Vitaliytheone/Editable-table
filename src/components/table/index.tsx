import { scheme } from "./sheme";
import { TTable } from "./type";

const Table = ({}: TTable) => {
    return (
        <table>
            <thead>
                <tr>
                    {scheme.map(({ id, name, width }) => (
                        <th key={id} style={{ width }}>
                            <div>{name}</div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {scheme.map(({ id, name }) => (
                        <td key={id} data-label={name}>
                            123
                            {/* {getValue(item[id])} */}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
