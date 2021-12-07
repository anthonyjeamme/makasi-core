import React from 'react'
import { useSectionContext } from '~'
import { usePageContext } from '../../Page/Page.context'
import { editable } from '../Editable'

export const EditableImage = editable(({ value, onChange }) => {
  const pageContext = usePageContext()
  const sectionContext = useSectionContext()

  return (
    <div>
      {/* HOW TO INTEGRATE CUSTOM STYLE ? */}
      {pageContext.editionEnabled && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            marginTop: 10,
            marginLeft: 10
          }}
        >
          <input
            defaultValue={value?.src}
            onChange={(e) => {
              onChange({
                src: e.target.value
              })
            }}
          />
          <button
            onClick={() => {
              sectionContext.refresh()
            }}
          >
            Valider
          </button>
        </div>
      )}

      <img
        style={{
          maxWidth: '100%',
          maxHeight: 200
        }}
        src={value?.src}
      />
    </div>
  )
})
