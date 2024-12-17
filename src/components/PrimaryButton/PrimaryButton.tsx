import styles from './PrimaryButton.module.css';
import {Link} from "react-router-dom";

interface PrimaryButtonProps {
    text: string;
    icon: string;
    onClick: Function;
    navigateTo: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <Link to={props.navigateTo}>
            <button className={styles.button02Secondary} onClick={() => props.onClick}>
                <div className={styles.text}>{props.text}</div>
                <img className={styles.icon} alt="" src={props.icon}/>
            </button>
        </Link>
    );
};

export default PrimaryButton;