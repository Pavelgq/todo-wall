import React, { useState } from "react";
import { EditorProps } from "./Editor.props"



export const Editor = ({oldValue, changeValue, children, ...props}: EditorProps): JSX.Element => {
  const [editValue, setEditValue] = useState<string>(oldValue);
  const [editStatus, setEditStatus] = useState<Boolean>(false);

  const handleChange = ({currentTarget}: React.FormEvent<HTMLInputElement>) => {
    setEditValue(currentTarget.value);
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      changeValue(editValue);
      setEditStatus(!editStatus)
    }
  }

  return (
    <>
      {!editStatus && children}
      {editStatus && 
        <input 
          value={editValue} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown}
          {...props} 
        />}
    </>
  )
}