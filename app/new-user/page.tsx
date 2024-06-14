import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

// const createFirstEntry = async () => {
//   const user = await currentUser()
//   await prisma.affgroup.create({
//     data: {
//       userId: user.id,
//       title: 'Default Affirmations',
//       content:
//         '[{"1": "Struggling is part of learning"}, {"2": "Everything has cracks - that’s how the light gets in"}, {"3": "Mistakes don’t make you less capable"}, {"4": "We are all works in progress"}, {"5": "You are a capable human"}]',
//     },
//   })
//   redirect('/affirmations')
// }

const createNewUser = async () => {
  const user = await currentUser()
  // console.log(user)
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    })
  }
  redirect('/affirmations')
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
