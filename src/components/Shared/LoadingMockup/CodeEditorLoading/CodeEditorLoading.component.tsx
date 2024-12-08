import React from 'react'
import styles from './CodeEditorLoading.module.scss'

const CodeEditorLoading = () => {
  return (
    <>
      <div className={styles.codeEditorLoadingContainer}>
        <div className={styles.codeEditorLoading}>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.loadingText}>
            <code>Durgesh is loading your editor...</code>
          </div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
        </div>
      </div>
    </>
  )
}

export default CodeEditorLoading
