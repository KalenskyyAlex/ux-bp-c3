import React, { FunctionComponent } from 'react';
import styles from './InfoPage.module.css';
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import {MapContainer, Marker, Polyline, TileLayer} from "react-leaflet";
import BackButton from "../BackButton/BackButton";


const InfoPage:FunctionComponent = () => {
    return (
        <div className={styles.vv1Lg1056px16Column}>
            <div className={styles.vv1Lg1056px16ColumnChild} />
            <MapContainer className={styles.vv1Lg1056px16ColumnItem}
                          center={[48.732934, 21.245306]}
                          zoom={17}
                          zoomControl={false}
                          scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <div className={styles.l9Hlavn}>L9 -  Hlavná budova TUKE</div>
            <BackButton/>
            <div className={styles.adresaLetn9Container}>
                <p className={styles.typBudova}>Adresa: Letná 9, 040 01 Košice</p>
                <p className={styles.typBudova}>Typ: budova</p>
                <p className={styles.fakltaVetky}>
                    <span className={styles.fakltaVetky1}>Fakúlta: všetky</span>
                    <span className={styles.span}>{`  `}</span>
                </p>
            </div>
            <div className={styles.vv1Lg1056px16ColumnInner}>
                <div className={styles.hlavnBudovaTechnickejUniveWrapper}>
                    <div className={styles.hlavnBudovaTechnickejContainer}>
                        <p className={styles.hlavnBudovaTechnickej}>Hlavná budova Technickej univerzity v Košiciach
                            (TUKE) je významnou dominantou univerzitného kampusu, nachádzajúceho sa v širšom centre
                            Košíc. Táto budova slúži ako administratívne a reprezentatívne sídlo univerzity, kde sídli
                            rektorát a ďalšie dôležité oddelenia.</p>
                        <br/>
                        <h3 className={styles.hlavnBudovaTechnickej}>Architektúra</h3>
                        <p className={styles.hlavnBudovaTechnickej}>Hlavná budova TUKE je modernistická stavba, ktorá
                            odráža funkcionalistické prvky z obdobia druhej polovice 20. storočia. Je charakteristická
                            čistými líniami a jednoduchými geometrickými tvarmi. Fasáda je často ozdobená kombináciou
                            sklenených plôch a betónových prvkov, čo vytvára dynamický, no zároveň minimalistický
                            vzhľad.</p>
                        <br/>
                        <h3 className={styles.hlavnBudovaTechnickej}>Interiér</h3>
                        <p className={styles.hlavnBudovaTechnickej}>Vo vnútri hlavnej budovy sa nachádzajú priestranné
                            vestibuly a moderné kancelárske priestory. Vestibul je často využívaný na rôzne univerzitné
                            akcie, výstavy alebo stretnutia. Moderné vybavenie zabezpečuje pohodlie zamestnancov aj
                            študentov.</p>
                        <br/>
                        <h3 className={styles.hlavnBudovaTechnickej}>Okolie</h3>
                        <p className={styles.hlavnBudovaTechnickej}>Budova je obklopená zeleňou, ktorá vytvára príjemné
                            prostredie pre študentov a návštevníkov. Blízko hlavnej budovy sa nachádzajú ďalšie fakultné
                            a laboratórne budovy, ako aj oddychové zóny s lavičkami a chodníkmi.</p>
                        <br/>
                        <h3 className={styles.hlavnBudovaTechnickej}>Symbolika</h3>
                        <p className={styles.hlavnBudovaTechnickej}>Hlavná budova TUKE symbolizuje akademickú
                            excelentnosť a tradíciu univerzity, ktorá je jednou z najprestížnejších technických
                            univerzít na Slovensku. Je centrom univerzitného života, kde sa prijímajú dôležité
                            rozhodnutia a rozvíjajú strategické smerovania školy.</p>
                    </div>
                </div>
            </div>
            <img className={styles.marker12Icon} alt="" src="Marker 12.svg" />
            <div className={styles.imageParent}>
                <img className={styles.imageIcon} alt="" src={image1} />
                <img className={styles.imageIcon} alt="" src={image2} />
                <img className={styles.imageIcon} alt="" src={image3} />
                <img className={styles.imageIcon} alt="" src={image4} />
                <img className={styles.imageIcon} alt="" src={image5} />
            </div>
        </div>);
};

export default InfoPage;
