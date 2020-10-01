import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './allergies-component.component.css'

const AllergiesComponent = () => (
  <div className={styles.AllergiesContainer}>
    <ItemDisplay text='ALLERGIES: Are you allergic to' textStyle='strong' />
    <Textarea
      size='small'
      id='small'
      disableResize
      className={styles.AllergiesTextarea}
    />
  </div>
)
export default AllergiesComponent
