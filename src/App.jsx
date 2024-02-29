import './App.css';
import AssessmentForm from './components/AssessmentForm';
import PrescriberForm from './components/PrescriberForm';
import ScanningInstructionsForm from './components/ScanningInstructionsForm';
import ClinicalInformationForm from './components/clinicalinformation';
import Form from './components/coordonnee';
import PaymentForm from './components/middleform';
import SampleForm from './components/sample';

function App() {
  return (
    <div className="App">
      <Form/>
      <SampleForm/>
      <PaymentForm/>
      <ClinicalInformationForm/>
      <AssessmentForm/>
      <PrescriberForm/>
      <ScanningInstructionsForm/>
    </div>
  );
}

export default App;
