import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './supplements-component.component.css'

class SupplementsComponent extends React.Component<{
  onInput: (supplementsInput: string) => void
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
          onChange={this.onChangeInput}
        />
      </div>
    )
  }
}

export default SupplementsComponent
