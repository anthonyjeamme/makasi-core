import React from 'react'
import { usePageContext } from 'src/Page/Page.context'

import { editable } from '../Editable'

export const EditableButton = editable<
  string,
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>(({ value, onChange, ...props }) => {
  const pageContext = usePageContext()

  return (
    <button
      className='EButton'
      {...props}
      // @ts-ignore
      onClick={pageContext.editionEnabled ? null : props.onClick}
    >
      <span
        style={{ outline: 'none' }}
        contentEditable={pageContext.editionEnabled}
        suppressContentEditableWarning={true}
        onKeyDown={(e) => {
          if (pageContext.editionEnabled) {
            if (e.ctrlKey && ['b', 'i', 'u'].includes(e.key)) e.preventDefault()
          }
        }}
        onKeyUp={(e) => {
          // @ts-ignore
          onChange(e.target.innerText)
        }}
      >
        {value}
      </span>
    </button>
  )
})
