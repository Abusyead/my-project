import './App.css'
import { Button } from './Components/common/Button'
import Footer from './Components/Shared/Footer'
import { MobileMenu } from './Components/Shared/MobileMenu'
import {Navbar} from './Components/Shared/Navbar'


function App() {
 

  return (
    <main className='bg-sky-300/50'> 
      <Navbar></Navbar>
      <Footer></Footer> 
    </main>
  )
}

export default App
