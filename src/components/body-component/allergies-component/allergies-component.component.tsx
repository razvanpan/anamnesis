import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './allergies-component.component.css'

class AllergiesComponent extends React.Component<
  { onInput: (allergiesInput: string) => void },
  { allergies: string }
> {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onSubmitInput = this.onSubmitInput.bind(this)
    this.state = {
      allergies: ''
    }
  }

  onChangeInput(event) {
    this.setState({
      allergies: event.target.value
    })
  }

  onSubmitInput(event) {
    event.preventDefault()
    this.props.onInput(this.state.allergies)
  }

  render() {
    return (
      <div className={styles.AllergiesContainer}>
        <ItemDisplay text='ALLERGIES: Are you allergic to' textStyle='strong' />
        <Textarea
          size='small'
          id='small'
          disableResize
          className={styles.AllergiesTextarea}
          onChange={this.onChangeInput}
          onInput={this.onSubmitInput}
        />
      </div>
    )
  }
}
export default AllergiesComponent
