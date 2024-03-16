
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Servicios from './components/servicios/Servicios'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className='flex flex-col w-screen justify-center items-center'>
        <Servicios></Servicios>
      </main>
    </>
  )
}

export default App
