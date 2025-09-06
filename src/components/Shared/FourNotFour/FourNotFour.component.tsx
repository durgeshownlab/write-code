import React from "react";
import { Link } from "react-router-dom";
import styles from "./FourNotFour.module.scss";

type FourNotFourProps = {
  message?: string;
  homeHref?: string;
};

const FourNotFour: React.FC<FourNotFourProps> = ({ message, homeHref = "/" }) => {
  return (
    <main className={styles.nf}>
      <div className={styles.card} role="alert">
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.subtitle}>
          {message ?? "The page you’re looking for doesn’t exist or was moved."}
        </p>

        <div className={styles.actions}>
          <Link to={homeHref} className={`${styles.btn} ${styles.primary}`}>
            Go Home
          </Link>
          <button
            className={`${styles.btn} ${styles.ghost}`}
            onClick={() => window.history.back()}
            type="button"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default FourNotFour;
