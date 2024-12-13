
import BenefitsSlider from "./components/BenefitsSlider"
import CardSlider from "./components/CardSlider"
import Credo from "./components/Credo"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LittleGuy from "./components/LittleGuy"
import Miscellaneous from "./components/Miscellaneous"
import Testimonials from "./components/Testimonials"


const App = () => {
  return (
    <div>
    <Hero/>
<Miscellaneous/>
    <Credo/>
    <BenefitsSlider/>
    <LittleGuy/>
    <CardSlider/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default App