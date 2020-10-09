import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './medicines-component.component.css'

class MedicinesComponent extends React.Component<{
  onInput: (medicinesInput: string) => void
}> {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
  }

  onChangeInput(event) {
    this.props.onInput(event.target.value)
  }

  render() {
    return (
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
          onChange={this.onChangeInput}
        />
      </div>
    )
  }
}

export default MedicinesComponent
