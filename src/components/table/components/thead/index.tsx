import { scheme } from "../../scheme";

const Thead = () => {
    return (
        <thead>
            <tr>
                {scheme.map((item, idx) => {
                    const { title, width } = item;
                    return (
                        <th scope="col" key={idx} style={{ width }}>
                            {title}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default Thead;
