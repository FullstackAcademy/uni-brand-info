
// determine email sender/program name
let sender = ''
if (brand === 'CPU') sender = 'enrollment.calpoly@fullstackacademy.com'
else if (brand === 'CIT') sender = 'enrollment.caltech@fullstackacademy.com'
else if (brand === 'VPI') sender = 'enrollment.vt@fullstackacademy.com'
else if (brand === 'ECE') sender = 'enrollment.emory@fullstackacademy.com'
else if (brand === 'SJS') sender = 'enrollment.sjsu@fullstackacademy.com'
else sender = `enrollment.${brand.toLowerCase()}@fullstackacademy.com`

let programName, pmName, pmEmail
if (brand === 'CPU') {
  pmName = 'Kate Turner'
  pmEmail = 'katelyn.turner@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'Cal Poly Extended Ed Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Cal Poly Extended Ed Coding Bootcamp'
  else throw new Error('Invalid Curriculum: CPU')
} else if (brand === 'UNF') {
  pmName = 'Kimberly Shaw'
  pmEmail = 'kimberly.shaw@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'Cyber Bootcamp at UNF'
  else if (curriculum === 'WEB') programName = 'Coding Bootcamp at UNF'
  else throw new Error('Invalid Curriculum: UNF')
} else if (brand === 'USD') {
  pmName = 'Kate Turner'
  pmEmail = 'katelyn.turner@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'USD Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'USD Coding Bootcamp'
  else if (curriculum === 'DVO') programName = 'USD DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: USD')
} else if (brand === 'LSU') {
  pmName = 'Kimberly Shaw'
  pmEmail = 'kimberly.shaw@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'LSU Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'LSU Coding Bootcamp'
  else if (curriculum === 'DVO') programName = 'LSU DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: LSU')
} else if (brand === 'CIT') {
  pmName = 'Parish Jefferson'
  pmEmail = 'parish.jefferson@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'Caltech Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Caltech Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'Caltech Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: CIT')
} else if (brand === 'OKU') {
  pmName = 'Kate Turner'
  pmEmail = 'katelyn.turner@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'OU Outreach Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'OU Outreach Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'OU Outreach Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'OU Outreach DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: OKU')
} else if (brand === 'VPI') {
  pmName = 'Kate Turner'
  pmEmail = 'katelyn.turner@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'Virginia Tech Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Virginia Tech Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'Virginia Tech Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: VPI')
} else if (brand === 'ECE') {
  pmName = 'Kate Turner'
  pmEmail = 'katelyn.turner@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'Emory Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Emory Coding Bootcamp'
  else if (curriculum === 'DVO') programName = 'Emory DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: ECE')
} else if (brand === 'UIC') {
  pmName = 'Brett Kurtz'
  pmEmail = 'brett.kurtz@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'UIC Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'UIC Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'UIC Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: UIC')
} else if (brand === 'SJS') {
  pmName = 'Morgan Ersery'
  pmEmail = 'morgan.ersery@fullstackacademy.com'
  if (curriculum === 'CYB') {
  programName = 'SJSU Cyber Bootcamp'
  pmName = 'Brett Kurtz'
  pmEmail = 'brett.kurtz@fullstackacademy.com'
  } else if (curriculum === 'WEB'){
  programName = 'SJSU Coding Bootcamp'
  pmName = 'Parish Jefferson'
  pmEmail = 'parish.jefferson@fullstackacademy.com'
  }
  else throw new Error('Invalid Curriculum: SJS')
} else if (brand === 'CSU') {
  pmName = 'Morgan Ersery'
  pmEmail = 'morgan.ersery@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'CSU Professional Education Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'CSU Professional Education Coding Bootcamp'
  else throw new Error('Invalid Curriculum: CSU')
} else if (brand === 'CSE') {
  pmName = 'Morgan Ersery'
  pmEmail = 'morgan.ersery@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'Cal State East Bay Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Cal State East Bay Coding Bootcamp'
  else throw new Error('Invalid Curriculum: CSE')
} else if (brand === 'CLE') {
  pmName = 'Kimberly Shaw'
  pmEmail = 'kimberly.shaw@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'Cleveland State Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'Cleveland State Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'Cleveland State Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'Cleveland State DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: CLE')
} else if (brand === 'UTD') {
  pmName = 'Kimberly Shaw'
  pmEmail = 'kimberly.shaw@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'UT Dallas Cyber Bootcamp'
  else if (curriculum === 'WEB') programName = 'UT Dallas Coding Bootcamp'
  else if (curriculum === 'DAT') programName = 'UT Dallas Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'UT Dallas DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: UTD')
} else if (brand === 'OSU') {
  pmName = 'Parish Jefferson'
  pmEmail = 'parish.jefferson@fullstackacademy.com'
  if (curriculum === 'DAT') programName = 'OSU Data Analytics Bootcamp'
  else throw new Error('Invalid Curriculum: OSU')
} else if (brand === 'UNM') {
  pmName = 'Parish Jefferson'
  pmEmail = 'parish.jefferson@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'UNM CE Cyber Bootcamp'
  else if (curriculum === 'DAT') programName = 'UNM CE Data Analytics Bootcamp'
  else if (curriculum === 'DVO') programName = 'UNM CE DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: UNM')
} else if (brand === 'USU') {
  pmName = 'Parish Jefferson'
  pmEmail = 'parish.jefferson@fullstackacademy.com'
  if (curriculum === 'CYB') programName = 'USU Cyber Bootcamp'
  else if (curriculum === 'DAT') programName = 'USU Data Analytics Bootcamp'
  else if (curriculum === 'WEB') programName = 'USU Coding Bootcamp'
  else if (curriculum === 'DVO') programName = 'USU DevOps Bootcamp'
  else throw new Error('Invalid Curriculum: USU')
} else {
  throw new Error('Invalid brand')
}
