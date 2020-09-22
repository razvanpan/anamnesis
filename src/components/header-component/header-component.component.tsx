import React from 'react'
import ActionHeader from 'terra-action-header'
import ButtonIcon from './button-icon-component/button-icon-component.component'
import IconCritical from 'terra-icon/lib/icon/IconCritical'
import styles from './header-component.component.css'

const AnamnesisHeader = () => (
  <div className={styles.headerContainer}>
    <div className={styles.headerIcon}>
      <IconCritical></IconCritical>
    </div>
    <div className={styles.headerTitle}>
      <ActionHeader title=' Anamnesis' />
    </div>
    <div className={styles.headerButton}>
      <ButtonIcon></ButtonIcon>
    </div>
  </div>
)

export default AnamnesisHeader
