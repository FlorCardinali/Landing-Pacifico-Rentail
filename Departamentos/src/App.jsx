
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main className='flex flex-col w-screen justify-center items-center'>
        <About></About>
      </main>
    </>
  )
}

export default App
