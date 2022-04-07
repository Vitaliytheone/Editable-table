import "./styles.scss";
import { TButton } from "./type";

const Button = ({ isEditing, onSetisEdit }: TButton) => {
    return (
        <button className="edit-btn" onClick={onSetisEdit}>
            {isEditing ? "Complete" : "Edit fields"}
        </button>
    );
};

export default Button;
