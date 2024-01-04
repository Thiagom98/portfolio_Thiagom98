import { GlobalStyles } from './styles/global'
import { GlobalReset } from './styles/reset'
import { Header } from './components/Header'
import { AboutMe } from './components/AboutMe'
import { Techs } from './components/Techs'
import { ProjectSection } from './components/Projects'


function App() {

  return (
    <>
      <GlobalStyles/>
      <GlobalReset/>
      <Header/>
      <AboutMe/>
      <Techs/>
      <ProjectSection/>
    </>
  )
}

export default App
