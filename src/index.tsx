import * as React from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import AnamnesisHeader from './components/header-component/header-component.component'
import AnamnesisBody from './components/body-component/body-component.component'
import AnamnesisFooter from './components/footer-component/footer-component.component'

interface Iprops {
  lastLabsWork: string
  presentSymptoms: string
  medicines: string
  supplements: string
  allergies: string
}
export class Anamnesis extends React.Component<{}, Iprops> {
  constructor(props) {
    super(props)
    this.onIndex = this.onIndex.bind(this)
    this.onSubmitfooter = this.onSubmitfooter.bind(this)
    this.state = {
      lastLabsWork: '',
      presentSymptoms: '',
      medicines: '',
      supplements: '',
      allergies: ''
    }
  }
  onChangeLastLabsWork(lab) {
    this.setState({ lastLabsWork: lab })
  }
  onChangePresentSymptoms(ps) {
    this.setState({ presentSymptoms: ps })
  }
  onChangeMedicines(med) {
    this.setState({ medicines: med })
  }
  onChangeSupplements(sp) {
    this.setState({ supplements: sp })
  }
  onChangeAllergies(alg) {
    this.setState({ allergies: alg })
  }
  onIndex(category: string, value: string) {
    switch (category) {
      case 'lastLabsWork':
        this.onChangeLastLabsWork(value)
        break
      case 'presentSymptoms':
        this.onChangePresentSymptoms(value)
        break
      case 'medicines':
        this.onChangeMedicines(value)
        break
      case 'supplements':
        this.onChangeSupplements(value)
        break
      case 'allergies':
        this.onChangeAllergies(value)
        break
    }
  }
  onSubmit() {
    let headers1 = new Headers()
    headers1.append('Access-Control-Allow-Origin', '*')
    headers1.append('Access-Control-Allow-Credentials', 'true')

    const anamnesisData = {
      lastLabsWork: this.state.lastLabsWork,
      presentSymptoms: this.state.presentSymptoms,
      medicines: this.state.medicines,
      supplementes: this.state.supplements,
      allergies: this.state.allergies
    }
    axios
      .post('http://localhost:8080/anamnesis/add', anamnesisData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  onSubmitfooter() {
    alert(
      this.state.lastLabsWork +
        ' ' +
        this.state.presentSymptoms +
        ' ' +
        this.state.medicines +
        ' ' +
        this.state.supplements +
        ' ' +
        this.state.allergies
    )
  }

  render() {
    return (
      <div className={styles.anamnesisContainer}>
        <div className={styles.anamnesisHeader}>
          <AnamnesisHeader></AnamnesisHeader>
        </div>
        <div className={styles.anamnesisBody}>
          <AnamnesisBody onChangeInput={this.onIndex}></AnamnesisBody>
        </div>
        <div className={styles.anamnesisFooter}>
          <AnamnesisFooter onSubmit={this.onSubmitfooter}></AnamnesisFooter>
        </div>
      </div>
    )
  }
}
