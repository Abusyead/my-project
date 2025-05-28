import { Hero } from './Components/Home/Hero';
import { Footer } from './Components/Shared/Footer'; 
import { Navbar } from './Components/Shared/Navbar'; 
import ProblemSolution from './Components/Home/ProblemSolution';
import Reviews from './Components/Home/Reviews';
import Partners from './Components/Home/Partners';

function App() {
  return (
    <main className="font-nunito">
          <div className="bg-[url(img/bg-hero-2.png)] bg-center bg-cover bg-no-repeat  min-h-72 sm:min-h-svh clip-top">
             <Navbar />
              <Hero />
          </div>
          <ProblemSolution />
          <Reviews />
          <Partners />
          <Footer />
          
    </main>
  )}
  
export default App