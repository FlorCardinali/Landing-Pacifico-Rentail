
import About from './components/about/About'
import Departamentos from './components/deptos/Departamentos'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className='flex flex-col m-0 justify-center items-center'>
        <About></About>
        <Departamentos></Departamentos>
      </main>
    </>
  )
}

export default App
