
if (programPref.includes('Cal Poly')) {
  brand = 'CPU'

  if (programPref.includes('Cyber')) programName = 'Cal Poly Extended Ed Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Cal Poly Extended Ed Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CPU')

} else if (programPref.includes('UNF')) {
  brand = 'UNF'

  if (programPref.includes('Cyber')) programName = 'Cyber Bootcamp at UNF'
  else if (programPref.includes('Web')) programName = 'Coding Bootcamp at UNF'
  else throw new Error('Invalid Program Preference: UNF')

} else if (programPref.includes('USD')) {
  brand = 'USD'

  if (programPref.includes('Cyber')) programName = 'USD Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'USD Coding Bootcamp'
  else throw new Error('Invalid Program Preference: USD')

} else if (programPref.includes('UTD')) {
  brand = 'UTD'

  if (programPref.includes('Cyber')) programName = 'UTD Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'UTD Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'UTD Data Analytics Bootcamp'

  else throw new Error('Invalid Program Preference: UTD')

} else if (programPref.includes('LSU')) {
  brand = 'LSU'

  if (programPref.includes('Cyber')) programName = 'LSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'LSU Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'LSU DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: LSU')

} else if (programPref.includes('CIT')) {
  brand = 'CIT'

  if (programPref.includes('Cyber')) programName = 'Caltech Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Caltech Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'Caltech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: CIT')

} else if (programPref.includes('OKU')) {
  brand = 'OKU'

  if (programPref.includes('Cyber')) programName = 'OU Outreach Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'OU Outreach Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'OU Outreach Data Analytics Bootcamp'

  else throw new Error('Invalid Program Preference: OKU')

} else if (programPref.includes('VPI')) {
  brand = 'VPI'

  if (programPref.includes('Cyber')) programName = 'Virginia Tech Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Virginia Tech Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'Virginia Tech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: VPI')

} else if (programPref.includes('ECE')) {
  brand = 'ECE'

  if (programPref.includes('Cyber')) programName = 'Emory Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Emory Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'Emory DevOps Bootcamp'

  else throw new Error('Invalid Program Preference: ECE')

} else if (programPref.includes('UIC')) {
  brand = 'UIC'

  if (programPref.includes('Cyber')) programName = 'UIC Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'UIC Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'UIC Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: UIC')

} else if (programPref.includes('SJS')) {
  brand = 'SJS'

  if (programPref.includes('Cyber')) programName = 'SJSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'SJSU Coding Bootcamp'
  else throw new Error('Invalid Program Preference: SJS')

} else if (programPref.includes('CSU')) {
  brand = 'CSU'

  if (programPref.includes('Cyber')) programName = 'CSU Professional Education Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'CSU Professional Education Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSU')

} else if (programPref.includes('CSE')) {
  brand = 'CSE'

  if (programPref.includes('Cyber')) programName = 'Cal State East Bay Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Cal State East Bay Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSE')

} else if (programPref.includes('CLE')) {
  brand = 'CLE'

  if (programPref.includes('Cyber')) programName = 'Cleveland State Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Cleveland State Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'Cleveland State Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: Cleveland State')

} else if (programPref.includes('UNM')) {
  brand = 'UNM'

  if (programPref.includes('Cyber')) programName = 'UNM CE Cyber Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'UNM CE DevOps Bootcamp'
  else if (programPref.includes('Data')) programName = 'UNM CE Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: UNM')

} else {
  throw new Error('Invalid Program Preference. Cannot identify university')
}

// determine sender for email
let sender = ''
if (brand === 'CPU') sender = 'enrollment.calpoly@fullstackacademy.com'
else if (brand === 'CIT') sender = 'enrollment.caltech@fullstackacademy.com'
else if (brand === 'VPI') sender = 'enrollment.vt@fullstackacademy.com'
else if (brand === 'ECE') sender = 'enrollment.emory@fullstackacademy.com'
else if (brand === 'SJS') sender = 'enrollment.sjsu@fullstackacademy.com'
else sender = `enrollment.${brand.toLowerCase()}@fullstackacademy.com`

// determine congrats call link
let meetingLink = ''
if (brand === 'CPU') meetingLink = 'fsa/cpextended-ed'
else if (brand === 'CIT') meetingLink = 'fsa/caltech-bootcamps'
else if (brand === 'VPI') meetingLink = 'fsa/vt-bootcamps'
else if (brand === 'ECE') meetingLink = 'fsa/ece-bootcamps'
else if (brand === 'UIC') meetingLink = 'fsa/uic-bootcamps'
else if (brand === 'SJS') meetingLink = 'fsa/sjsu-bootcamps'
else if (brand === 'CSU') meetingLink = 'fsa/csu-bootcamps'
else if (brand === 'CSE') meetingLink = 'fsa/cse-bootcamps'
else if (brand === 'CLE') meetingLink = 'fsa/cleveland-state-tech-bootcamps'
else if (brand === 'OKU') meetingLink = 'fsa/ou-bootcamps'
else if (brand === 'UNM') meetingLink = 'fsa/unm-bootcamps'
else meetingLink = `admissions-admin/${brand}-bootcamps`
