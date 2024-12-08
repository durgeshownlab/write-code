import React from 'react'
import styles from './LeftHeader.module.scss'
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa'
import { NavLink } from 'react-router'

interface Props {
  files: object[],
  setCurrentFile: Function
}
const LeftHeader: React.FC<Props> = ({files, setCurrentFile}) => {
  return (
    <>
      <div className={styles.leftHeader}>
        {
          (files && files.length>0)? (
            files.map((file: any) => (
              <NavLink 
                key={file.uri}
                to={`/vanish-mode/${file.uri}`} 
                className={({isActive})=>`${styles.fileTab} ${(isActive || (location.pathname === '/' && file.uri === 'index.html'))? styles.active: ''}`}
                onClick={() => setCurrentFile(file)} >
                <div className={`${styles.fileIcon} ${styles[file.fileExtantion.toLowerCase()+'Icon']} `}>
                  { file.fileExtantion === 'html' && <FaHtml5 /> }
                  { file.fileExtantion === 'css' && <FaCss3Alt />}
                  { file.fileExtantion === 'js' && <FaJs /> }
                </div>
                <span className={styles.fileName}>{file.label}</span>
              </NavLink>
            ))
          ):''
        }

        {/* <NavLink to="/index.html" className={({isActive})=>`${styles.fileTab} ${(isActive || location.pathname === '/')? styles.active: ''}`}>
          <div className={styles.fileIcon}>
            <FaHtml5 />
          </div>
          <span className={styles.fileName}>index.html</span>
        </NavLink>
        
        <NavLink to="style.css" className={({isActive})=>`${styles.fileTab} ${isActive? styles.active: ''}`}>
          <div className={styles.fileIcon}>
            <FaCss3Alt />
          </div>
          <span className={styles.fileName}>style.css</span>
        </NavLink>

        <NavLink to="script.js" className={({isActive})=>`${styles.fileTab} ${isActive? styles.active: ''}`}>
          <div className={styles.fileIcon}>
            <FaJs />
          </div>
          <span className={styles.fileName}>script.js</span>
        </NavLink> */}

      </div>
    </>
  )
}

export default LeftHeader
