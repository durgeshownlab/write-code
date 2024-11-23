import React, { useEffect, useRef } from 'react';
import styles from './Output.module.scss';

interface Props {
  code: string
}

const Output: React.FC<Props> = ({code}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if(iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if(iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
      }
    }
  }, [code])

  return (
    <>
      <div className={styles.outputContainer}>
        <iframe ref={iframeRef} className={styles.output}>

        </iframe>
      </div>
    </>
  )
}

export default Output
