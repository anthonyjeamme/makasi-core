import React from 'react'
import { usePageContext } from '~'
import { editable } from '../Editable'
import { TEditableComponent } from '../Editable.types'

function getEditableElement(element: TEditableElementTag) {
  return editable<TEditableElementValue, TEditableElementProps>(
    ({ value, onChange, ...props }) => {
      const pageContext = usePageContext()

      return React.createElement(element, {
        contentEditable: pageContext.editionEnabled,
        suppressContentEditableWarning: true,
        onKeyUp: (e) => {
          //@ts-ignore
          onChange(e.target.innerText)
        },
        children: value,
        ...props,
        className: `EElement${
          // @ts-ignore
          props.className ? ` ${props.className}` : ''
        }`
      })
    }
  )
}

export const EditableElement: Record<
  TEditableElementTag,
  TEditableComponent<TEditableElementProps>
> = {
  h1: getEditableElement('h1'),
  h2: getEditableElement('h2')
}

type TEditableElementTag = 'h1' | 'h2'

export type TEditableElementValue = {
  text: string
}

export type TEditableElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>
