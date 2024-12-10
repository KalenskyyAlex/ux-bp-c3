import { FunctionComponent } from 'react';
import styles from './MapInfoPanel.module.css';
import close from './Icon.svg'
import next from './next.svg'
import image1 from './image1.png'
import image2 from './image2.png'


const MapInfoPanel:FunctionComponent = () => {
    return (
        <div className={styles.mapInfoPanelContainer}>
            <div className={styles.rectangleParent}>
                <div className={styles.groupChild}/>
                <div className={styles.button02Secondary}>
                    <div className={styles.text}>Viac</div>
                    <img className={styles.icon} alt="" src={next}/>
                </div>
                <div className={styles.button02Secondary1}>
                    <div className={styles.text}>Navigovať</div>
                </div>
                <div className={styles.button02Secondary2}>
                    <div className={styles.text}>Začiať prehliadku</div>
                </div>
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
                <div className={styles.button02Secondary3}>
                    <img className={styles.icon} alt="" src={close}/>
                </div>
            </div>
        </div>
    );
};

export default MapInfoPanel;
