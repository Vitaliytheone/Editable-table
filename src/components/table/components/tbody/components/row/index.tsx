import { useRef } from "react";
import { useOnScreen } from "../../../../../../_hooks/useOnScreen";
const Row = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLTableRowElement>(null);
    const isVisible = useOnScreen(ref);
    // console.info(isVisible);

    return <tr ref={ref}>{children}</tr>;
};

export default Row;
