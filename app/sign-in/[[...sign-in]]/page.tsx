import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage
