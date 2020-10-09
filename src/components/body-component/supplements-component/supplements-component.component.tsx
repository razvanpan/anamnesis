import React from 'react'
import Textarea from 'terra-form-textarea'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './supplements-component.component.css'

class SupplementsComponent extends React.Component<
  { onInput: (name: string) => void },
  { supplements: string }
> {
  constructor(props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onSubmitInput = this.onSubmitInput.bind(this)
    this.state = {
      supplements: ''
    }
  }

  onChangeInput(event) {
    this.setState({
      supplements: event.target.value
    })
  }

  onSubmitInput(event) {
    event.preventDefault()
    this.props.onInput(this.state.supplements)
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
          onInput={this.onSubmitInput}
        />
      </div>
    )
  }
}

export default SupplementsComponent
