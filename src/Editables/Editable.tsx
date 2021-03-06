import React from 'react'

import { useSectionContext } from '~'
import { TEditableComponent } from './Editable.types'

export function editable<TValue = any, TProps = {}>(
  Component: TEditable<TValue>
): TEditableComponent<TProps> {
  //
  const EditableComponent = ({
    field,
    onChange,
    ...props
  }: {
    field: string
    onChange?: (data: any) => void
  } & TProps) => {
    const sectionContext = useSectionContext()
    const data = sectionContext.getField(field)

    return (
      <Component
        value={data}
        onChange={(value) => {
          sectionContext.updateField(field, value)
          onChange?.(value)
        }}
        {...props}
      />
    )
  }

  return EditableComponent
}

type TEditable<TValue = any> = (props: {
  value: TValue
  onChange: (value: TValue) => void
}) => JSX.Element
