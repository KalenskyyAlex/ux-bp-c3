import { FunctionComponent } from 'react';
import styles from './Search.module.css';


const Search:FunctionComponent = () => {
    return (
        <div className={styles.search}>
            <img className={styles.searchIcon} alt="" src="search.png" />
            <div className={styles.placeholderText}>Hľadaj priestor</div>
            <div className={styles.inputText} />
            <div className={styles.borderBottom} />
        </div>);
};

export default Search;
