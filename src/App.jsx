import './App.css'
import Hydration from './hydration/Hydration'
import Compound from './patterns/compound/Compound'
import ContainerPresentational from './patterns/container-presentational/ContainerPresentational'
import HigherOrderComponent from './patterns/hoc/HigherOrderComponent'
import CustomHook from './patterns/hook/CustomHook'
import ProviderPattern from './patterns/provider/Provider'
import RenderProps from './patterns/render-props/RenderProps'
import Rendering from './rendering/Rendering'

function App() {
  return (
    <>
      <ContainerPresentational />
      <HigherOrderComponent />
      <CustomHook />
      <ProviderPattern />
      <RenderProps />
      <Compound />
      <Rendering />
      <Hydration />
    </>
  )
}

export default App
