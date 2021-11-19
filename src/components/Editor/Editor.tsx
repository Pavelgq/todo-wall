import React, { useEffect, useRef, useState } from "react";
import { EditorProps } from "./Editor.props"
import styles from "./Editor.module.css"
import cn from "classnames";

export const Editor = ({oldValue, changeValue, children, className, ...props}: EditorProps): JSX.Element => {
  const [editValue, setEditValue] = useState<string>(oldValue);
  const [editStatus, setEditStatus] = useState<Boolean>(false);

  const editTitle = () => {
    if (!editValue) setEditValue('Новый список')
      changeValue(editValue ? editValue : 'Новый список');
      setEditStatus(!editStatus)
  }

  const handleChange = ({currentTarget}: React.FormEvent<HTMLInputElement>) => {
    setEditValue(currentTarget.value);
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      editTitle()
    } else {
      if (e.key === 'Escape') {
        setEditValue(oldValue)
        setEditStatus(!editStatus)
      }
    }
  }
  const handleChangeStatus = () => {
    setEditStatus(!editStatus);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        editTitle();
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, );

  return (
    <>
      { !editStatus && 
        <button className={styles.button} onClick={handleChangeStatus}>{children}</button>
      }
      {editStatus && 
        <input 
          value={editValue} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoFocus
          className={cn(styles.input, className)}
          {...props} 
        />}
    </>
  )
}