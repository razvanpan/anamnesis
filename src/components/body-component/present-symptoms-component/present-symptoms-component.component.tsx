import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './present-symptoms-component.component.css'

const PresentSymptomsComponent = () => (
  <div className={styles.PresentSymptomsContainer}>
    <ItemDisplay text='Symptoms you presently have:' textStyle='strong' />
    <Textarea
      size='small'
      id='small'
      disableResize
      className={styles.PresentSymptomsTextarea}
    />
  </div>
)
export default PresentSymptomsComponent
