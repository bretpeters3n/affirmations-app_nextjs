import { prisma } from '@/utils/db'
import { getUserByClerkID } from '@/utils/auth'
import SplideShow from '@/components/SplideShow'

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
    }, // hardcoded sample entries to test with
  ]

  const userEntries = getUser.entries
  const userEmail = getUser.email

  // TODO: create page structure for Splide slideshow

  return (
    <section className="h-full">
      <SplideShow
        id={sampleEntries[0].id}
        title={sampleEntries[0].title}
        content={sampleEntries[0].content}
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
