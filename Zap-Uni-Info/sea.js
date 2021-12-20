

// determine university properties
let brand = '',
  programName = '',
  schoolId = '',
  dropboxLink = '',
  location = '',
  siteUrl = ''
if (programPref.includes('Cal Poly')) {
  brand = 'CPU'
  location = 'CA'
  schoolId = 'CA0285433190913'
  siteUrl = 'bootcamp-extended.calpoly.edu'
  dropboxLink = 'https://www.dropbox.com/request/TMecWNatVqtQ4wZRgiQs'

  if (programPref.includes('Cyber'))
    programName = 'Cal Poly Extended Ed Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Cal Poly Extended Ed Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CPU' + ` - ${hsDealUrl}`)
} else if (programPref.includes('UNF')) {
  brand = 'UNF'
  location = 'FL'
  schoolId = 'UN4076091521022'
  siteUrl = 'bootcamp.unf.edu'
  dropboxLink = 'https://www.dropbox.com/request/yZ1erOn6eFJtqStKGCCU'

  if (programPref.includes('Cyber')) programName = 'Cyber Bootcamp at UNF'
  else if (programPref.includes('Web')) programName = 'Coding Bootcamp at UNF'
  else throw new Error('Invalid Program Preference: UNF' + ` - ${hsDealUrl}`)
} else if (programPref.includes('USD')) {
  brand = 'USD'
  location = 'SD'
  schoolId = 'US7793866122870'
  siteUrl = 'bootcamp.sandiego.edu'
  dropboxLink = 'https://www.dropbox.com/request/fmHdABXdLaqPhnObRtpU'

  if (programPref.includes('Cyber')) programName = 'USD Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'USD Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'USD DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: USD' + ` - ${hsDealUrl}`)
} else if (programPref.includes('LSU')) {
  brand = 'LSU'
  location = 'LA'
  schoolId = 'LS3171172008447'
  siteUrl = 'bootcamp.online.lsu.edu'
  dropboxLink = 'https://www.dropbox.com/request/eQ2vyYOLVPUp0gX5ouyN'

  if (programPref.includes('Cyber')) programName = 'LSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'LSU Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'LSU DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: LSU' + ` - ${hsDealUrl}`)
} else if (programPref.includes('CIT')) {
  brand = 'CIT'
  location = 'CA'
  schoolId = 'CA6381878174237'
  siteUrl = 'bootcamp.ctme.caltech.edu'
  dropboxLink = 'https://www.dropbox.com/request/VV6GitX7ZpSRyjb5RxZS'

  if (programPref.includes('Cyber')) programName = 'Caltech Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Caltech Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'Caltech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: CIT' + ` - ${hsDealUrl}`)
} else if (programPref.includes('OKU')) {
  brand = 'OKU'
  location = 'OK'
  schoolId = 'OU9430175926770'
  siteUrl = 'bootcamp.outreach.ou.edu'
  dropboxLink = 'https://www.dropbox.com/request/WswTD9KrwggeiWWlWQie'

  if (programPref.includes('Cyber')) programName = 'OU Outreach Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'OU Outreach Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'OU Outreach Data Analytics Bootcamp'
  else if (programPref.includes('DevOps'))
    programName = 'OU Outreach DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: OKU' + ` - ${hsDealUrl}`)
} else if (programPref.includes('VPI')) {
  brand = 'VPI'
  location = 'VA'
  schoolId = 'VI4385897249996'
  siteUrl = 'bootcamp.cpe.vt.edu'
  dropboxLink = 'https://www.dropbox.com/request/ALlv1dQmZAWEdFKJbF2m'

  if (programPref.includes('Cyber'))
    programName = 'Virginia Tech Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Virginia Tech Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'Virginia Tech Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: VPI' + ` - ${hsDealUrl}`)
} else if (programPref.includes('ECE')) {
  brand = 'ECE'
  location = 'GA'
  schoolId = 'EM2477061601700'
  siteUrl = 'bootcamp.emory.edu'
  dropboxLink = 'https://www.dropbox.com/request/cTh4J0IrSV1baSPckF6K'

  if (programPref.includes('Cyber')) programName = 'Emory Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'Emory Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'Emory DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: ECE' + ` - ${hsDealUrl}`)
} else if (programPref.includes('UIC')) {
  brand = 'UIC'
  location = 'CH'
  schoolId = 'UN5899402321956'
  siteUrl = 'bootcamp.uic.edu'
  dropboxLink = 'https://www.dropbox.com/request/n2YH4fMudJ0xeo7vjhPD'

  if (programPref.includes('Cyber')) programName = 'UIC Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'UIC Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'UIC Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: UIC' + ` - ${hsDealUrl}`)
} else if (programPref.includes('SJS')) {
  brand = 'SJS'
  location = 'CA'
  schoolId = 'SA5792747108622'
  siteUrl = 'bootcamp.sjsu.edu'
  dropboxLink = 'https://www.dropbox.com/request/yIWjySYYzBSZ3IUJaaWS'

  if (programPref.includes('Cyber')) programName = 'SJSU Cyber Bootcamp'
  else if (programPref.includes('Web')) programName = 'SJSU Coding Bootcamp'
  else throw new Error('Invalid Program Preference: SJS' + ` - ${hsDealUrl}`)
} else if (programPref.includes('CSU')) {
  brand = 'CSU'
  location = 'CO'
  schoolId = 'CO8390320918890'
  siteUrl = 'bootcamp.colostate.edu'
  dropboxLink = 'https://www.dropbox.com/request/s5Upydr2Qf1Pf517kbRE'

  if (programPref.includes('Cyber'))
    programName = 'CSU Professional Education Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'CSU Professional Education Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSU' + ` - ${hsDealUrl}`)
} else if (programPref.includes('CSE')) {
  brand = 'CSE'
  location = 'CA'
  schoolId = 'CA8402497235384'
  siteUrl = 'bootcamp.ce.csueastbay.edu'
  dropboxLink = 'https://www.dropbox.com/request/f5srdshqUpg9PzuqJKqg'

  if (programPref.includes('Cyber'))
    programName = 'Cal State East Bay Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Cal State East Bay Coding Bootcamp'
  else throw new Error('Invalid Program Preference: CSE' + ` - ${hsDealUrl}`)
} else if (programPref.includes('CLE')) {
  brand = 'CLE'
  location = 'RM'
  schoolId = 'FU9845158649826'
  siteUrl = 'bootcamp.csuohio.edu'
  dropboxLink = 'https://www.dropbox.com/request/skiKh0gpphPuPyvMatHJ'

  if (programPref.includes('Cyber'))
    programName = 'Cleveland State Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'Cleveland State Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'Cleveland State Data Analytics Bootcamp'  
  else if (programPref.includes('DevOps'))
    programName = 'Cleveland State DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: CLE' + ` - ${hsDealUrl}`)
} else if (programPref.includes('UTD')) {
  brand = 'UTD'
  location = 'RM'
  schoolId = 'UT8076195546089'
  siteUrl = 'bootcamp.utdallas.edu'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Cyber')) programName = 'UT Dallas Cyber Bootcamp'
  else if (programPref.includes('Web'))
    programName = 'UT Dallas Coding Bootcamp'
  else if (programPref.includes('Data'))
    programName = 'UT Dallas Data Analytics Bootcamp'
  else if (programPref.includes('DevOps'))
    programName = 'UT Dallas DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: UTD' + ` - ${hsDealUrl}`)
} else if (programPref.includes('OSU')) {
  brand = 'OSU'
  location = 'RM'
  schoolId = 'OR0708543539314'
  siteUrl = 'bootcamp.oregonstate.edu'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Data')) programName = 'OSU Data Analytics Bootcamp'
  else throw new Error('Invalid Program Preference: OSU' + ` - ${hsDealUrl}`)
} else if (programPref.includes('UNM')) {
  brand = 'UNM'
  location = 'RM'
  schoolId = 'UN5005023398021'
  siteUrl = 'bootcamp.unm.edu'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Cyber')) programName = 'UNM CE Cyber Bootcamp'
  else if (programPref.includes('Data')) programName = 'UNM CE Data Analytics Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'UNM CE DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: UNM' + ` - ${hsDealUrl}`)
} else if (programPref.includes('USU')) {
  brand = 'USU'
  location = 'RM'
  schoolId = 'UT1685556877102'
  siteUrl = 'bootcamp.usu.edu'
  dropboxLink = 'https://www.dropbox.com/request/Gkz88nJWWYHSfdXfjSFA'

  if (programPref.includes('Cyber')) programName = 'USU Cyber Bootcamp'
  else if (programPref.includes('Data')) programName = 'USU Data Analytics Bootcamp'
  else if (programPref.includes('Web')) programName = 'USU Coding Bootcamp'
  else if (programPref.includes('DevOps')) programName = 'USU DevOps Bootcamp'
  else throw new Error('Invalid Program Preference: USU' + ` - ${hsDealUrl}`)
} else {
  throw new Error(
    'Invalid Program Preference. Cannot identify university' + ` ${hsDealUrl}`
  )
}

// determine email sender/program name
let sender = ''

if (brand === 'CPU') sender = 'enrollment.calpoly@fullstackacademy.com'
else if (brand === 'CIT') sender = 'enrollment.caltech@fullstackacademy.com'
else if (brand === 'VPI') sender = 'enrollment.vt@fullstackacademy.com'
else if (brand === 'ECE') sender = 'enrollment.emory@fullstackacademy.com'
else if (brand === 'SJS') sender = 'enrollment.sjsu@fullstackacademy.com'
else sender = `enrollment.${brand.toLowerCase()}@fullstackacademy.com`
