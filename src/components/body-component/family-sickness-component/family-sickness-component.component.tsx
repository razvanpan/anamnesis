import React from 'react'
import Radio from 'terra-form-radio'
import Input from 'terra-form-input'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './family-sickness-component.component.css'

interface IProps {
  name: string
  id: string
  selectedOption: string
  inputName: string
}

class FamilySicknessComponent extends React.Component<IProps> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className={styles.FamilySicknessContainer}>
        <ItemDisplay
          text={`${this.props.name}`}
          className={styles.FamilySicknessItem}
        />
        <Radio
          id={`${this.props.id}`}
          labelText='Yes'
          name={`${this.props.name}`}
          checked={`${this.props.selectedOption}` === 'Yes'}
          isInline
        />
        <Radio
          id={`${this.props.id}`}
          labelText='No'
          name={`${this.props.name}`}
          checked={`${this.props.selectedOption}` === 'No'}
          isInline
        />
        <Input
          name={`${this.props.name}`}
          id={`${this.props.id}`}
          value={`${this.props.inputName}`}
          ariaLabel='Blank'
          className={styles.FamilySicknessInput}
        />
      </div>
    )
  }
}

export default FamilySicknessComponent
