import { TButton } from "./type";

const Button = ({ isEditing, onSetisEdit }: TButton) => {
    return <button onClick={onSetisEdit}>{isEditing ? "Complete" : "Edit fields"}</button>;
};

export default Button;
