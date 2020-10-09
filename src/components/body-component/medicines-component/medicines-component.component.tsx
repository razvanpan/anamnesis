import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './medicines-component.component.css'

class MedicinesComponent extends React.Component<
  { onInput: (medicinesInput: string) => void },
  { medicines: string }
> {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onSubmitInput = this.onSubmitInput.bind(this)
    this.state = {
      medicines: ''
    }
  }

  onChangeInput(event) {
    this.setState({
      medicines: event.target.value
    })
  }

  onSubmitInput(event) {
    event.preventDefault()
    this.props.onInput(this.state.medicines)
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
          onInput={this.onSubmitInput}
        />
      </div>
    )
  }
}

export default MedicinesComponent
