import React from 'react'
import LabsWorkComponent from './labs-work-component/labs-work-component.component'
import PresentSymptomsComponent from './present-symptoms-component/present-symptoms-component.component'
import MedicinesComponent from './medicines-component/medicines-component.component'
import SupplementsComponent from './supplements-component/supplements-component.component'
import FamilyMedicalHistoryComponent from './family-medical-history-component/family-medical-history-component.component'
import AllergiesComponent from './allergies-component/allergies-component.component'
import styles from './body-component.component.css'

class AnamnesisBody extends React.Component<{
  onChangeInput: (name: string, value: string) => void
}> {
  constructor(props) {
    super(props)
    this.getLastLabsWork = this.getLastLabsWork.bind(this)
    this.getPresentSymptoms = this.getPresentSymptoms.bind(this)
    this.getMedicines = this.getMedicines.bind(this)
    this.getSupplements = this.getSupplements.bind(this)
    this.getAllergies = this.getAllergies.bind(this)
  }
  getLastLabsWork(lastLabsWorkInput: string) {
    this.props.onChangeInput('lastLabsWork', lastLabsWorkInput)
  }
  getPresentSymptoms(presentSymptomsInput: string) {
    this.props.onChangeInput('presentSymptoms', presentSymptomsInput)
  }
  getMedicines(medicinesInput: string) {
    this.props.onChangeInput('medicines', medicinesInput)
  }
  getSupplements(supplementsInput: string) {
    this.props.onChangeInput('supplements', supplementsInput)
  }
  getAllergies(allergiesInput: string) {
    this.props.onChangeInput('allergies', allergiesInput)
  }

  render() {
    return (
      <div className={styles.bodyContainer}>
        <div className={styles.bodyColumns}>
          <LabsWorkComponent onInput={this.getLastLabsWork}></LabsWorkComponent>
          <PresentSymptomsComponent
            onInput={this.getPresentSymptoms}
          ></PresentSymptomsComponent>
          <MedicinesComponent onInput={this.getMedicines}></MedicinesComponent>
          <SupplementsComponent
            onInput={this.getSupplements}
          ></SupplementsComponent>
        </div>
        <div className={styles.bodyColumns}>
          <FamilyMedicalHistoryComponent></FamilyMedicalHistoryComponent>
          <AllergiesComponent onInput={this.getAllergies}></AllergiesComponent>
        </div>
      </div>
    )
  }
}

export default AnamnesisBody
