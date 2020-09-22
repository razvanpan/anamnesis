import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './supplements-component.component.css'

const SupplementsComponent = () => (
  <div className={styles.SupplementsContainer}>
    <ItemDisplay
      text='SUPPLEMENTS: Any vitamins, minerals or similar health products'
      textStyle='strong'
    />
    <Textarea
      size='small'
      id='small'
      disableResize
      className={styles.SupplementsTextarea}
    />
  </div>
)
export default SupplementsComponent
