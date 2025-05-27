import { Hero } from './Components/Home/Hero';
import { Footer } from './Components/Shared/Footer'; 
import { Navbar } from './Components/Shared/Navbar';
import ProblemSolutionCard from './Components/Home/ProblemSolutionCard';
import ProblemSolution from './Components/Home/ProblemSolution';

function App() {
  return (
    <main className="font-nunito">
          <div className="bg-[url(img/bg-hero-2.png)] bg-center bg-cover bg-no-repeat  min-h-72 sm:min-h-svh clip-top">
             <Navbar />
              <Hero />
          </div>
          <ProblemSolution />

          <Footer />
    </main>
  )}
  
export default App