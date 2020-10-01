import React from 'react'
import Radio from 'terra-form-radio'
import Input from 'terra-form-input'
import ItemDisplay from 'terra-clinical-item-display'
import styles from './family-sickness-component.component.css'

interface IProps {
  name: string
  id: string
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
          name={`${this.props.name}` + '-yes'}
          isInline
        />
        <Radio
          id={`${this.props.id}`}
          labelText='No'
          name={`${this.props.name}` + '-no'}
          isInline
        />
        <Input
          name={`${this.props.name}` + '-input'}
          id={`${this.props.id}`}
          ariaLabel='Blank'
          className={styles.FamilySicknessInput}
        />
      </div>
    )
  }
}

export default FamilySicknessComponent
