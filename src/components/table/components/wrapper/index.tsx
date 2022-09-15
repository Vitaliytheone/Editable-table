import Thead from "../thead";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <table>
            <Thead />
            <tbody>{children}</tbody>
        </table>
    );
};

export default Wrapper;
