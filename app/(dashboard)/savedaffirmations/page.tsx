import { prisma } from '@/utils/db'
import { getUserByClerkID } from '@/utils/auth'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const SavedAffirmations = async () => {
  const user = await getUserByClerkID()

  const getUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      // email: true,
      currentGroupId: true,
      entries: true,
    },
  })

  const sampleEntries = [
    {
      id: 'fkuT6N',
      title: 'Default Affirmations',
      content: [
        'You got this',
        'You’ll figure it out',
        'You’re a smart cookie',
        'I believe in you',
        'Sucking at something is the first step towards being good at something',
        'Struggling is part of learning',
        'Everything has cracks - that’s how the light gets in',
        'Mistakes don’t make you less capable',
        'We are all works in progress',
        'You are a capable human',
        'You know more than you think',
        '10x engineers are a myth',
        'If everything was easy you’d be bored',
        'I admire you for taking this on',
        'You’re resourceful and clever',
        'You’ll find a way',
        'I know you’ll sort it out',
        'Struggling means you’re learning',
        'You’re doing a great job',
        'It’ll feel magical when it’s working',
        'I’m rooting for you',
        'Your mind is full of brilliant ideas',
        'You make a difference in the world by simply existing in it',
        'You are learning valuable lessons from yourself every day',
        'You are worthy and deserving of respect',
        'You know more than you knew yesterday',
        'You’re an inspiration',
        'Your life is already a miracle of chance waiting for you to shape its destiny',
        'Your life is about to be incredible',
        "Nothing is impossible. The word itself says 'I’m possible!'",
        'Failure is just another way to learn how to do something right',
        'I give myself permission to do what is right for me',
        'You can do it',
        'It is not a sprint, it is a marathon. One step at a time',
        'Success is the progressive realization of a worthy goal',
        'People with goals succeed because they know where they’re going',
        'All you need is the plan, the roadmap, and the courage to press on to your destination',
        'The opposite of courage in our society is not cowardice... it is conformity',
        'Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid',
        'The past does not equal the future',
        'The path to success is to take massive, determined action',
        'It’s what you practice in private that you will be rewarded for in public',
        'Small progress is still progress',
        'Don’t worry if you find flaws in your past creations, it’s because you’ve evolved',
        'Starting is the most difficult step - but you can do it',
        'Don’t forget to enjoy the journey',
        'It’s not a mistake, it’s a learning opportunity',
      ],
    },
    {
      id: '000111',
      title: 'More Affirmations',
      content: ['Slide 01', 'Slide 02', 'Slide 03'],
    }, // hardcoded sample entries to test with
  ]

  const userCurrentGroupId = getUser.currentGroupId
  const addNewGroupMessaging = '+ Create new group'

  const currentEntries = sampleEntries.find(
    (x) => x.id === userCurrentGroupId
  ).content
  const currentId = sampleEntries.find((x) => x.id === userCurrentGroupId).id
  const currentTitle = sampleEntries.find(
    (x) => x.id === userCurrentGroupId
  ).title

  return (
    <section className="">
      <TextField
        style={{
          width: '100%',
          maxWidth: '500px',
          textAlign: 'left',
        }}
        select
        id="outlined-select-currency"
        label="Please select or create new group"
        // value={currentTitle}
        // onChange={(e) => {
        //   let tempTarget = e.target.value
        //   console.log(tempTarget)
        //   if (tempTarget == addNewGroupMessaging) {
        //     // setShowNewGroupModal(true)
        //   } else {
        //     // setCurrentGroup(tempTarget)
        //   }
        // }}
      >
        // TODO: Add the remaining elements from previous version of project
        {/* {affirmationsData[0].groups.map((groups) => ( */}
        {currentEntries.map((groups) => (
          <MenuItem
            id={groups.id}
            key={groups.id}
            style={{ fontFamily: 'Poppins' }}
            // value={groups.group}
          >
            {groups.group}
          </MenuItem>
        ))}
        <MenuItem
          style={{ fontFamily: 'Poppins' }}
          // value={addNewGroupMessaging}
        >
          {addNewGroupMessaging}
        </MenuItem>
      </TextField>
    </section>
  )
}

export default SavedAffirmations
