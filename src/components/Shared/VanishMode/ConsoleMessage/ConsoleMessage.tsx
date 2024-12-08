import React, { useEffect, useState } from 'react'
import styles from './ConsoleMessage.module.scss'
import { Console, Hook, Unhook } from 'console-feed';
import { BsTerminal } from 'react-icons/bs';
import { IoBan } from 'react-icons/io5';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
  iframeRef: React.RefObject<HTMLIFrameElement>
  consoleContainerRef: React.RefObject<HTMLDivElement>
  logs: any
  setLogs: Function
}
const ConsoleMessage: React.FC<Props> = ({iframeRef, consoleContainerRef, logs, setLogs}) => {
  // const [logs, setLogs] = useState([]);
  const [isConsoleVisible, setIsConsoleVisible] = useState<boolean>(false)


  useEffect(() => {

    if(iframeRef.current && iframeRef.current.contentWindow) {
      
      const hookedConsole = Hook(
        (iframeRef.current.contentWindow as any).console,
        (log) => setLogs((currentLogs: any):any => [...currentLogs, log]),
        false
      );
  
      return () => {
        Unhook(hookedConsole);
      }
    }

  }, []);


  const handleConsoleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(iframeRef.current && consoleContainerRef.current) {
      // console.log(consoleContainerRef.current?.offsetHeight>30)
      if(consoleContainerRef.current.offsetHeight>30) {
        iframeRef.current.style.height = '100%';
        setIsConsoleVisible(()=>false);
      }
      else if(consoleContainerRef.current.offsetHeight<=30) {
        iframeRef.current.style.height = '50%';
        setIsConsoleVisible(()=>true);
      }
    }
  }

  return (
  <>
  <div className={styles.consoleContainer}>
    <div className={styles.consoleHeader}>
      <button className={styles.consoleBtn} onClick={handleConsoleToggle}>
        <BsTerminal className={styles.consoleBtnIcon} />
        <span>Console</span>
      </button>

      <button className={styles.consoleBtn} onClick={() => setLogs([])}>
        <IoBan className={styles.consoleBtnIcon} />
        <span>Clear</span>
      </button>

      <button className={`${styles.consoleBtn} ${styles.consoleToggleRight}`} onClick={handleConsoleToggle}>
        {isConsoleVisible?<MdKeyboardArrowUp className={styles.consoleBtnIcon} />:<MdKeyboardArrowDown className={styles.consoleBtnIcon} />}
      </button>
    </div>
    <Console logs={logs} variant="dark" />
  </div>
  </>
  )
}

export default ConsoleMessage
