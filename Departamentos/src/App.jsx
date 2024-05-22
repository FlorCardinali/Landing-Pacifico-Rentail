
import Faq from './components/FAQ/Faq'
import About from './components/about/About'
import Departamentos from './components/deptos/Departamentos'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className='flex flex-col m-0 p-0 justify-center items-center bg-light'>
        <About></About>
        <Departamentos></Departamentos>
        <Faq></Faq>
      </main>
      <Footer/>
    </>
  )
}

export default App
