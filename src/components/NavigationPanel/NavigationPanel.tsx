import styles from './NavigationPanel.module.css';
import CloseButton from "../CloseButton/CloseButton";
import up_icon from "./icon_up.svg"
import left_icon from "./icon_left.svg"
import right_icon from "./icon_right.svg"
import finish from './finish.svg'

interface NavigationPanelProps {
    onClick: Function;
}

const NavigationPanel = (props: NavigationPanelProps) => {
    return (
        <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.div}>...</div>
            </div>
            <div className={styles.button02Secondary}>
                <div className={styles.text}>(Teraz) Otočte sa doprava</div>
                <img className={styles.icon} alt="" src={right_icon} />
            </div>
            <div className={styles.button02Secondary1}>
                <div className={styles.text}>{`(Cieľ) L9 - HLAVNÁ BUDOVA `}</div>
                <img className={styles.icon1} alt="" src={finish} />
            </div>
            <div className={styles.button02Secondary2}>
                <div className={styles.text}>(50 m) Pokračujte rovno</div>
                <img className={styles.icon} alt="" src={up_icon} />
            </div>
            <div className={styles.button02Secondary3}>
                <div className={styles.text}>(50 m) Otočte sa doľava</div>
                <img className={styles.icon} alt="" src={left_icon} />
            </div>
            <CloseButton onClick={() => {props.onClick(); console.log('a')}}></CloseButton>
        </div>);
};

export default NavigationPanel;
