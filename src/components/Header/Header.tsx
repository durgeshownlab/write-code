import React from 'react'
import styles from './Header.module.scss'
import LeftHeader from './LeftHeader/LeftHeader'
import RightHeader from './RightHeader/RightHeader'
import CenterHeader from './CenterHeader/CenterHeader'
import { filesObject } from '../../config/structure'

interface Props {
  files: filesObject[],
  setCurrentFile: Function,
  currentFile: filesObject,
  isFullScreen: boolean,
  setIsFullScreen: Function,
  mainContainerRef: React.RefObject<HTMLDivElement>,
  wordWrap: boolean,
  setWordWrap: Function,
  showLineNumbers: boolean,
  setShowLineNumbers: Function,
  miniMap: boolean,
  setMiniMap: Function,
  isLandscapeMode: boolean,
  setIsLandscapeMode: Function,
  isMobile: boolean
}
const Header: React.FC<Props> = ({files, setCurrentFile, currentFile, isFullScreen, setIsFullScreen, mainContainerRef, wordWrap, setWordWrap, showLineNumbers, setShowLineNumbers, miniMap, setMiniMap, isLandscapeMode, setIsLandscapeMode, isMobile}) => {
  return (
    <>
      <div className={styles.header} >
        <LeftHeader files={files} setCurrentFile={setCurrentFile} />
        <CenterHeader currentFile={currentFile} />
        <RightHeader 
          isFullScreen={isFullScreen} 
          setIsFullScreen={setIsFullScreen} 
          mainContainerRef={mainContainerRef}
          wordWrap={wordWrap} 
          setWordWrap={setWordWrap}
          showLineNumbers={showLineNumbers} 
          setShowLineNumbers={setShowLineNumbers}
          miniMap={miniMap}
          setMiniMap={setMiniMap}
          isLandscapeMode={isLandscapeMode}
          setIsLandscapeMode={setIsLandscapeMode}
          isMobile={isMobile} />
      </div>
    </>
  )
}

export default Header
