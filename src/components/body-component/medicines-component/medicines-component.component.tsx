import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './medicines-component.component.css'

const MedicinesComponent = () => (
  <div className={styles.MedicinesContainer}>
    <ItemDisplay
      text='MEDICINES/DRUGS: List all chemical substances you are taking, even if they
      are nonprescription (over the counter).'
      textStyle='strong'
    />
    <Textarea
      size='small'
      id='small'
      disableResize
      className={styles.MedicinesTextarea}
    />
  </div>
)
export default MedicinesComponent
