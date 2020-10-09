import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './present-symptoms-component.component.css'

class PresentSymptomsComponent extends React.Component<
  { onInput: (presentSymptomsInput: string) => void },
  { presentSymptoms: string }
> {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onSubmitInput = this.onSubmitInput.bind(this)
    this.state = {
      presentSymptoms: ''
    }
  }

  onChangeInput(event) {
    this.setState({
      presentSymptoms: event.target.value
    })
  }

  onSubmitInput(event) {
    event.preventDefault()
    this.props.onInput(this.state.presentSymptoms)
  }

  render() {
    return (
      <div className={styles.PresentSymptomsContainer}>
        <ItemDisplay text='Symptoms you presently have:' textStyle='strong' />
        <Textarea
          size='small'
          id='small'
          disableResize
          className={styles.PresentSymptomsTextarea}
          onChange={this.onChangeInput}
          onInput={this.onSubmitInput}
        />
      </div>
    )
  }
}

export default PresentSymptomsComponent
