import React from 'react'
import ItemDisplay from 'terra-clinical-item-display'
import FamilySicknessComponent from '../family-sickness-component/family-sickness-component.component'

import styles from './family-medical-history-component.component.css'

class FamilyMedicalHistoryComponent extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className={styles.FamilyMedicalHistoryContainer}>
        <ItemDisplay
          text='FAMILY MEDICAL HISTORY: Has any blood relative ever had (if yes, who)'
          textStyle='strong'
        />
        <FamilySicknessComponent
          name='Cancer'
          id='cancer'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='Tuberculosis'
          id='tuberculosis'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='Diabetes'
          id='diabetes'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='Heart trouble'
          id='heart-trouble'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='High blood pressure'
          id='high-blood-pressure'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='Stroke'
          id='stroke'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='Epilepsy'
          id='epilepsy'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='Mental illness'
          id='mental-illness'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
        <FamilySicknessComponent
          name='Suicide'
          id='suicide'
          selectedOption=''
          inputName=''
        ></FamilySicknessComponent>
      </div>
    )
  }
}

export default FamilyMedicalHistoryComponent
