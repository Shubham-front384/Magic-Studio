import Home from './Components/Home/Home'
import Value from './Components/Value/Value'
import Stats from './Components/Stats/Stats'
import Features from './Components/Features/Features'
import Testimonial from './Components/Testimonial/Testimonial'
import Pricing from './Components/Pricing/Pricing'
import FAQ from './Components/FAQ/FAQ'
import Resources from './Components/Resources/Resources'
import Features1 from './Components/Features1/Features1'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <main className="p-5 sm:p-6 md:p-7 lg:p-8 overflow-hidden">
        <Home />
        <Value />
        <Stats />
        <Features />
        <Testimonial />
        <Pricing />
        <FAQ />
        <Resources />
        <Features1 />
        <Footer />
      </main>
    </>
  )
}

export default App
