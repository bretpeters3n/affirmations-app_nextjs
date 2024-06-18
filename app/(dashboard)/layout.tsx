import Navigation from '@/components/Navigation'
import '@splidejs/react-splide/css'
import '@/css/Nav.css'
import '@/css/splideExtra.css'

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full">
      <Navigation />
      {children}
    </div>
  )
}

export default DashboardLayout
