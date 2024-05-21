import './App.css'
import ContainerPresentational from './patterns/container-presentational/ContainerPresentational'
import HigherOrderComponent from './patterns/hoc/HigherOrderComponent'
import CustomHook from './patterns/hook/CustomHook'

function App() {
  return (
    <>
      <ContainerPresentational />
      <HigherOrderComponent />
      <CustomHook />
    </>
  )
}

export default App
