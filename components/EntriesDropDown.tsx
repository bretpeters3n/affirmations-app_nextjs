'use client'

import { MenuItem, TextField } from '@mui/material'
import { useState } from 'react'

const EntriesDropDown = ({ id, title, content, sampleEntries }) => {
  const addNewGroupMessaging = '+ Create new group'
  // const Data = {
  //   id,
  //   title,
  //   content,
  // }
  const [currentTitle, setCurrentTitle] = useState(title)
  console.log('currentTitle: ' + currentTitle)
  return (
    <TextField
      style={{
        width: '100%',
        maxWidth: '500px',
        textAlign: 'left',
      }}
      select
      id="outlined-select-currency"
      label="Please select or create new group"
      value={currentTitle}
      onChange={(e) => {
        let tempTarget = e.target.value
        console.log(tempTarget)
        if (tempTarget == addNewGroupMessaging) {
          // setShowNewGroupModal(true)
        } else {
          // setCurrentGroup(tempTarget)
        }
      }}
    >
      // TODO: Add the remaining elements from previous version of project
      {/* {affirmationsData[0].groups.map((groups) => ( */}
      {sampleEntries.map((item) => (
        <MenuItem
          id={item.id}
          key={item.id}
          style={{ fontFamily: 'Poppins' }}
          value={item.title}
        >
          {item.title}
        </MenuItem>
      ))}
      <MenuItem
        style={{ fontFamily: 'Poppins' }}
        // value={addNewGroupMessaging}
      >
        {addNewGroupMessaging}
      </MenuItem>
    </TextField>
  )
}

export default EntriesDropDown
