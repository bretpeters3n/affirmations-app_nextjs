'use client'

// import { MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const EntriesDisplay = ({ id, title, content, sampleEntries }) => {
  const endOfEntiresMessaging = 'End of list'

  // const [currentTitle, setCurrentTitle] = useState(title)
  // console.log('currentTitle: ' + currentTitle)

  const [currentEntries, setCurrentEntries] = useState(content)
  console.log('currentEntries: ' + currentEntries)

  const handleEditAffirmationClick = (e) => {
    let editEl = e.target.closest('li')
    let editId = editEl.getAttribute('id')
    console.log('editId:' + editId)
    // navigate(`${BASE_URL}edit`, {
    //   state: {
    //     affirmationId: editId,
    //   },
    // }); // Pass optional second argument
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setCurrentEntries((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      className="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root"
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: 'auto',
      }}
    >
      <label
        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1jy569b-MuiFormLabel-root-MuiInputLabel-root tracking-wider"
        data-shrink="true"
        htmlFor="outlined-select-currency"
        id="outlined-select-currency-label"
      >
        Group: <i className="text-slate-700">{title}</i>
      </label>
      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-multiline css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root rounded-md">
        <div className="d-grid gap-2 p-3 pt-4">
          {!currentEntries.length ? (
            <p className="mb-2">
              <i>No affirmations present</i>
              <br />
              <small className="text-muted">add an affirmation above ^</small>
            </p>
          ) : (
            <ul>
              <DndContext
                modifiers={[restrictToVerticalAxis]}
                onDragEnd={handleDragEnd}
              >
                <SortableContext items={currentEntries}>
                  {currentEntries.map((item, i) => (
                    <li
                      ref={setNodeRef}
                      style={style}
                      key={i}
                      id={i}
                      className="py-1"
                    >
                      <div className="">
                        <div className="bg-white flex flex-row border border-slate-300 rounded-md">
                          <button
                            {...attributes}
                            {...listeners}
                            className="border-r border-slate-300 cursor-move touch-none p-1"
                          >
                            <DragIndicatorIcon
                              fontSize="small"
                              style={{ color: 'silver' }}
                            />
                          </button>
                          <p className="w-full text-center font-thin py-4 px-4">
                            {item}
                          </p>
                          <button
                            onClick={(e) => {
                              handleEditAffirmationClick(e)
                            }}
                            className="cardEdit cursor-pointer rounded-tr rounded-br"
                          >
                            <BorderColorSharpIcon
                              fontSize="small"
                              style={{ color: 'white' }}
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </SortableContext>
              </DndContext>
              {/* <li>{endOfEntiresMessaging}</li> */}
            </ul>
          )}
          {currentEntries.length ? (
            <div className="pt-3">
              <p>
                <i>{endOfEntiresMessaging}</i>
              </p>
            </div>
          ) : null}
        </div>
        <fieldset
          aria-hidden="true"
          className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline border-slate-300 border-dashed"
        >
          <legend className="css-14lo706">
            <span>Group: {title}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  )
}

export default EntriesDisplay
