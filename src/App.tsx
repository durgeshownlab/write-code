import { useEffect, useRef, useState } from 'react'
import styles from './App.module.scss'
import CodeEditor from './components/CodeEditor/CodeEditor'
import { OnChange, OnMount } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import Output from './components/Output/Output'
import Header from './components/Header/Header'
import { filesObject } from './config/structure'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { handleTouchResize } from './functions/events/touch.events'
import { handleResize } from './functions/events/mouse.events'


function App() {

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const mainContainerRef = useRef<HTMLDivElement | null>(null)
  const codeEditorContainerRef = useRef<HTMLDivElement | null>(null)
  const resizerRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 425)
  // const [language, setLanguage] = useState<string>('css')
  const [editorTheme, setEditorTheme] = useState<string>('vs-dark')
  const [wordWrap, setWordWrap] = useState<boolean>(localStorage.getItem('wordWrap')? (localStorage.getItem('wordWrap')==='true' || localStorage.getItem('wordWrap')==='false')? JSON.parse(localStorage.getItem('wordWrap') as string): true: true)

  const [showLineNumbers, setShowLineNumbers] = useState<boolean>(localStorage.getItem('showLineNumbers')? (localStorage.getItem('showLineNumbers')==='true' || localStorage.getItem('showLineNumbers')==='false')? JSON.parse(localStorage.getItem('showLineNumbers') as string): true: true)

  const [miniMap, setMiniMap] = useState<boolean>(localStorage.getItem('miniMap')? (localStorage.getItem('miniMap')==='true' || localStorage.getItem('miniMap')==='false')? JSON.parse(localStorage.getItem('miniMap') as string): true: true)

  const [isLandscapeMode, setIsLandscapeMode] = useState<boolean>(false)

  const [currentFile, setCurrentFile] = useState<filesObject>({
    label: '', 
    uri: '', 
    language: '', 
    code: '', 
    fileExtantion: ''
  })
  const [code, setCode] = useState<string>('')
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  
  const [htmlCode, setHtmlCode] = useState<string>(localStorage.getItem('htmlCode') || `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" type="text/css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`)
  const [cssCode, setCssCode] = useState<string>(localStorage.getItem('cssCode') || `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`)
  const [jsCode, setJsCode] = useState<string>(localStorage.getItem('jsCode') || `console.log('Hello World')`)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [logs, setLogs] = useState([]);

  // code for mounting the editor in the DOM
  const handleEditorDidMount: OnMount = (editor: any) => {
    // console.log('editorDidMount', editor, monaco)
    if(editorRef.current) {
      editorRef.current = editor
    }
  }

  // code for handling code changes
  const handleCodeChange: OnChange = (code: any) => {
    if(currentFile) {
      if(currentFile.language === 'html') {
        setHtmlCode(code)
        localStorage.setItem('htmlCode', code)
      }
      else if(currentFile.language === 'css') {
        setCssCode(code)
        localStorage.setItem('cssCode', code)
      }
      else if(currentFile.language === 'javascript') {
        setJsCode(code)
        localStorage.setItem('jsCode', code)
      }
    }
  }

  const files: filesObject[] = [
    {
      label: 'index.html',
      uri: 'index.html',
      language: 'html',
      code: htmlCode,
      fileExtantion: 'html'
    },
    {
      label: 'style.css',
      uri: 'style.css',
      language: 'css',
      code: cssCode,
      fileExtantion: 'css'
    },
    {
      label: 'script.js',
      uri: 'script.js',
      language: 'javascript',
      code: jsCode,
      fileExtantion: 'js'
    }
  ]

  // this useEffect will work when the url changes on refresh or initial time
  useEffect(() => {
    if(files && files.length > 0) {
      if(location.pathname === '/') {
        const file = files.find(file => file.uri.toLowerCase()==='index.html')
        if(file) {
          setCurrentFile(file)
        }
      }
      else {
        const file = files.find(file => location.pathname.toLowerCase().includes(file.uri.toLowerCase()))
        if(file) {
          setCurrentFile(file)
        }
      }
    }
  }, [])

  const compileCodeInTemplate = () => {
    if(iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if(iframeDoc) {
        setLogs([])
        iframeDoc.open();
        iframeDoc.write(`${code}`);
        iframeDoc.close();
      }
    }   
  }

  // this useeffect will work when the code changes
  useEffect(() => {
    let timeId: any = null
    if(timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(()=>{
      setCode(`
        <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>${cssCode}</style>
            </head>
            <body>
              ${htmlCode}
              <script>
                try {
                  ${jsCode}
                } catch (err) {
                  console.error(err);
                }
              </script>
            </body>
          </html>
        `)
    }, 1000) 

    return () => {
      if(timeId) {
        clearTimeout(timeId)
      }
    }
  }, [htmlCode, cssCode, jsCode ])


  useEffect(() => {

    localStorage.setItem('wordWrap', JSON.stringify(wordWrap))
    localStorage.setItem('showLineNumbers', JSON.stringify(showLineNumbers))
    localStorage.setItem('miniMap', JSON.stringify(miniMap))

  }, [wordWrap, showLineNumbers, miniMap])

  const handleWindowResize = () => {
    setIsMobile(()=>window.innerWidth < 425)
    if(codeEditorContainerRef.current) {
      if(window.innerWidth < 425) {
        codeEditorContainerRef.current.style.width = `${100}%`
        codeEditorContainerRef.current.style.height = `${50}%`
      }
      else {
        codeEditorContainerRef.current.style.width = `${50}%`
        codeEditorContainerRef.current.style.height = `${100}%`
      }
    }
  }

  useEffect(() => {

    window.addEventListener('resize', handleWindowResize)
    window.addEventListener('orientationchange', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
      window.removeEventListener('orientationchange', handleWindowResize)
    }
  }, [])


  // for handling resize events on code editor
  useEffect(() => {

    // function for the mouse down event when user start to resize
    const mouseDownListener = (e: MouseEvent) => {
      e.preventDefault()
      handleResize(e, codeEditorContainerRef)
    }

    // function for the touch start event when user start to resize using touch
    const TouchStartListener = (e: TouchEvent) => {
      e.preventDefault()
      handleTouchResize(e, codeEditorContainerRef)
    }

    if(resizerRef.current) {
      resizerRef.current.addEventListener('mousedown', mouseDownListener)
      resizerRef.current.addEventListener('touchstart', TouchStartListener)
    }
    
    return ()=> {
      if(resizerRef.current) {
        resizerRef.current.removeEventListener('mousedown', mouseDownListener)
        resizerRef.current.removeEventListener('touchstart', TouchStartListener)
      }
    }
  }, [])

  useEffect(() => {
    setEditorTheme('vs-dark')
    window.addEventListener('orientationchange', ()=>{
        setIsMobile(window.innerWidth < 425)
    })

    return ()=>{
      window.removeEventListener('orientationchange', ()=>{
        setIsMobile(window.innerWidth < 425)
      })
    }
  }, [])

  return (
    <>
      <div className={styles.container} ref={mainContainerRef}>

        <div className={styles.headerContainer}>
          <Header 
            files={files} 
            setCurrentFile={setCurrentFile} 
            currentFile={currentFile}
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
            isMobile={isMobile}
            compileCodeInTemplate={compileCodeInTemplate} />
        </div>

        <div className={styles.codeEditorAndOutputContainer}>
          <div className={styles.codeEditorContainer} ref={codeEditorContainerRef}>
            <CodeEditor
              handleEditorDidMount={handleEditorDidMount}
              currentFile={currentFile}
              handleCodeChange={handleCodeChange}
              editorTheme={editorTheme}
              wordWrap={wordWrap}
              showLineNumbers={showLineNumbers}
              miniMap={miniMap}
            />
          </div>

          <div className={styles.resizerContainer} ref={resizerRef}>
            <div className={styles.resizer}>
              <BsThreeDotsVertical  className={styles.resizerIcon} />
            </div>
          </div>

          <div className={styles.outputContainer}>
            <Output code={code} iframeRef={iframeRef} logs={logs} setLogs={setLogs} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
