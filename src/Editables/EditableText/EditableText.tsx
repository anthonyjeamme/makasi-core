import React from 'react'
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  RawDraftContentState,
  ContentState
} from 'draft-js'
import 'draft-js/dist/Draft.css'

import { usePageContext } from 'src/Page/Page.context'
import { editable } from '../Editable'

export const EditableText = editable<
  RawDraftContentState,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>(({ value, onChange, ...props }) => {
  const pageContext = usePageContext()

  const getInitialState = () => {
    return value
      ? {
          editorState: EditorState.createWithContent(convertFromRaw(value))
        }
      : {
          editorState: EditorState.createEmpty()
        }
  }

  const [editorState, setEditorState] = React.useState(getInitialState())

  return (
    <div
      {...props}
      // @ts-ignore
      className={`EText${props.className ? ` ${props.className}` : ''}`}
    >
      <Editor
        // @ts-ignore
        textAlignment={props.textAlignment || 'center'}
        readOnly={!pageContext.editionEnabled}
        editorState={editorState.editorState}
        onChange={(editorState) => {
          onChange(convertToRaw(editorState.getCurrentContent()))

          setEditorState({ editorState })
        }}
      />
    </div>
  )
})

export const editableText = (defaultText = 'lorem ipsum') =>
  convertToRaw(ContentState.createFromText(defaultText))
