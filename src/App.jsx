import './App.css';
import AssessmentForm from './components/AssessmentForm';
import PrescriberForm from './components/PrescriberForm';
import ScanningInstructionsForm from './components/ScanningInstructionsForm';
import ClinicalInformationForm from './components/clinicalinformation';
import Form from './components/coordonnee';
import PaymentForm from './components/middleform';
import SampleForm from './components/sample';
import {
  Box,
} from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Box>
      <Form/>
      <SampleForm/>
      </Box>
      <PaymentForm/>
      <ClinicalInformationForm/>
      <AssessmentForm/>
      <PrescriberForm/>
      <ScanningInstructionsForm/>
    </Box>
  );
}

export default App;
