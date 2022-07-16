import styles from "./landing.module.css";

function Landing() {
    return (
        <div
            className={styles.article}
            style={{ backgroundImage: `url(image1.jpeg)` }}
        >
            <h1 className={styles.header}>&nbsp; </h1>
            <h1 className={styles.header}>&nbsp; </h1>
            <h1 className={styles.header}>&nbsp; </h1>
            <h1 className={styles.header}>Wear What You Make!</h1>
            <h1 className={styles.header}>&nbsp; </h1>
            <h1 className={styles.header}>&nbsp; </h1>
            <h1 className={styles.header}>&nbsp; </h1>
        </div>
    );
}

export default Landing;