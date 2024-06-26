import Navigation from '@/components/Navigation'
import '@splidejs/react-splide/css'
import '@/css/Nav.css'
import '@/css/splideExtra.css'

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full">
      {/* TODO: Make entire Nav stick to top and have the current background color */}
      <Navigation />
      <div className="mt-[5.5rem] mx-4">{children}</div>
    </div>
  )
}

export default DashboardLayout
