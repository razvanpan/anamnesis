import React from 'react'
import Button from 'terra-button'
import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'
import styles from './footer-component.component.css'

class AnamnesisFooter extends React.Component<{ onSubmit: () => void }> {
  constructor(props) {
    super(props)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    return (
      <div className={styles.footerContainer}>
        <ActionFooter
          end={
            <div className={styles.buttons}>
              <React.Fragment>
                <Spacer isInlineBlock marginRight='medium'>
                  <Button
                    text='Submit'
                    variant={Button.Opts.Variants.EMPHASIS}
                    onClick={this.props.onSubmit}
                  />
                </Spacer>
                <Button text='Cancel' />
              </React.Fragment>
            </div>
          }
        />
      </div>
    )
  }
}

export default AnamnesisFooter
