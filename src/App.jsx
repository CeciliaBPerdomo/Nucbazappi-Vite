import './App.css'
import Categories from './components/Categories/Categories'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />

      <Layout>
          <Hero />
          <Categories />
      </Layout>

    </div>

  )
}

export default App
