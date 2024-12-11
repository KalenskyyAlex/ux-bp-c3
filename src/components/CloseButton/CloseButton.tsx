import { FunctionComponent } from 'react';
import styles from './CloseButton.module.css';
import close from './Icon.svg';

const CloseButton:FunctionComponent = () => {
    return (
        <button className={styles.button02Secondary}>
            <img className={styles.icon} alt="" src={close} />
        </button>);
};

export default CloseButton;
