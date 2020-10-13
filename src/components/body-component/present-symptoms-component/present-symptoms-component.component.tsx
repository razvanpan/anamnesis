import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './present-symptoms-component.component.css'

class PresentSymptomsComponent extends React.Component<{
  onInput: (presentSymptomsInput: string) => void
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
      <div className={styles.PresentSymptomsContainer}>
        <ItemDisplay text='Symptoms you presently have:' textStyle='strong' />
        <Textarea
          size='small'
          id='small'
          disableResize
          className={styles.PresentSymptomsTextarea}
          onChange={this.onChangeInput}
        />
      </div>
    )
  }
}

export default PresentSymptomsComponent
