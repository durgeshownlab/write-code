// Footer.tsx
import React from 'react';
import { FiHeart, FiCpu } from 'react-icons/fi';
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  className = ''
}) => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${className}`}>
      {/* Main Footer Content */}
      <div className={styles.container}>
        {/* Technology Stack */}
        <div className={styles.techSection}>
          <div className={styles.techTitle}>
            <FiCpu className={styles.titleIcon} />
            <span>Supported Technologies</span>
          </div>
          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <SiHtml5 className={`${styles.techIcon} ${styles.html}`} />
              <span>HTML5</span>
            </div>
            <div className={styles.techItem}>
              <SiCss3 className={`${styles.techIcon} ${styles.css}`} />
              <span>CSS3</span>
            </div>
            <div className={styles.techItem}>
              <SiJavascript className={`${styles.techIcon} ${styles.js}`} />
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <span>© {currentYear} Write Code. Made with </span>
            <FiHeart className={styles.heartIcon} />
            <span> for in India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;