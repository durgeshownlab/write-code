import React, { useEffect, useRef } from 'react';
import styles from './Output.module.scss';
import ConsoleMessage from '../ConsoleMessage/ConsoleMessage';

interface Props {
  code: string,
  iframeRef: React.RefObject<HTMLIFrameElement>
  logs: any
  setLogs: Function
}

const Output: React.FC<Props> = ({code, iframeRef, logs, setLogs}) => {
  // const iframeRef = useRef<HTMLIFrameElement>(null)
  const consoleResizerRef = useRef<HTMLDivElement>(null)
  const consoleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if(iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`${code}`);
        iframeDoc.close();
      }
    }
  }, [code])

  const handleConsoleResizeMove = (e: MouseEvent) => {
    if(consoleResizerRef.current && iframeRef.current) {
      let newHeight = e.clientY - iframeRef.current.getBoundingClientRect().top
      iframeRef.current.style.height = `${newHeight}px`
    }
  }

  const handleConsoleResizeStop = () => {
    document.removeEventListener('mousemove', handleConsoleResizeMove)
    document.removeEventListener('mouseup', handleConsoleResizeStop)

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.style.pointerEvents = 'auto';
    }
  }

  const handleConsoleResize = (e: MouseEvent) => {
    e.preventDefault();

    document.addEventListener('mousemove', handleConsoleResizeMove)
    document.addEventListener('mouseup', handleConsoleResizeStop)

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.style.pointerEvents = 'none';
    }
  }

  const handleTouchConsoleResizeMove = (e: TouchEvent) => {
    if(consoleResizerRef.current && iframeRef.current) {
      let newHeight = e.touches[0].clientY - iframeRef.current.getBoundingClientRect().top
      iframeRef.current.style.height = `${newHeight}px`
    }
  }

  const handleTouchConsoleResizeStop = () => {
    document.removeEventListener('touchmove', handleTouchConsoleResizeMove)
    document.removeEventListener('touchend', handleTouchConsoleResizeStop)

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.style.pointerEvents = 'auto';
    }
  }

  const handleTouchConsoleResize = (e: TouchEvent) => {
    e.preventDefault();

    document.addEventListener('touchmove', handleTouchConsoleResizeMove)
    document.addEventListener('touchend', handleTouchConsoleResizeStop)

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.style.pointerEvents = 'none';
    }
  }

  useEffect(()=>{
    if(consoleResizerRef.current) {
      consoleResizerRef.current.addEventListener('mousedown', handleConsoleResize)
      consoleResizerRef.current.addEventListener('touchstart', handleTouchConsoleResize)
    }
    
    return ()=>{
      if(consoleResizerRef.current) {
        consoleResizerRef.current.removeEventListener('mousedown', handleConsoleResize)
        consoleResizerRef.current.removeEventListener('touchstart', handleTouchConsoleResize)
      }
    }
  }, [])

  // function to add a click event listener to the iframe's document to open links in a new tab
  const handleOnLoad = ()=>{
    if(iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        iframeDocument.addEventListener('click', (event: any) => {
          if (event.target.tagName === 'A' && event.target.href) {
            window.open(event.target.href, '_blank', 'noopener,noreferrer');
            event.preventDefault();
          }
        });
      }
    }
  }

  return (
    <>
      <div className={styles.outputContainer}>
        <iframe 
          ref={iframeRef} 
          className={styles.output}
          onLoad={handleOnLoad} >

        </iframe>
        <div className={styles.consoleResizer} ref={consoleResizerRef} >
          
        </div>
        <div className={styles.consoleMainContainer} ref={consoleContainerRef}>
          <ConsoleMessage iframeRef={iframeRef} consoleContainerRef={consoleContainerRef} logs={logs} setLogs={setLogs} />
        </div>

      </div>
    </>
  )
}

export default Output
