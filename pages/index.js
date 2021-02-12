import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Info from '../components/Info'
import User from '../components/User'
import Repos from '../components/Repos'

const index = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default index
