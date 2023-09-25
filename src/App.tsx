import './App.css'
import Listing, {EtsyItems} from './components/Listing'
import FilteredEtsy from './components/EtsyFilter'


function App() {
  
  return (
    <>
      <Listing items={FilteredEtsy as EtsyItems[]} />
    </>
  )
}

export default App
