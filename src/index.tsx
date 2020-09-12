import * as React from 'react'
import AnamnesisHeader from './components/header-component/header-component.component'
import AnamnesisBody from './components/body-component/body-component.component'
import AnamnesisFooter from './components/footer-component/footer-component.component'

export const Anamnesis = () => {
  return (
    <div>
      <AnamnesisHeader></AnamnesisHeader>
      <AnamnesisBody></AnamnesisBody>
      <AnamnesisFooter></AnamnesisFooter>
    </div>
  )
}
