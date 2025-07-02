import './App.css'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />

      <Layout>
          <Hero />
      </Layout>
      
    </div>

  )
}

export default App
