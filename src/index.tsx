import * as React from 'react'
import HeaderComponent from './components/header-component/header-component.component'
import BodyComponent from './components/body-component/body-component.component'
import FooterComponent from './components/footer-component/footer-component.component'

export const ExampleComponent = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
  )
}
