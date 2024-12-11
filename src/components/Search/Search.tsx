import { FunctionComponent } from 'react';
import styles from './Search.module.css';
import search from './search.svg';

const Search:FunctionComponent = () => {
    return (
        <div className={styles.search}>
            <img className={styles.searchIcon} alt="" src={search} />
            <input className={styles.placeholderText}
                   placeholder={"Hľadaj priestor"}
            />
            <div className={styles.borderBottom} />
        </div>);
};

export default Search;
