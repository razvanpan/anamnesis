import React from 'react'
import Input from 'terra-form-input'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './labs-work-component.component.css'

class LabsWorkComponent extends React.Component<
  { onInput: (lastLabsWorkInput: string) => void },
  { lastLabsWork: string }
> {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onSubmitInput = this.onSubmitInput.bind(this)
    this.state = {
      lastLabsWork: ''
    }
  }

  onChangeInput(event) {
    this.setState({
      lastLabsWork: event.target.value
    })
  }

  onSubmitInput(event) {
    event.preventDefault()
    this.props.onInput(this.state.lastLabsWork)
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
          onInput={this.onSubmitInput}
        />
      </div>
    )
  }
}

export default LabsWorkComponent
