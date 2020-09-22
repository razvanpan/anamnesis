import React from 'react'
import LabsWorkComponent from './labs-work-component/labs-work-component.component'
import PresentSymptomsComponent from './present-symptoms-component/present-symptoms-component.component'
import MedicinesComponent from './medicines-component/medicines-component.component'
import SupplementsComponent from './supplements-component/supplements-component.component'
import FamilyMedicalHistoryComponent from './family-medical-history-component/family-medical-history-component.component'
import AllergiesComponent from './allergies-component/allergies-component.component'
import styles from './body-component.component.css'

const AnamnesisBody = () => (
  <div className={styles.bodyContainer}>
    <div className={styles.bodyColumns}>
      <LabsWorkComponent></LabsWorkComponent>
      <PresentSymptomsComponent></PresentSymptomsComponent>
      <MedicinesComponent></MedicinesComponent>
      <SupplementsComponent></SupplementsComponent>
    </div>
    <div className={styles.bodyColumns}>
      <FamilyMedicalHistoryComponent></FamilyMedicalHistoryComponent>
      <AllergiesComponent></AllergiesComponent>
    </div>
  </div>
)

export default AnamnesisBody
