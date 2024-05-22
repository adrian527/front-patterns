import './App.css'
import ContainerPresentational from './patterns/container-presentational/ContainerPresentational'
import HigherOrderComponent from './patterns/hoc/HigherOrderComponent'
import CustomHook from './patterns/hook/CustomHook'
import ProviderPattern from './patterns/provider/Provider'
import RenderProps from './patterns/render-props/RenderProps'

function App() {
  return (
    <>
      <ContainerPresentational />
      <HigherOrderComponent />
      <CustomHook />
      <ProviderPattern />
      <RenderProps />
    </>
  )
}

export default App
