import { scheme } from "../../scheme";
import { memo } from "react";

const Thead = () => {
    return (
        <thead>
            <tr>
                {scheme.map((item) => {
                    return (
                        <th scope="col" key={item.id}>
                            {item.title}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default memo(Thead);
