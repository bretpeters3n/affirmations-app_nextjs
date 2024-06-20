import { prisma } from '@/utils/db'
import { getUserByClerkID } from '@/utils/auth'
import SplideShow from '@/components/SplideShow'
import importedSampleEntries from '@/db/sampleEntries'

const Affirmations = async () => {
  const sampleEntries = importedSampleEntries
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

  // const userEntries = getUser.entries
  // const userEmail = getUser.email
  const userCurrentGroupId = getUser.currentGroupId

  const currentEntries = sampleEntries.find(
    (x) => x.id === userCurrentGroupId
  ).content
  const currentId = sampleEntries.find((x) => x.id === userCurrentGroupId).id
  const currentTitle = sampleEntries.find(
    (x) => x.id === userCurrentGroupId
  ).title

  return (
    <section className="h-full">
      <SplideShow
        id={currentId}
        title={currentTitle}
        content={currentEntries}
      ></SplideShow>
    </section>
    // <div className="flex flex-col h-screen w-screen">
    //   <div className="flex flex-col items-center justify-center h-full">
    //     <div>affirmations</div>
    //     <div>{getUser ? `user found` : `user not found`}</div>
    //     <div>{userEmail}</div>
    //     <div>{userEntries ? `entries exist` : `no entries exist`}</div>
    //     {/* <div>{sampleEntries[0].content}</div> */}
    //     <ul>
    //       {sampleEntries[0].content.map((item, i) => (
    //         <li key={i}>{item}</li>
    //       ))}
    //     </ul>
    //     {/* <ul>
    //       {userEntries[0].content.map((item, i) => (
    //         <li key={i}>{item}</li>
    //       ))}
    //     </ul> */}
    //   </div>
    // </div>
  )
}

export default Affirmations
