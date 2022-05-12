import React from 'react';
import { FaChevronDown} from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = () => {
    return(
        <div className={styles.headerWrapper}>
            <nav className={styles.navigationWrapper}>
                <ul className={styles.navigationList}>
                    <li className={styles.navigation}>DASHBOARD</li>
                    <li className={styles.navigation}>RECIPES</li>
                    <li className={styles.navigation}>CHALLENGE</li>
                </ul>
            </nav>
            <div className={styles.managerWrapper}>
                <img src="images/managerimg.png" className={styles.managerImg} alt="manager"></img>
                <p className={styles.managerName}>Olivia Wilde</p>
                <FaChevronDown id="arrowDown"className={styles.arrowDown} />
            </div>
        </div>
    )
}

export default Header;