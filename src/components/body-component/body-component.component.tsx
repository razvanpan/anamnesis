import React from 'react'
import LabsWorkComponent from './labs-work-component/labs-work-component.component'
import PresentSymptomsComponent from './present-symptoms-component/present-symptoms-component.component'
import MedicinesComponent from './medicines-component/medicines-component.component'
import SupplementsComponent from './supplements-component/supplements-component.component'
import FamilyMedicalHistoryComponent from './family-medical-history-component/family-medical-history-component.component'
import AllergiesComponent from './allergies-component/allergies-component.component'
import styles from './body-component.component.css'

interface AnamnesisState {
  lastLabsWork: string
  presentSymptoms: string
  medicines: string
  supplements: string
  allergies: string
}

class AnamnesisBody extends React.Component<
  {
    onChangeInput: (name: string, value: string) => void
  },
  AnamnesisState
> {
  constructor(props) {
    super(props)
    this.getLastLabsWork = this.getLastLabsWork.bind(this)
    this.getPresentSymptoms = this.getPresentSymptoms.bind(this)
    this.getMedicines = this.getMedicines.bind(this)
    this.getSupplements = this.getSupplements.bind(this)
    this.getAllergies = this.getAllergies.bind(this)
    this.state = {
      lastLabsWork: '',
      presentSymptoms: '',
      medicines: '',
      supplements: '',
      allergies: ''
    }
  }
  getLastLabsWork(lastLabsWorkInput: string) {
    this.setState({ lastLabsWork: lastLabsWorkInput })
    this.props.onChangeInput('lastLabsWork', this.state.lastLabsWork)
  }
  getPresentSymptoms(presentSymptomsInput: string) {
    this.setState({ presentSymptoms: presentSymptomsInput })
    this.props.onChangeInput('presentSymptoms', this.state.presentSymptoms)
  }
  getMedicines(medicinesInput: string) {
    this.setState({ medicines: medicinesInput })
    this.props.onChangeInput('medicines', this.state.medicines)
  }
  getSupplements(supplementsInput: string) {
    this.setState({ supplements: supplementsInput })
    this.props.onChangeInput('supplements', this.state.supplements)
  }
  getAllergies(allergiesInput: string) {
    this.setState({ allergies: allergiesInput })
    this.props.onChangeInput('allergies', this.state.allergies)
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
