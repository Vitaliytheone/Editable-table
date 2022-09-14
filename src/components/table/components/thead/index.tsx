import { scheme } from "../../scheme";
import { memo } from "react";

const Thead = () => {
    return (
        <thead>
            <tr>
                {scheme.map((item, idx) => {
                    const { title, width } = item;
                    return (
                        <th scope="col" key={idx}>
                            {title}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default memo(Thead);
