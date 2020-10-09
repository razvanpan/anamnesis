import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './allergies-component.component.css'

class AllergiesComponent extends React.Component<{
  onInput: (allergiesInput: string) => void
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
      <div className={styles.AllergiesContainer}>
        <ItemDisplay text='ALLERGIES: Are you allergic to' textStyle='strong' />
        <Textarea
          size='small'
          id='small'
          disableResize
          className={styles.AllergiesTextarea}
          onChange={this.onChangeInput}
        />
      </div>
    )
  }
}
export default AllergiesComponent
