'use client'

import { MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import EntriesDisplay from './AffList'

const EntriesDropDown = ({
  id,
  title,
  content,
  userEntries,
  userEntryIds,
  userEntryTitles,
  sampleEntries,
}) => {
  const addNewGroupMessaging = '+ Create new group'
  // const Data = {
  //   id,
  //   title,
  //   content,
  // }
  const [currentTitle, setCurrentTitle] = useState(title)
  const [currentId, setCurrentId] = useState(id)
  const [currentEntries, setCurrentEntries] = useState(content)
  const [currentUserEntries, setCurrentUserEntries] = useState(userEntries)
  console.log('currentUserEntries: ' + JSON.stringify(currentUserEntries))
  console.log('currentTitle: ' + currentTitle)
  return (
    <>
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
            setCurrentTitle(tempTarget)
          }
        }}
      >
        {/* {affirmationsData[0].groups.map((groups) => ( */}
        {userEntries.map((item) => (
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
      <div className="pt-10">
        <EntriesDisplay
          id={currentId}
          title={currentTitle}
          content={currentEntries}
          // sampleEntries={sampleEntries}
        ></EntriesDisplay>
      </div>
    </>
  )
}

export default EntriesDropDown
