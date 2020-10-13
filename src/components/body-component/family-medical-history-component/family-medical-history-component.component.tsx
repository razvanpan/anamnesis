import React from 'react'
import ItemDisplay from 'terra-clinical-item-display'
import Textarea from 'terra-form-textarea'
import Checkbox from 'terra-form-checkbox';
import styles from './family-medical-history-component.component.css'

interface FMHState{
  list: string[],
  textareaInput: string
}
class FamilyMedicalHistoryComponent extends React.Component<{onInput: (familyMedicalHistory: string, details: string) => void},FMHState> {
  constructor(props: any) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.state={
      list: [],
      textareaInput:''
    }
  }
  onChangeInput(event) {
    let familyMedicalHistory = this.state.list.toString();
    this.props.onInput(familyMedicalHistory, event.target.value)
  }
  handleCheckbox(event){
    this.state.list.push(event.target.id)
  }
  render() {
    return (
      <div className={styles.FamilyMedicalHistoryContainer}>
        <ItemDisplay
          text='FAMILY MEDICAL HISTORY: Has any blood relative ever had'
          textStyle='strong'
        />
        <div className={styles.sicknessContainer} >
          <div  className={styles.columnsContainer} >
            <Checkbox id="cancer" labelText="Cancer" onChange={this.handleCheckbox}/>
            <Checkbox id="tuberculosis" labelText="Tuberculosis" onChange={this.handleCheckbox}/>
            <Checkbox id="diabetes" labelText="Diabetes" onChange={this.handleCheckbox}/>
            <Checkbox id="heart-trouble" labelText="Heart trouble" onChange={this.handleCheckbox}/>
            <Checkbox id="high-blood-pressure" labelText="High blood pressure" onChange={this.handleCheckbox}/>
          </div>
          <div className={styles.columnsContainer}>
            <Checkbox id="stroke" labelText="Stroke" onChange={this.handleCheckbox}/>
            <Checkbox id="epilepsy" labelText="Epilepsy" onChange={this.handleCheckbox}/>
            <Checkbox id="mental-ilness" labelText="Mental illness" onChange={this.handleCheckbox}/>
            <Checkbox id="suicide" labelText="Suicide" onChange={this.handleCheckbox}/>
            <Checkbox id="hepatitis" labelText="Hepatitis" onChange={this.handleCheckbox}/>
          </div>
        </div>
        <Textarea
          size='small'
          id='small'
          disableResize
          className={styles.FamilyMedicalHistoryTextarea}
          onChange={this.onChangeInput}
        />
      </div>
    )
  }
}

export default FamilyMedicalHistoryComponent
