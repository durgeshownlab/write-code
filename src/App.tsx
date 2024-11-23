import { useEffect, useRef, useState } from 'react'
import styles from './App.module.scss'
import CodeEditor from './components/CodeEditor/CodeEditor'
import { OnChange, OnMount } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import Output from './components/Output/Output'
import { AiOutlineHolder } from "react-icons/ai";
import Header from './components/Header/Header'
import { filesObject } from './config/structure'


function App() {

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [language, setLanguage] = useState<string>('css')
  const [editorTheme, setEditorTheme] = useState<string>('vs-dark')
  const [currentFile, setCurrentFile] = useState<filesObject>({
    label: '', 
    uri: '', 
    language: '', 
    code: '', 
    fileExtantion: ''
  })
  const [code, setCode] = useState<string>('')
  
  const [htmlCode, setHtmlCode] = useState<string>(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
`)
  const [cssCode, setCssCode] = useState<string>(`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`)
  const [jsCode, setJsCode] = useState<string>(`console.log('Hello World')`)

  // code for mounting the editor in the DOM
  const handleEditorDidMount: OnMount = (editor: any, monaco: any) => {
    // console.log('editorDidMount', editor, monaco)
    if(editorRef.current) {
      editorRef.current = editor
      // monaco.editor.setModelLanguage(editor.getModel(), "html");  
    }
  }

  // code for handling code changes
  const handleCodeChange: OnChange = (code: any) => {
    if(currentFile) {
      if(currentFile.language === 'html') {
        setHtmlCode(code)
      }
      else if(currentFile.language === 'css') {
        setCssCode(code)
      }
      else if(currentFile.language === 'javascript') {
        setJsCode(code)
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

  return (
    <>
      <div className={styles.container}>

        <div className={styles.headerContainer}>
          <Header files={files} setCurrentFile={setCurrentFile} currentFile={currentFile} />
        </div>

        <div className={styles.codeEditorAndOutputContainer}>
          <div className={styles.codeEditorContainer}>
            <CodeEditor
              handleEditorDidMount={handleEditorDidMount}
              currentFile={currentFile}
              handleCodeChange={handleCodeChange}
              editorTheme={editorTheme}
            />
          </div>

          {/* <div className={styles.resizerContainer}>
            <AiOutlineHolder className={styles.resizerIcon} />
          </div> */}

          <div className={styles.outputContainer}>
            <Output code={code}  />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
