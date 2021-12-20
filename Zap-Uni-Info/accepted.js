
if (programPref.includes('Cal Poly')) {
  brand = 'CPU'
  schoolId = 'CA0285433190913'
  buttonColor = '#035642'
  dropboxLink = 'https://www.dropbox.com/request/TMecWNatVqtQ4wZRgiQs'

  if (programPref.includes('Cyber')) programName = 'Cal Poly Extended Ed Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Cal Poly Extended Ed Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CPU')

} else if (programPref.includes('UNF')) {
  brand = 'UNF'
  schoolId = 'UN4076091521022'
  buttonColor = '#002D72'
  dropboxLink = 'https://www.dropbox.com/request/yZ1erOn6eFJtqStKGCCU'

  if (programPref.includes('Cyber')) programName = 'Cyber Bootcamp at UNF'
  else if (programPref.includes('Web')) programName = 'Coding Bootcamp at UNF'
  else throw new Error('Invalid Program Preference: UNF')

} else if (programPref.includes('USD')) {
  brand = 'USD'
  schoolId = 'US7793866122870'
  buttonColor = '#0074C8'
  dropboxLink = 'https://www.dropbox.com/request/fmHdABXdLaqPhnObRtpU'

  if (programPref.includes('Cyber')) programName = 'USD Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'USD Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'USD DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: USD')

} else if (programPref.includes('LSU')) {
  brand = 'LSU'
  schoolId = 'LS3171172008447'
  buttonColor = '#461D7C'
  dropboxLink = 'https://www.dropbox.com/request/eQ2vyYOLVPUp0gX5ouyN'

  if (programPref.includes('Cyber')) programName = 'LSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'LSU Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'LSU DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: LSU')

} else if (programPref.includes('CIT')) {
  brand = 'CIT'
  schoolId = 'CA6381878174237'
  buttonColor = '#D14900'
  dropboxLink = 'https://www.dropbox.com/request/VV6GitX7ZpSRyjb5RxZS'

  if (programPref.includes('Cyber')) programName = 'Caltech Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Caltech Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'Caltech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: CIT')

} else if (programPref.includes('OKU')) {
  brand = 'OKU'
  schoolId = 'OU9430175926770'
  buttonColor = '#841617'
  dropboxLink = 'https://www.dropbox.com/request/WswTD9KrwggeiWWlWQie'

  if (programPref.includes('Cyber')) programName = 'OU Outreach Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'OU Outreach Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'OU Outreach Data Analytics Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'OU Outreach DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: OKU')

} else if (programPref.includes('VPI')) {
  brand = 'VPI'
  schoolId = 'VI4385897249996'
  buttonColor = '#861f41'
  dropboxLink = 'https://www.dropbox.com/request/ALlv1dQmZAWEdFKJbF2m'

  if (programPref.includes('Cyber')) programName = 'Virginia Tech Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Virginia Tech Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'Virginia Tech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: VPI')

} else if (programPref.includes('ECE')) {
  brand = 'ECE'
  schoolId = 'EM2477061601700'
  buttonColor = '#0033A0'
  dropboxLink = 'https://www.dropbox.com/request/cTh4J0IrSV1baSPckF6K'

  if (programPref.includes('Cyber')) programName = 'Emory Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Emory Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'Emory DevOps Bootcamp'

  else throw new Error('Invalid Program Preference: ECE')

} else if (programPref.includes('UIC')) {
  brand = 'UIC'
  schoolId = 'UN5899402321956'
  buttonColor = '#D50032'
  dropboxLink = 'https://www.dropbox.com/request/n2YH4fMudJ0xeo7vjhPD'

  if (programPref.includes('Cyber')) programName = 'UIC Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'UIC Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'UIC Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: UIC')

} else if (programPref.includes('SJS')) {
  brand = 'SJS'
  schoolId = 'SA5792747108622'
  buttonColor = '#0055A2'
  dropboxLink = 'https://www.dropbox.com/request/yIWjySYYzBSZ3IUJaaWS'

  if (programPref.includes('Cyber')) programName = 'SJSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'SJSU Coding Bootcamp'
  else throw new Error('Invalid Program Preference: SJS')

} else if (programPref.includes('CSU')) {
  brand = 'CSU'
  schoolId = 'CO8390320918890'
  buttonColor = '#1E4D2B'
  dropboxLink = 'https://www.dropbox.com/request/s5Upydr2Qf1Pf517kbRE'

  if (programPref.includes('Cyber')) programName = 'CSU Professional Education Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'CSU Professional Education Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSU')

} else if (programPref.includes('CSE')) {
  brand = 'CSE'
  schoolId = 'CA8402497235384'
  buttonColor = '#D50005'
  dropboxLink = 'https://www.dropbox.com/request/f5srdshqUpg9PzuqJKqg'

  if (programPref.includes('Cyber')) programName = 'Cal State East Bay Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Cal State East Bay Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSE')

} else if (programPref.includes('CLE')) {
  brand = 'CLE'
  schoolId = 'FU9845158649826'
  buttonColor = '#012172'
  dropboxLink = 'https://www.dropbox.com/request/skiKh0gpphPuPyvMatHJ'

  if (programPref.includes('Cyber')) programName = 'Cleveland State Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Cleveland State Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'Cleveland State Data Analytics Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'Cleveland State DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: Cleveland State')

} else if (programPref.includes('UTD')) {
  brand = 'UTD'
  schoolId = 'UT8076195546089'
  buttonColor = '#154734'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Cyber')) programName = 'UT Dallas Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'UT Dallas Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'UT Dallas Data Analytics Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'UT Dallas DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: UT Dallas')

} else if (programPref.includes('OSU')) {
  brand = 'OSU'
  schoolId = 'OR0708543539314'
  buttonColor = '#d73f09'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Data')) programName = 'OSU Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: OSU')

} else if (programPref.includes('UNM')) {
  brand = 'UNM'
  schoolId = 'UN5005023398021'
  buttonColor = '#BA2031'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Cyber')) programName = 'UNM CE Cyber Bootcamp'
  else if (programPref.includes('Data')) programName = 'UNM CE Data Analytics Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'UNM CE DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: UNM')

} else if (programPref.includes('USU')) {
  brand = 'USU'
  schoolId = 'UT1685556877102'
  buttonColor = '#00263A'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Cyber')) programName = 'USU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'USU Coding Bootcamp'
  else if (programPref.includes('Data')) programName = 'USU Data Analytics Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'USU DevOps Bootcamp'
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

// determine congrats call link
let ccLink = ''
if (brand === 'CPU') ccLink = 'admissions-admin/cal-poly-acceptance-call'
else if (brand === 'CIT') ccLink = 'admissions-admin/caltech-bootcamps-acceptance-call'
else if (brand === 'VPI') ccLink = 'admissions-admin/vt-bootcamps-acceptance-call'
else if (brand === 'ECE') ccLink = 'fsa/emory-tech-bootcamps-acceptance-call'
else if (brand === 'UIC') ccLink = 'fsa/uic-tech-bootcamps-acceptance-call'
else if (brand === 'SJS') ccLink = 'fsa/sjsu-tech-bootcamps-acceptance-call'
else if (brand === 'CSU') ccLink = 'fsa/csu-bootcamps-acceptance-call'
else if (brand === 'CSE') ccLink = 'fsa/cse-bootcamps-acceptance-call'
else if (brand === 'CLE') ccLink = 'fsa/cle-bootcamps-acceptance-call'
else if (brand === 'UTD') ccLink = 'fsa/utd-bootcamps-acceptance-call'
else if (brand === 'UNM') ccLink = 'fsa/unm-bootcamps-acceptance-call'
else if (brand === 'USU') ccLink = 'fsa/usu-bootcamps-acceptance-call'
else ccLink = `admissions-admin/${brand}-bootcamps-acceptance-call`


let nextAvailableDealstageId = ''
if (brand === 'OKU') nextAvailableDealstageId = '17485498'
else if (brand === 'CIT') nextAvailableDealstageId = '17485504'
else if (brand === 'OSU') nextAvailableDealstageId = '2946891'
else if (brand === 'CLE') nextAvailableDealstageId = '5328995'
else if (brand === 'SJS') nextAvailableDealstageId = '5334529'
else if (brand === 'UIC') nextAvailableDealstageId = '5331848'
else if (brand === 'VPI') nextAvailableDealstageId = '5331850'
else if (brand === 'CPU') nextAvailableDealstageId = '5334531'
else if (brand === 'CSU') nextAvailableDealstageId = '5332389'
else if (brand === 'LSU') nextAvailableDealstageId = '5331858'
else if (brand === 'CSE') nextAvailableDealstageId = '5332500'
else if (brand === 'ECE') nextAvailableDealstageId = '5334581'
else if (brand === 'UNF') nextAvailableDealstageId = '5331879'
else if (brand === 'USD') nextAvailableDealstageId = '5332508'
else if (brand === 'UTD') nextAvailableDealstageId = '5334582'
else if (brand === 'UNM') nextAvailableDealstageId = '6915766'
else if (brand === 'USU') nextAvailableDealstageId = '9091593'

