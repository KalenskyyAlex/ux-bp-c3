import styles from './VTButton.module.css';
import {Link} from "react-router-dom";

interface PrimaryButtonProps {
    text: string;
    onClick: Function;
}

const VTButton = (props: PrimaryButtonProps) => {
    return (
        <Link to={'/virtual-tour'}>
            <button className={styles.button02Secondary} onClick={() => props.onClick()}>
                <div className={styles.text}>{props.text}</div>
            </button>
        </Link>
    );
};

export default VTButton;