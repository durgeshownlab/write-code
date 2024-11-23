import { Editor, OnChange, OnMount } from "@monaco-editor/react"
import styles from './CodeEditor.module.scss'
import React from "react"
import { filesObject } from "../../config/structure"

interface Props {
  handleEditorDidMount: OnMount,
  currentFile: filesObject,
  handleCodeChange: OnChange
  editorTheme: string
}
const CodeEditor: React.FC<Props> = ({handleEditorDidMount, currentFile, handleCodeChange, editorTheme}) => {

 
  return (
    <>
      <div className={styles.codeEditorContainer}>
        <Editor
          height="100%"
          width="100%"
          className={styles.codeEditor}
          language={currentFile.language}
          value={currentFile.code}
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
