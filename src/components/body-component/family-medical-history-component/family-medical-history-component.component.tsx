import React from 'react'
import ItemDisplay from 'terra-clinical-item-display'
import FamilySicknessComponent from '../family-sickness-component/family-sickness-component.component'

import styles from './family-medical-history-component.component.css'

const FamilyMedicalHistoryComponent = () => (
  <div className={styles.FamilyMedicalHistoryContainer}>
    <ItemDisplay
      text='FAMILY MEDICAL HISTORY: Has any blood relative ever had (if yes, who'
      textStyle='strong'
    />
    <FamilySicknessComponent
      name='Cancer'
      id='cancer'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='Tuberculosis'
      id='tuberculosis'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='Diabetes'
      id='diabetes'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='Heart trouble'
      id='heart-trouble'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='High blood pressure'
      id='high-blood-pressure'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='Stroke'
      id='stroke'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='Epilepsy'
      id='epilepsy'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='Mental illness'
      id='mental-illness'
    ></FamilySicknessComponent>
    <FamilySicknessComponent
      name='Suicide'
      id='suicide'
    ></FamilySicknessComponent>
  </div>
)
export default FamilyMedicalHistoryComponent
