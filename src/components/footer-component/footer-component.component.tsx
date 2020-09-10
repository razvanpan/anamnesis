import React from 'react'
import Button from 'terra-button'
import Hyperlink from 'terra-hyperlink'
import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'

const FooterComponent = () => (
  <ActionFooter
    start={<Hyperlink href='#'>Back</Hyperlink>}
    end={
      <React.Fragment>
        <Spacer isInlineBlock marginRight='medium'>
          <Button text='Submit' variant={Button.Opts.Variants.EMPHASIS} />
        </Spacer>
        <Button text='Cancel' />
      </React.Fragment>
    }
  />
)

export default FooterComponent
