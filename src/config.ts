import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 7050;

export const OPENHIM = {
  username: getEnvironmentVariable('OPENHIM_USERNAME', 'interop@openhim.org'),
  password: getEnvironmentVariable('OPENHIM_PASSWORD', 'interop-password'),
  apiURL: getEnvironmentVariable('OPENHIM_API_URL', 'https://openhim-core:8080'),
  trustSelfSigned: true,
};

export const FHIR = {
  url: getEnvironmentVariable('FHIR_URL', 'http://openhim-core:5001/fhir'),
  username: getEnvironmentVariable('FHIR_USERNAME', 'interop-client'),
  password: getEnvironmentVariable('FHIR_PASSWORD', 'interop-password'),
};

export const MRS = {
  recentUrl: getEnvironmentVariable('MRS_RECENT_URL', 'http://localhost:8082/openmrs/ws/atomfeed/patient/recent'),
  patientUrl: getEnvironmentVariable('MRS_PATIENT_URL', 'http://localhost:8082/openmrs/ws/fhir2/R4/Patient/'),
  username: getEnvironmentVariable('MRS_USERNAME', 'admin'),
  password: getEnvironmentVariable('MRS_PASSWORD', 'Admin123'),
};


function getEnvironmentVariable(env: string, def: string) {
  if (process.env.NODE_ENV === 'test') {
    return def;
  }
  
  return process.env[env] || def;
}
