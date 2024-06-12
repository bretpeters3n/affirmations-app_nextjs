import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <SignUp fallbackRedirectUrl="/new-user" forceRedirectUrl="/new-user" />
      </div>
    </div>
  )
}

export default SignUpPage
