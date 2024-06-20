'use client'

// import { MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp'

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
              {currentEntries.map((item, i) => (
                <li key={i} id={i} className="py-1">
                  <div className="">
                    <div className="bg-white flex flex-row border border-slate-300 rounded-md">
                      <p className="w-full text-center font-thin pt-4 pl-4 pb-4 pr-10">
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
