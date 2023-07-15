import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Projects from './components/Projects'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="projects:id" element={<Project />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
