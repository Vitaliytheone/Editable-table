import "./styles.scss";
import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
    return <div className="title">{children}</div>;
};

export default Title;
