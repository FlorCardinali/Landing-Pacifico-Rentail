
import Deptos from './components/deptos/Deptos'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <Deptos></Deptos>
      </main>
    </>
  )
}

export default App
