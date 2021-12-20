
// University properties map
let brand = '',
  programName = '',
  buttonColor = '',
  siteUrl = ''
if (programPref.includes('Cal Poly')) {
  brand = 'CPU'
  buttonColor = '#035642'
  siteUrl = 'bootcamp-extended.calpoly.edu'

  if (programPref.includes('Cyber'))
    programName = 'Cal Poly Extended Ed Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Cal Poly Extended Ed Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CPU')
} else if (programPref.includes('UNF')) {
  brand = 'UNF'
  buttonColor = '#002D72'
  siteUrl = 'bootcamp.unf.edu'

  if (programPref.includes('Cyber')) programName = 'Cyber Bootcamp at UNF'
  else if (programPref.includes('Web')) programName = 'Coding Bootcamp at UNF'
  else throw new Error('Invalid Program Preference: UNF')
} else if (programPref.includes('USD')) {
  brand = 'USD'
  buttonColor = '#0074C8'
  siteUrl = 'bootcamp.sandiego.edu'

  if (programPref.includes('Cyber')) programName = 'USD Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'USD Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'USD DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: USD')
} else if (programPref.includes('LSU')) {
  brand = 'LSU'
  buttonColor = '#461D7C'
  siteUrl = 'bootcamp.online.lsu.edu'

  if (programPref.includes('Cyber')) programName = 'LSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'LSU Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'LSU DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: LSU')
} else if (programPref.includes('CIT')) {
  brand = 'CIT'
  buttonColor = '#D14900'
  siteUrl = 'bootcamp.ctme.caltech.edu'

  if (programPref.includes('Cyber')) programName = 'Caltech Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Caltech Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'Caltech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: CIT')
} else if (programPref.includes('OKU')) {
  brand = 'OKU'
  buttonColor = '#841617'
  siteUrl = 'bootcamp.outreach.ou.edu'

  if (programPref.includes('Cyber')) programName = 'OU Outreach Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'OU Outreach Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'OU Outreach Data Analytics Bootcamp'
  else if (programPref.includes('DevOps'))
    programName = 'OU Outreach DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: OKU')
} else if (programPref.includes('VPI')) {
  brand = 'VPI'
  buttonColor = '#861f41'
  siteUrl = 'bootcamp.cpe.vt.edu'

  if (programPref.includes('Cyber'))
    programName = 'Virginia Tech Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Virginia Tech Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'Virginia Tech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: VPI')
} else if (programPref.includes('ECE')) {
  brand = 'ECE'
  buttonColor = '#0033A0'
  siteUrl = 'bootcamp.emory.edu'

  if (programPref.includes('Cyber')) programName = 'Emory Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Emory Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'Emory DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: ECE')
} else if (programPref.includes('UIC')) {
  brand = 'UIC'
  buttonColor = '#D50032'
  siteUrl = 'bootcamp.uic.edu'

  if (programPref.includes('Cyber')) programName = 'UIC Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'UIC Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'UIC Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: UIC')
} else if (programPref.includes('SJS')) {
  brand = 'SJS'
  buttonColor = '#0055A2'
  siteUrl = 'bootcamp.sjsu.edu'

  if (programPref.includes('Cyber')) programName = 'SJSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'SJSU Coding Bootcamp'
  else throw new Error('Invalid Program Preference: SJS')
} else if (programPref.includes('CSU')) {
  brand = 'CSU'
  buttonColor = '#1E4D2B'
  siteUrl = 'bootcamp.colostate.edu'

  if (programPref.includes('Cyber'))
    programName = 'CSU Professional Education Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'CSU Professional Education Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSU')
} else if (programPref.includes('CSE')) {
  brand = 'CSE'
  buttonColor = '#D50005'
  siteUrl = 'bootcamp.ce.csueastbay.edu'

  if (programPref.includes('Cyber'))
    programName = 'Cal State East Bay Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Cal State East Bay Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSE')
} else if (programPref.includes('CLE')) {
  brand = 'CLE'
  buttonColor = '#0033A0'
  siteUrl = 'bootcamp.csuohio.edu'

  if (programPref.includes('Cyber'))
    programName = 'Cleveland State Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Cleveland State Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'Cleveland State Data Analytics Bootcamp'
  else if (programPref.includes('DevOps'))
    programName = 'Cleveland State DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: CLE')
} else if (programPref.includes('UTD')) {
  brand = 'UTD'
  buttonColor = '#0033A0'
  siteUrl = 'bootcamp.utdallas.edu'

  if (programPref.includes('Cyber')) programName = 'UT Dallas Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'UT Dallas Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'UT Dallas Data Analytics Bootcamp'
  else if (programPref.includes('DevOps'))
    programName = 'UT Dallas DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: UTD')
} else if (programPref.includes('OSU')) {
  brand = 'OSU'
  buttonColor = '#d73f09'
  siteUrl = 'bootcamp.oregonstate.edu'

  if (programPref.includes('Data'))
    programName = 'Oregon State Data Analytics Bootcamp'
  // else if (programPref.includes('Cyber')) programName = 'Oregon State Cyber Bootcamp'
  // else if (programPref.includes('Web')) programName = 'Oregon State Coding Bootcamp'
  // else if (programPref.includes('DevOps')) programName = 'Oregon State DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: OSU')
} else if (programPref.includes('UNM')) {
  brand = 'UNM'
  buttonColor = '#BA032F'
  siteUrl = 'bootcamp.unm.edu'

  if (programPref.includes('Cyber')) programName = 'UNM CE Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'UNM CE Tech Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'UNM CE Data Analytics Bootcamp'
  else if (programPref.includes('DevOps'))
    programName = 'UNM CE DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: UNM')
} else if (programPref.includes('USU')) {
  brand = 'USU'
  buttonColor = '#212529'
  siteUrl = 'bootcamp.usu.edu'

  if (programPref.includes('Cyber'))
    programName = 'USU Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'USU Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'USU Data Analytics Bootcamp'
  else if (programPref.includes('DevOps'))
    programName = 'USU DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: USU')
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

//Properties for contact object request from HubSpot
let dealIdName, assessmentLinkPropertyName, assessmentScorePropertyName
if (brand === 'CPU') dealIdName = 'cp_deal_id'
else dealIdName = `${brand.toLowerCase()}_deal_id`
