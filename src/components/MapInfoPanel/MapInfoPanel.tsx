import styles from './MapInfoPanel.module.css';
import next from './next.svg'
import image1 from './image1.png'
import image2 from './image2.png'
import CloseButton from "../CloseButton/CloseButton";
import InfoButton from "../PrimaryButton/PrimaryButton";
import {useNavigate} from "react-router-dom";
import NavigateButton from "../NavigateButton/NavigateButton";
import VTButton from "../VTButton/VTButton";

interface Props {
    onClick: Function;
}

const MapInfoPanel = (props: Props) => {
    return (
        <div className={styles.mapInfoPanelContainer}>
            <div className={styles.rectangleParent}>
                <div className={styles.groupChild}/>
                <InfoButton navigateTo={'/info'} text={"Viac"} icon={next} onClick={() => null}/>
                <NavigateButton text={"Navigovať"} onClick={() => null}/>
                <VTButton text={"Začiať prehliadku"} onClick={() => null}/>
                <div className={styles.imageParent}>
                    <img className={styles.imageIcon} alt="" src={image1}/>
                    <img className={styles.imageIcon} alt="" src={image2}/>
                </div>
                <div className={styles.l9HlavnBudovaTukeParent}>
                    <div className={styles.l9Hlavn}>L9 - Hlavná budova TUKE</div>
                    <div className={styles.hlavnBudovaTechnickej}>Adresa: Letná 9, 040 01 Košice</div>
                    <div className={styles.hlavnBudovaTechnickej}>Hlavná budova Technickej univerzity v Košiciach (TUKE)
                        je významnou dominantou univerzitného kampusu, nachádzajúceho sa v širšom centre Košíc. Táto
                        budova slúži ako administratívne a reprezentatívne sídlo univerzity, kde sídli rektorát a ďalšie
                        dôležité oddelenia.
                    </div>
                </div>
                <div className={styles.title}>L9 - HLAVNÁ BUDOVA</div>
                <CloseButton onClick = {props.onClick}/>
            </div>
        </div>
    );
};

export default MapInfoPanel;
