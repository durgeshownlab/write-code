import React from 'react'
import styles from './CenterHeader.module.scss'
import { filesObject } from '../../../config/structure'
import { RiPlayLargeFill } from 'react-icons/ri'

interface Props {
  currentFile: filesObject,
  compileCodeInTemplate: Function
}

const CenterHeader: React.FC<Props> = ({currentFile, compileCodeInTemplate}) => {

  const handleRunCode = () => {
    console.log('run code')
    compileCodeInTemplate()
  }

  return (
    <div className={styles.centerContainer} >
      <div className={styles.filenameContainer}>
        <span className={styles.fileName} >{currentFile.label}</span>
      </div>

      <button className={`${styles.btn} ${styles.runCodeBtn}`} onClick={handleRunCode} >
        <RiPlayLargeFill className={styles.runCodeIcon} /> 
        <span className={styles.runCodeText}>Run</span>
      </button>

    </div>
  )
}

export default CenterHeader
