import { CSSProperties } from "react";

const Row = ({ index, style, data }: { index: number; style: CSSProperties; data: any }) => {
    console.info(data);
    return <tr style={style}>Row {index}</tr>;
};

export default Row;
