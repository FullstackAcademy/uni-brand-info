// UNIV & FCB & FSA Data & Core & WDF Data | Re-Send Alchemer Assessment (o07888c)

const { calculatedCohort, hsSourceIdString, email, wdfDataExcelResend, wdfDataMathResend } = inputData

const hsContactId = hsSourceIdString.split('=')[1]
if (!calculatedCohort) throw new Error('Invalid Calculated Cohort')
if (!hsContactId) throw new Error('Missing Contact Id')
const [, brand, , curriculum] = calculatedCohort.split('-')
// use brand to determine program variables
let programName = '', buttonColor = '', programWebsite = ''

if (brand === 'GHP') {
  buttonColor = 'background-image: linear-gradient(to bottom,#FD7C7F 0,#DF4B4F 100%); color: #222; border: #DF4B4F;'
  programWebsite = 'https://www.fullstackacademy.com/'
  programName = 'Fullstack Academy/Grace Hopper Admissions'
} else if (brand === 'FCB') {
  buttonColor = 'background-image: linear-gradient(to bottom,#FD7C7F 0,#DF4B4F 100%); color: #222; border: #DF4B4F;'
  programWebsite = 'https://www.fullstackacademy.com/'
  programName = 'Fullstack Cyber Bootcamp'
} else if (brand === 'FSA') {
  buttonColor = 'background-image: linear-gradient(to bottom,#FD7C7F 0,#DF4B4F 100%); color: #222; border: #DF4B4F;'
  programWebsite = 'https://www.fullstackacademy.com/'
  programName = curriculum === 'DAT'
    ? 'Fullstack Data Analytics Bootcamp'
    : 'Fullstack Academy/Grace Hopper Admissions'
} else if (brand === 'WDF') {
  buttonColor = 'background-color: #BA2031; color: #FFFFFF; border: #D50005;'
  programWebsite = 'https://www.fullstackacademy.com/'
  if (curriculum === 'DAT') programName = 'Data Analyst Training Accelerator'
  else throw new Error('Invalid Curriculum: WDF')
} else if (brand === 'CPU') {
  buttonColor = 'background-color: #035642; color: #FFFFFF; border: #035642;'
  programWebsite = 'https://bootcamp-extended.calpoly.edu/'
  if (curriculum === 'CYB') programName = 'Cal Poly Extended Ed Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Cal Poly Extended Ed Coding Bootcamp'
  else throw new Error('Invalid Curriculum: CPU')
} else if (brand === 'UNF') {
  buttonColor = 'background-color: #002D72; color: #FFFFFF; border: #002D72;'
  programWebsite = 'https://bootcamp.unf.edu/'
  if (curriculum === 'CYB') programName = 'Cyber Bootcamp at UNF'
  else if (curriculum === 'WEB') programName = 'Coding Bootcamp at UNF'
  else throw new Error('Invalid Curriculum: UNF')
} else if (brand === 'USD') {
  buttonColor = 'background-color: #0074C8; color: #FFFFFF; border: #0074C8;'
  programWebsite = 'https://bootcamp.sandiego.edu/'
  if (curriculum === 'CYB') programName = 'USD Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'USD Coding Bootcamp'
  else if (curriculum === 'DVO') programName = 'USD DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: USD')
} else if (brand === 'LSU') {
  buttonColor = 'background-color: #461D7C; color: #FFFFFF; border: #461D7C;'
  programWebsite = 'https://bootcamp.online.lsu.edu/'
  if (curriculum === 'CYB') programName = 'LSU Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'LSU Coding Bootcamp'
  else if (curriculum === 'DVO') programName = 'LSU DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: LSU')
} else if (brand === 'CIT') {
  buttonColor = 'background-color: #D14900; color: #FFFFFF; border: #D14900;'
  programWebsite = 'https://bootcamp.ctme.caltech.edu/'
  if (curriculum === 'CYB') programName = 'Caltech Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Caltech Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'Caltech Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: CIT')
} else if (brand === 'OKU') {
  buttonColor = 'background-color: #841617; color: #FFFFFF; border: #841617;'
  programWebsite = 'https://bootcamp.outreach.ou.edu/'
  if (curriculum === 'CYB') programName = 'OU Outreach Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'OU Outreach Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'OU Outreach Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'OU Outreach DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: OKU')
} else if (brand === 'VPI') {
  buttonColor = 'background-color: #861f41; color: #FFFFFF; border: #861f41;'
  programWebsite = 'https://bootcamp.cpe.vt.edu/'
  if (curriculum === 'CYB') programName = 'Virginia Tech Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Virginia Tech Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'Virginia Tech Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: VPI')
} else if (brand === 'ECE') {
  buttonColor = 'background-color: #0033A0; color: #FFFFFF; border: #0033A0;'
  programWebsite = 'https://bootcamp.emory.edu/'
  if (curriculum === 'CYB') programName = 'Emory Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Emory Coding Bootcamp'
  else if (curriculum === 'DVO') programName = 'Emory DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: ECE')
} else if (brand === 'UIC') {
  buttonColor = 'background-color: #D50032; color: #FFFFFF; border: #D50032;'
  programWebsite = 'https://bootcamp.uic.edu/'
  if (curriculum === 'CYB') programName = 'UIC Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'UIC Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'UIC Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: UIC')
} else if (brand === 'SJS') {
  buttonColor = 'background-color: #0055A2; color: #FFFFFF; border: #0055A2;'
  programWebsite = 'https://bootcamp.sjsu.edu/'
  if (curriculum === 'CYB') programName = 'SJSU Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'SJSU Coding Bootcamp'
  else throw new Error('Invalid Curriculum: SJS')
} else if (brand === 'CSU') {
  buttonColor = 'background-color: #1E4D2B; color: #FFFFFF; border: #1E4D2B;'
  programWebsite = 'https://bootcamp.colostate.edu/'
  if (curriculum === 'CYB') programName = 'CSU Professional Education Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'CSU Professional Education Coding Bootcamp'
  else throw new Error('Invalid Curriculum: CSU')
} else if (brand === 'CSE') {
  buttonColor = 'background-color: #ED114C; color: #FFFFFF; border: #ED114C;'
  programWebsite = 'https://bootcamp.ce.csueastbay.edu/'
  if (curriculum === 'CYB') programName = 'Cal State East Bay Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Cal State East Bay Coding Bootcamp'
  else throw new Error('Invalid Curriculum: CSE')
} else if (brand === 'CLE') {
  buttonColor = 'background-color: #006A4D; color: #FFFFFF; border: #006A4D;'
  programWebsite = 'https://bootcamp.csuohio.edu/'
  if (curriculum === 'CYB') programName = 'Cleveland State Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Cleveland State Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'Cleveland State Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'Cleveland State DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: CLE')
} else if (brand === 'UTD') {
  buttonColor = 'background-color: #154734; color: #FFFFFF; border: #154734;'
  programWebsite = 'https://bootcamp.utdallas.edu/'
  if (curriculum === 'CYB') programName = 'UT Dallas Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'UT Dallas Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'UT Dallas Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'UT Dallas DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: UTD')
} else if (brand === 'OSU') {
  buttonColor = 'background-color: #d73f09; color: #FFFFFF; border: #d73f09;'
  programWebsite = ''
  if (curriculum === 'DAT') programName = 'OSU Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: OSU')
} else if (brand === 'UNM') {
  buttonColor = 'background-color: #ba0c2f; color: #FFFFFF; border: #ba0c2f;'
  programWebsite = 'https://bootcamp.unm.edu/'
  if (curriculum === 'CYB') programName = 'UNM CE Cyber Bootcamp'
  else if (curriculum === 'DAT') programName = 'UNM CE Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'UNM CE DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: UNM')
} else if (brand === 'USU') {
  buttonColor = 'background-color: #00263A; color: #FFFFFF; border: #00263A;'
  programWebsite = 'https://bootcamp.usu.edu/'
  if (curriculum === 'CYB') programName = 'USU Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'USU Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'USU Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'USU DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: USU')
} else {
  throw new Error(`Invalid brand: ${brand}`)
}

const programForLinkMap = {
  WEB: 'coding',
  CYB: 'cyber',
  DAT: 'data',
  DVO: 'devops'
}

// special case for WDF DATA (2 assessments)
const isWDFData = brand === 'WDF' && curriculum === 'DAT'
const wdfDataAssessmentType = wdfDataExcelResend === 're_send_excel_assessment'
  ? 'wdf-data-excel'
  : 'wdf-data-math'

const programForLink = isWDFData
  ? wdfDataAssessmentType
  : programForLinkMap[curriculum]

if (!programForLink) throw new Error('ADM | Invalid curriculum')

// new fullstackacademy.com site has different assessment flow
const isNewFullstack = programWebsite === 'https://www.fullstackacademy.com/'

// note sguid is persistent even if submissions are deleted, but it is also case-sensitive
// where email is not, so this workaround will allow a retake and hit the right
// contact
const retakeEmail = email[0].toUpperCase() === email[0]
  ? email[0].toLowerCase() + email.slice(1)
  : email[0].toUpperCase() + email.slice(1)
const encodedEmail = encodeURIComponent(retakeEmail)
const candidateAssessmentLink = isNewFullstack
  ? `${programWebsite}assessment?email=${encodedEmail}&program_first_choice=${programForLink}`
  : `${programWebsite}assessment?id=${hsContactId}&program=${programForLink}`

// determine sender for email
let sender = ''
if (brand === 'GHP' || (brand === 'FSA' && curriculum !== 'DAT')) sender = 'admissions@fullstackacademy.com'
else if (brand === 'FCB') sender = 'cyber-admissions@fullstackacademy.com'
else if (brand === 'FSA' && curriculum === 'DAT') sender = 'enrollment.data@fullstackacademy.com'
else if (brand === 'WDF' && curriculum === 'DAT') sender = 'data@fullstackacademy.com'
else if (brand === 'CPU') sender = 'enrollment.calpoly@fullstackacademy.com'
else if (brand === 'CIT') sender = 'enrollment.caltech@fullstackacademy.com'
else if (brand === 'VPI') sender = 'enrollment.vt@fullstackacademy.com'
else if (brand === 'ECE') sender = 'enrollment.emory@fullstackacademy.com'
else if (brand === 'SJS') sender = 'enrollment.sjsu@fullstackacademy.com'
else sender = `enrollment.${brand.toLowerCase()}@fullstackacademy.com`


//Alchemer assessment
const alchemerAssessmentMap = {
  FCB: {
    surveyId: '5963046',
    templateId: '10488323'
  },
  univCYB: {
    surveyId: '6049421',
    templateId: '10626200',
    curriculumVar: 'Cyber'
  },
  univWEB: {
    surveyId: '5976196',
    templateId: '10626247',
    curriculumVar: 'Web'
  },
  univDAT: {
    surveyId: '6315015',
    templateId: '11278838',
    curriculumVar: 'Data'
  },
  univDVO: {
    surveyId: '6381331',
    templateId: '11490536',
    curriculumVar: 'DevOps'
  },
  FSAData: {
    surveyId: '6252519',
    templateId: '11097447',
    curriculumVar: 'Data'
  },
  FSACore: {
    surveyId: '6257286',
    templateId: '11118020',
  },
  WDFDataMath: {
    surveyId: '6598985',
    curriculumVar: 'Data'
  }
}

let surveyId = '', templateId = '', linkContactProp = ''
let assessmentName = `%20Assessment%20-%20${hsContactId}`
let tokenVariables = `brand=${brand}%26hs_contact_id=${hsContactId}`
if (brand === 'GHP' || (brand === 'FSA' && curriculum !== 'DAT')) {
  assessmentName = 'Core Web Dev' + assessmentName
  surveyId = alchemerAssessmentMap.FSACore.surveyId
  templateId = alchemerAssessmentMap.FSACore.templateId
  linkContactProp = 'core_assessment_invite_link'
} else if (brand === 'FCB') {
  assessmentName = 'Cyber' + assessmentName
  surveyId = alchemerAssessmentMap.FCB.surveyId
  templateId = alchemerAssessmentMap.FCB.templateId
  linkContactProp = 'cyber_university_assessment_invite_link'
} else if (brand === 'FSA' && curriculum === 'DAT') {
  assessmentName = 'Data' + assessmentName
  tokenVariables += '%26curriculum=data'
  surveyId = alchemerAssessmentMap.FSAData.surveyId
  templateId = alchemerAssessmentMap.FSAData.templateId
  linkContactProp = 'data_assessment_invite_link'
} else if (brand === 'WDF' && curriculum === 'DAT') {
  assessmentName = 'Data' + assessmentName
  tokenVariables += '%26curriculum=data'
  surveyId = alchemerAssessmentMap.WDFDataMath.surveyId
  templateId = alchemerAssessmentMap.WDFDataMath.templateId
  linkContactProp = wdfDataAssessmentType === 'wdf-data-excel'
    ? 'wdf_data_excel_assessment_invite_link'
    : 'wdf_data_math_assessment_invite_link'
} else {
  const keyName = `univ${curriculum}`
  assessmentName = `UNIV%20${alchemerAssessmentMap[keyName].curriculumVar}` + assessmentName
  tokenVariables += `%26curriculum=${alchemerAssessmentMap[keyName].curriculumVar.toLowerCase()}`
  surveyId = alchemerAssessmentMap[keyName].surveyId
  templateId = alchemerAssessmentMap[keyName].templateId
  if (curriculum === 'DAT') linkContactProp = 'data_assessment_invite_link'
  else if (curriculum === 'DVO') linkContactProp = 'devops_assessment_invite_link'
  else linkContactProp = 'cyber_university_assessment_invite_link'
}

const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = `https://api.alchemer.com/v5/survey/${surveyId}/surveycampaign/${templateId}?_method=POST&api_token=750d65732b91288445ec02be84f3b8d65236d733d58512dd91&api_token_secret=A9LEmy6IorjJM&name=${assessmentName}&tokenvariables=${tokenVariables}&copy=true`

// new fullstack site assessment flow does not require us to generate unique links (uses email as sguid)
let personalAlchemerLink
if (!isNewFullstack) {
  const resRaw = await fetch(url, options)
  const res = await resRaw.json()
  personalAlchemerLink = res.data.uri
} else {
  personalAlchemerLink = candidateAssessmentLink
}

let resendAssessmentProp
if (isWDFData) {
  resendAssessmentProp = wdfDataAssessmentType === 'wdf-data-excel'
    ? 're_send_wdf_data_excel_assessment'
    : 're_send_wdf_data_math_assessment'
} else {
  resendAssessmentProp = 'resend_assessment'
}

const assessmentLengthMinutes = isWDFData ? '60' : '30'

return { hsContactId, programName, buttonColor, candidateAssessmentLink, sender, personalAlchemerLink, linkContactProp, resendAssessmentProp, assessmentLengthMinutes }

// UNIV & FCB & FSA Data & Core & WDF Data | Re-Send Alchemer Assessment (o07888c)
