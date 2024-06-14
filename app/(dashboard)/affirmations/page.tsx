import { prisma } from '@/utils/db'
import { getUserByClerkID } from '@/utils/auth'

const Affirmations = async () => {
  const user = await getUserByClerkID()

  const getUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      email: true,
      entries: true,
    },
  })

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <div>affirmations</div>
        <div>{getUser ? `user found` : `user not found`}</div>
        <div>{getUser.email}</div>
        <div>{getUser.entries ? `entries exist` : `no entries exist`}</div>
      </div>
    </div>
  )
}

export default Affirmations
