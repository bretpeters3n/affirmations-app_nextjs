import { User, Affs } from '@/utils/types'

export const dummyAffs: Affs[] = [
  {
    id: 1,
    content: 'You got this',
  },
  {
    id: 2,
    content: 'You’ll figure it out',
  },
  {
    id: 3,
    content: 'You’re a smart cookie',
  },
  {
    id: 4,
    content: 'I believe in you',
  },
  {
    id: 5,
    content:
      'Sucking at something is the first step towards being good at something',
  },
]
export const dummyData: User[] = [
  {
    id: 'fkuT6N',
    title: 'Default Affirmations',
    content: dummyAffs,
  },
]
