import { prisma } from '@/utils/db'
import { getUserByClerkID } from '@/utils/auth'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EntriesDropDown from '@/components/EntriesDropDown'
import EntriesDisplay from '@/components/EntriesDisplay'
import importedSampleEntries from '@/db/sampleEntries'

const SavedAffirmations = async () => {
  const sampleEntries = importedSampleEntries
  const user = await getUserByClerkID()

  // const getUser = await prisma.user.findUnique({
  //   where: {
  //     id: user.id,
  //   },
  //   select: {
  //     // email: true,
  //     currentGroupId: true,
  //     entries: true,
  //   },
  // })

  // const userCurrentGroupId = getUser.currentGroupId
  const userCurrentGroupId = 'fkuT6N'

  // const userEntries = getUser.entries
  const userEntries = sampleEntries.find(
    (x) => x.id === userCurrentGroupId
  ).content

  const userEntryIds = userEntries.map(({ id }) => id)
  const userEntryTitles = userEntries.map(({ title }) => title)

  const currentEntries = userEntries.find(
    (x) => x.id === userCurrentGroupId
  ).content
  const currentId = userEntries.find((x) => x.id === userCurrentGroupId).id
  const currentTitle = userEntries.find(
    (x) => x.id === userCurrentGroupId
  ).title
  // const currentEntries = sampleEntries.find(
  //   (x) => x.id === userCurrentGroupId
  // ).content
  // const currentId = sampleEntries.find((x) => x.id === userCurrentGroupId).id
  // const currentTitle = sampleEntries.find(
  //   (x) => x.id === userCurrentGroupId
  // ).title
  console.log('currentTitle: ' + currentTitle)
  console.log('currentId: ' + currentId)
  console.log('userCurrentGroupId: ' + userCurrentGroupId)
  console.log('userEntries: ' + userEntries)
  console.log('userEntryIds: ' + userEntryIds)
  console.log('userEntryTitles: ' + userEntryTitles)
  console.log('currentEntries: ' + currentEntries)

  return (
    <section className="">
      <h1 className="text-center text-[2.5rem] leading-10 pb-7">
        Saved Affirmations
      </h1>
      <div className="search-params">
        <EntriesDropDown
          id={currentId}
          title={currentTitle}
          content={currentEntries}
          userEntries={userEntries}
          userEntryIds={userEntryIds}
          userEntryTitles={userEntryTitles}
          // sampleEntries={sampleEntries}
        ></EntriesDropDown>
      </div>
      {/* TODO: Either create a global context to store the current affirmation group OR nest EntriesDisplay inside EntriesDropDown */}
      {/* TODO: Trying nesting option first */}
      {/* <div className="pt-10">
        <EntriesDisplay
          id={currentId}
          title={currentTitle}
          content={currentEntries}
          sampleEntries={sampleEntries}
        ></EntriesDisplay>
      </div> */}
    </section>
  )
}

export default SavedAffirmations
