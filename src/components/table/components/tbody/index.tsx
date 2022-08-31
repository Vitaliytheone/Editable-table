import { TBody } from "../../type";
import { Col, Row } from "./components";
import { CSSProperties } from "react";
import { FixedSizeList as List } from "react-window";
import useWindowDimensions from "../../../../_hooks/useWindowDimension";

// const innerElementType = forwardRef(({ children, ...rest }, ref) => (
//     <StickyListContext.Consumer>
//         {({ stickyIndices }) => (
//             <table ref={ref} {...rest}>
//                 {stickyIndices.map((index) => (
//                     <StickyRow
//                         index={index}
//                         key={index}
//                         style={{ top: index * 35, left: 0, width: "100%", height: 35 }}
//                     />
//                 ))}

//                 <tbody>{children}</tbody>
//             </table>
//         )}
//     </StickyListContext.Consumer>
// ));

const Tbody = ({ data, isEditing, onChange }: TBody) => {
    const { height } = useWindowDimensions();
    console.info(data);
    return (
        <List
            outerElementType="div"
            innerElementType="table"
            height={height}
            width="100%"
            itemCount={data.length}
            itemData={{ items: data, isEditing, onChange }}
            itemSize={60}
        >
            {Row}
            {/* {data.map((item, idx) => (
                    <Row key={idx}>
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
                ))} */}
        </List>
    );
};

export default Tbody;
