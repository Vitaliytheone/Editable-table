import { useEffect, useRef } from "react";
import { TBody } from "../../type";
import { Row, Col } from "./components";

const Tbody = ({ data, isEditing, onChange }: TBody) => {
    const ref = useRef<HTMLTableRowElement>(null);

    // function isInViewport(el: any) {
    //     const rect = el.getBoundingClientRect();
    //     console.info(rect);
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // useEffect(() => {
    //     isInViewport(ref.current);
    // }, []);

    // console.info(ref);
    return (
        <tbody>
            {data.map((item, idx) => (
                <Row key={idx} innerRef={ref}>
                    {Object.entries(item).map((arr, idx2) => {
                        const label = arr[0][0].toUpperCase() + arr[0].slice(1);
                        const isNumberInput = arr[0] === "age" || arr[0] === "mark";
                        return (
                            <Col
                                key={idx2}
                                idx={idx}
                                field={arr[0]}
                                type={isNumberInput ? "number" : "text"}
                                label={label}
                                defaultValue={arr[1]}
                                disabled={!isEditing}
                                onChange={onChange}
                            />
                        );
                    })}
                </Row>
            ))}
        </tbody>
    );
};

export default Tbody;
