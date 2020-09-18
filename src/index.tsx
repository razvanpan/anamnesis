import * as React from 'react'
import styles from './styles.module.css'
import AnamnesisHeader from './components/header-component/header-component.component'
import AnamnesisBody from './components/body-component/body-component.component'
import AnamnesisFooter from './components/footer-component/footer-component.component'

export const Anamnesis = () => {
  return (
    <div className={styles.anamnesisContainer}>
      <AnamnesisHeader></AnamnesisHeader>
      <AnamnesisBody></AnamnesisBody>
      <AnamnesisFooter></AnamnesisFooter>
    </div>
  )
}
