import styles from './BackButton.module.css';
import back from './back.svg';
import React from "react";
import {Link} from "react-router-dom";

const BackButton = () => {
    return (
        <Link to={'/map'}>
            <button onClick={() => null} className={styles.button02Secondary}>
                <div className={styles.text}>Späť</div>
                <img className={styles.icon} alt="" src={back}/>
            </button>
        </Link>
    );
};

export default BackButton;
