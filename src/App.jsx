import './App.css'
import ContainerPresentational from './patterns/container-presentational/ContainerPresentational'
import HigherOrderComponent from './patterns/hoc/HigherOrderComponent'
import CustomHook from './patterns/hook/CustomHook'
import ProviderPattern from './patterns/provider/Provider'

function App() {
  return (
    <>
      <ContainerPresentational />
      <HigherOrderComponent />
      <CustomHook />
      <ProviderPattern />
    </>
  )
}

export default App
