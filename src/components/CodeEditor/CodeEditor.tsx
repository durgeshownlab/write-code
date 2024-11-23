import { Editor, OnChange, OnMount } from "@monaco-editor/react"
import styles from './CodeEditor.module.scss'
import React from "react"

interface Props {
  handleEditorDidMount: OnMount,
  language: string,
  code: string,
  handleCodeChange: OnChange
  editorTheme: string
}
const CodeEditor: React.FC<Props> = ({handleEditorDidMount, language, code, handleCodeChange, editorTheme}) => {

 
  return (
    <>
      <div className={styles.codeEditorContainer}>
        <Editor
          height="100%"
          width="100%"
          className={styles.codeEditor}
          language={language}
          value={code}
          theme={editorTheme}
          onMount={handleEditorDidMount}
          onChange={handleCodeChange}
          loading={<div>Your IDE is Initializing...</div>}
          options={
            {
              automaticLayout: true,
              lineNumbers: 'on',
            }
          }
        />
      </div>
    </>
  )
}

export default CodeEditor
