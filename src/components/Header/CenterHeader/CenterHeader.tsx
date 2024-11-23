import React from 'react'
import styles from './CenterHeader.module.scss'
import { filesObject } from '../../../config/structure'

interface Props {
  currentFile: filesObject
}

const CenterHeader: React.FC<Props> = ({currentFile}) => {
  return (
    <div className={styles.centerContainer} >
      <span className={styles.fileName} >{currentFile.label}</span>
    </div>
  )
}

export default CenterHeader
