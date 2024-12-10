import styles from './CloseButton.module.css';
import close from './Icon.svg';

interface CloseButtonProps {
    onClick: Function;
}

const CloseButton = (props: CloseButtonProps) => {
    return (
        <button onClick={() => props.onClick()} className={styles.button02Secondary}>
            <img className={styles.icon} alt="" src={close} />
        </button>);
};

export default CloseButton;
