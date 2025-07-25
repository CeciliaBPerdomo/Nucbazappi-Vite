import './App.css'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

function App() {

  return (
    <div>
      <Navbar />

      <Layout>
        <Hero />
        <Categories />
        <Products />
      </Layout>
      
      <Footer />
    </div>

  )
}

export default App
