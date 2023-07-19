import './App.scss'
import { About, Banner, Footer, Menu, Product, Project, Services } from './components'

function App() {

  return (
    <div className='App'>
      <Menu />
      <Banner />
      <About />
      <Product />
      <Project />
      <Services />
      <Footer />
      <Menu />
    </div>
  )
}

export default App
