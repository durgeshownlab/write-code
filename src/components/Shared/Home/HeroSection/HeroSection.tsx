// HeroSection.tsx
import React from 'react';
import { FiCode, FiPlay, FiZap, FiGlobe } from 'react-icons/fi';
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import styles from './HeroSection.module.scss';
import { Link } from 'react-router';

interface HeroSectionProps {
  className?: string;
  onStartCoding?: () => void;
  onWatchDemo?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  className = '',
  onStartCoding = () => console.log('Start coding clicked'),
  onWatchDemo = () => console.log('Watch demo clicked')
}) => {
  return (
    <section className={`${styles.hero} ${className}`}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.codeBlock}></div>
        <div className={styles.bracket}></div>
        <div className={styles.semicolon}></div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Subtitle */}
          <div className={styles.subtitle}>
            <FiCode className={styles.subtitleIcon} />
            No Setup Required
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            Write, Test & Run Code
            <span className={styles.highlight}> Instantly</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Experience the power of instant coding with our online editor. Write HTML, CSS, and JavaScript code directly in your browser and see results in real-time. No downloads, no registration, just pure coding freedom.
          </p>

          {/* Technology Icons */}
          <div className={styles.techStack}>
            <div className={styles.techItem}>
              <SiHtml5 className={`${styles.techIcon} ${styles.html}`} />
              <span>HTML</span>
            </div>
            <div className={styles.techItem}>
              <SiCss3 className={`${styles.techIcon} ${styles.css}`} />
              <span>CSS</span>
            </div>
            <div className={styles.techItem}>
              <SiJavascript className={`${styles.techIcon} ${styles.js}`} />
              <span>JavaScript</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.buttonGroup}>
            <Link
              to="/vanish-mode"
              className={styles.primaryButton}
              onClick={onStartCoding}
            >
              <FiZap className={styles.buttonIcon} />
              Start Coding Now
            </Link>
          </div>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <FiGlobe className={styles.featureIcon} />
              <span>No Registration</span>
            </div>
            <div className={styles.feature}>
              <FiZap className={styles.featureIcon} />
              <span>Instant Preview</span>
            </div>
            <div className={styles.feature}>
              <FiCode className={styles.featureIcon} />
              <span>Real-time Editing</span>
            </div>
          </div>
        </div>

        {/* Code Editor Mockup */}
        <div className={styles.editorContainer}>
          <div className={styles.codeEditor}>
            {/* Editor Header */}
            <div className={styles.editorHeader}>
              <div className={styles.tabs}>
                <div className={`${styles.tab} ${styles.active}`}>
                  <SiHtml5 className={styles.tabIcon} />
                  index.html
                </div>
                <div className={styles.tab}>
                  <SiCss3 className={styles.tabIcon} />
                  style.css
                </div>
                <div className={styles.tab}>
                  <SiJavascript className={styles.tabIcon} />
                  script.js
                </div>
              </div>
              <div className={styles.runButton}>
                <FiPlay className={styles.runIcon} />
                Run
              </div>
            </div>

            {/* Editor Content */}
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.tag}>&lt;!DOCTYPE</span>
                  <span className={styles.attr}>&nbsp;html</span>
                  <span className={styles.tag}>&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.tag}>&lt;html</span>
                  <span className={styles.attr}>&nbsp;lang="en"</span>
                  <span className={styles.tag}>&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.indent}>&nbsp;&nbsp;</span>
                  <span className={styles.tag}>&lt;head&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.indent}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className={styles.tag}>&lt;title&gt;</span>
                  <span className={styles.text}>My App</span>
                  <span className={styles.tag}>&lt;/title&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.indent}>&nbsp;&nbsp;</span>
                  <span className={styles.tag}>&lt;/head&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.indent}>&nbsp;&nbsp;</span>
                  <span className={styles.tag}>&lt;body&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.indent}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className={styles.tag}>&lt;h1&gt;</span>
                  <span className={styles.text}>Hello World!</span>
                  <span className={styles.tag}>&lt;/h1&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.indent}>&nbsp;&nbsp;</span>
                  <span className={styles.tag}>&lt;/body&gt;</span>
                </div>
              </div>
            </div>

            {/* Output Preview */}
            <div className={styles.previewSection}>
              <div className={styles.previewHeader}>
                <span>Output Preview</span>
                <div className={styles.previewControls}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              </div>
              <div className={styles.previewContent}>
                <h1 className={styles.previewText}>Hello World!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCode}>console.log('Hello!');</div>
        <div className={styles.floatingCode}>.hero &#10100; color: #0048ff; &#10101;</div>
        <div className={styles.floatingCode}>&lt;div class="app"&gt; Hello &lt;/div&gt;</div>
      </div>
    </section>
  );
};

export default HeroSection;