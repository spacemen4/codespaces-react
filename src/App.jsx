import './App.css';
import AssessmentForm from './AssessmentForm';
import PrescriberForm from './PrescriberForm';
import ScanningInstructionsForm from './ScanningInstructionsForm';
import ClinicalInformationForm from './clinicalinformation';
import Form from './coordonnee';
import PaymentForm from './middleform';
import SampleForm from './sample';

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
