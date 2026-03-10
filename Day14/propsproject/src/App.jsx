import DeveloperContainer from './component/DeveloperContainer'
import EmployeeContainer from './component/EmployeeContainer'
import ProductContainer from './component/ProductContainer'
import StudentContainer from './component/StudentContainer'
import UserContainer from './component/UserContainer'

const App = () => {
  return (
    <>
    <UserContainer/>
    <ProductContainer/>
    <StudentContainer/>
    <DeveloperContainer/>
    <EmployeeContainer/>
    </>
  )
}

export default App