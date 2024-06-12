import Navigation from '@/components/Navigation'
import '../../css/Nav.css'

const DashboardLayout = ({ children }) => {
  return (
    <div className="">
      <Navigation />
      <div className="">{children}</div>
    </div>
  )
}

export default DashboardLayout
