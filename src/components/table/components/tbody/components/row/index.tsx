const Row = ({ children, innerRef }: { children: React.ReactNode; innerRef: any }) => {
    return <tr ref={innerRef}>{children}</tr>;
};

export default Row;
