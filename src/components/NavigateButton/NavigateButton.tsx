import styles from './NavigateButton.module.css';

interface PrimaryButtonProps {
    text: string;
    onClick: Function;
}

const NavigateButton = (props: PrimaryButtonProps) => {
    return (
        <button className={styles.button02Secondary} onClick={() => props.onClick}>
            <div className={styles.text}>{props.text}</div>
        </button>
    );
};

export default NavigateButton;