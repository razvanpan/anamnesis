import React from 'react'
import Input from 'terra-form-input'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './labs-work-component.component.css'

const LabsWorkComponent = () => (
  <div className={styles.LabsWorkContainer}>
    <ItemDisplay
      text='Date of last labs work(blood, urine)'
      textStyle='strong'
    />
    <Input
      name='default blank input'
      id='blank'
      ariaLabel='Blank'
      className={styles.LabsWorkInput}
    />
  </div>
)
export default LabsWorkComponent
