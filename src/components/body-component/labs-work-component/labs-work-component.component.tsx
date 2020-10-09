import React from 'react'
import Input from 'terra-form-input'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './labs-work-component.component.css'

class LabsWorkComponent extends React.Component<{
  onInput: (lastLabsWorkInput: string) => void
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
          onChange={this.onChangeInput}
        />
      </div>
    )
  }
}

export default LabsWorkComponent
