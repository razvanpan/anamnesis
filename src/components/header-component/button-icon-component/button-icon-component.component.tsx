import React from 'react'
import IconRollup from 'terra-icon/lib/icon/IconRollup'
import Button from 'terra-button/lib/Button'
import styles from './button-icon-component.component.css'

const Icon = <IconRollup />

const ButtonIcon = () => (
  <div>
    <Button
      icon={Icon}
      isIconOnly
      text='Icon Only Button'
      className={styles.buttonContainer}
    />
  </div>
)
export default ButtonIcon
