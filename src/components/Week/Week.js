import React, {useState} from 'react';
import styles from './Week.module.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Week = () => {

    const [weekNumber, setWeekNumber] = useState(1);

    return(
        <div className={styles.weekWrapper}>
            <div className={styles.progressWeekWrapper}>
                <p className={styles.optionTitle}>YOUR 12 WEEK PROGRESS</p>

                <div className={styles.weekCirclesWrapper}>
                    <div className={`${styles.circleItem} ${styles.normalItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>1</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.normalItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>2</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.normalItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>3</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.normalItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>4</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.normalItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>5</p>
                        </div>
                    </div> 
                    <div className={`${styles.circleItem} ${styles.normalItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>6</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.transparentItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>7</p>
                        </div>
                    </div>
                    
                    <div className={`${styles.circleItem} ${styles.greyItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>8</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.greyItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>9</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.greyItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>10</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.greyItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>11</p>
                        </div>
                    </div>
                    <div className={`${styles.circleItem} ${styles.greyItem}`}>
                        <div>
                            <span className={styles.circle}></span>
                            <p className={styles.number}>12</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.sliderWrapper}>
                {weekNumber >= 2 && <button className={styles.btnArrow} onClick={() => setWeekNumber(prev => prev - 1)}><FaAngleLeft className={styles.arrowStyle} /> </button>}
                <div className={styles.weekTitle}><p className={styles.weekTitle}>Week: {weekNumber}</p></div>
                {weekNumber <= 3 && <button className={styles.btnArrow} onClick={() => setWeekNumber(prev => prev + 1)}><FaAngleRight className={styles.arrowStyle} /></button>}
            </div>
            <div className={styles.optionsWrapper}>
                <p className={styles.optionTitle}>SELECT YOUR PROTEIN OPTIONS</p>
                <div className={styles.optionIconWrapper}>
                    <img className={styles.iconOption} src="images/broccoli.png" alt="broccoli"/>
                    <img className={styles.iconOption}  src="images/cheese.png" alt="cheese"/>
                    <img className={styles.iconOption}  src="images/meat.png" alt="meat"/>
                    <img className={styles.iconOption}  src="images/fish.png" alt="fish"/>
                    <img className={styles.iconOption}  src="images/chiken.png" alt="chiken"/>
                </div>
            </div>
        </div>
    )
}

export default Week;
