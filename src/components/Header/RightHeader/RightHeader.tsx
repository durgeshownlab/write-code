import React, { useEffect } from 'react'
import styles from './RightHeader.module.scss'
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx'
import { MdFormatListNumbered} from 'react-icons/md'
import { TbTextWrap, TbTextWrapDisabled } from 'react-icons/tb'
import { PiMapTrifoldDuotone } from 'react-icons/pi'
import { IoIosPhoneLandscape, IoIosPhonePortrait } from 'react-icons/io'
interface Props {
  isFullScreen: boolean,
  setIsFullScreen: Function,
  mainContainerRef: React.RefObject<HTMLDivElement>,
  wordWrap: boolean,
  setWordWrap: Function
  showLineNumbers: boolean,
  setShowLineNumbers: Function,
  miniMap: boolean,
  setMiniMap: Function,
  isLandscapeMode: boolean,
  setIsLandscapeMode: Function,
  isMobile: boolean
}
const RightHeader: React.FC<Props> = ({isFullScreen, setIsFullScreen, mainContainerRef, wordWrap, setWordWrap, showLineNumbers, setShowLineNumbers, miniMap, setMiniMap, isLandscapeMode, setIsLandscapeMode, isMobile}) => {

  useEffect(() => {
    if(mainContainerRef.current) {
      if(isFullScreen) {
        mainContainerRef.current.requestFullscreen();
      } else if(document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [isFullScreen, mainContainerRef])

  useEffect(() => {
    const handleFullScreenChange = () => {
      if(document.fullscreenElement) {
        setIsFullScreen(true);
      }
      else {
        setIsFullScreen(false);
        setIsLandscapeMode(false);
      }
    };

    // const handleResize = () => {
    //   const isFullScreen = window.innerHeight === window.screen.height && window.innerWidth === window.screen.width;
    //   if(isFullScreen) {
    //     setIsFullScreen(true);
    //   }
    //   else {
    //     setIsFullScreen(false);
    //   }
    // };
  
    document.addEventListener('fullscreenchange', handleFullScreenChange)
    // window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
      // window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleLandscapeMode = async () => {
    try {
      if(isMobile && !isLandscapeMode && isFullScreen  && (screen.orientation as any).lock) {
        await (screen.orientation as any).lock('landscape');
        setIsLandscapeMode(true);        
      }
      else if(isLandscapeMode && isFullScreen && screen.orientation.unlock) {
        await screen.orientation.unlock();
        setIsLandscapeMode(false);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.rightContainer}>
      { (isMobile || isLandscapeMode) && isFullScreen &&
        <button className={styles.btn} onClick={handleLandscapeMode}>
          {
            isLandscapeMode?(<IoIosPhonePortrait />): (<IoIosPhoneLandscape />)
          }
        </button>
      }
      
      <button className={styles.btn} onClick={() => setWordWrap(!wordWrap)}>
        {wordWrap?(<TbTextWrapDisabled />): (<TbTextWrap/>)}
      </button>

      <button className={`${styles.btn} ${miniMap? styles.strike30deg: ''} `} onClick={() => setMiniMap(!miniMap)}>
        <PiMapTrifoldDuotone />
      </button> 

      <button className={`${styles.btn} ${showLineNumbers? styles.strike30deg: ''} `} onClick={() => setShowLineNumbers(!showLineNumbers)}>
        <MdFormatListNumbered />
      </button> 

      <button className={styles.btn} onClick={() => setIsFullScreen(!isFullScreen)}>
        {
          isFullScreen?(<RxExitFullScreen />): (<RxEnterFullScreen />)
        }
      </button>

    </div>
  )
}

export default RightHeader
