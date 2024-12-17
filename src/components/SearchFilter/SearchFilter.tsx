import styles from './SearchFilter.module.css';
import back from './back.svg';
import filter_small from './filter_small.svg'

interface Props {
    closeFilter: Function;
}

const SearchFilter = (props: Props) => {
    return (
        <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.button02Secondary} onClick={() => props.closeFilter()}>
                <div className={styles.text}>Späť</div>
                <img className={styles.icon} alt="" src={back} />
            </div>
            <div className={styles.button02Secondary1} onClick={() => props.closeFilter()}>
                <div className={styles.text}>Použiť</div>
                <img className={styles.icon1} alt="" src={filter_small} />
            </div>
            <div className={styles.checkboxGroup}>
                <div className={styles.labelText}>Typ:</div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>Miestnosť</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>Budova</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>Laboratorium</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>Prednaškova miestnosť</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>Iné</div>
                    </div>
                </div>
            </div>
            <div className={styles.checkboxGroup1}>
                <div className={styles.labelText}>Fakulta:</div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>FMMR</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>FEI</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>FBERG</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>SjF</div>
                    </div>
                </div>
                <div className={styles.checkbox1}>
                    <div className={styles.focus}>
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.text}>SvF</div>
                    </div>
                </div>
            </div>
        </div>);
};

export default SearchFilter;
