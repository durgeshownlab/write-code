import React from 'react'
import styles from './Header.module.scss'
import LeftHeader from './LeftHeader/LeftHeader'
import RightHeader from './RightHeader/RightHeader'
import CenterHeader from './CenterHeader/CenterHeader'
import { filesObject } from '../../config/structure'

interface Props {
  files: filesObject[],
  setCurrentFile: Function,
  currentFile: filesObject
}
const Header: React.FC<Props> = ({files, setCurrentFile, currentFile}) => {
  return (
    <>
      <div className={styles.header} >
        <LeftHeader files={files} setCurrentFile={setCurrentFile} />
        <CenterHeader currentFile={currentFile} />
        <RightHeader />
      </div>
    </>
  )
}

export default Header
