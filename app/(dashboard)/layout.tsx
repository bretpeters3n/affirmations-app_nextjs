import Navigation from '@/components/Navigation'
import '@splidejs/react-splide/css'
import '@/css/Nav.css'
import '@/css/splideExtra.css'

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Navigation />
      <div className="mt-[6rem] mx-4">{children}</div>
    </div>
  )
}

export default DashboardLayout
