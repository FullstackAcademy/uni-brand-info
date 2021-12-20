
// determine email sender
let sender = ''
if (brand === 'CPU') sender = 'enrollment.calpoly@fullstackacademy.com'
else if (brand === 'CIT') sender = 'enrollment.caltech@fullstackacademy.com'
else if (brand === 'VPI') sender = 'enrollment.vt@fullstackacademy.com'
else if (brand === 'ECE') sender = 'enrollment.emory@fullstackacademy.com'
else if (brand === 'SJS') sender = 'enrollment.sjsu@fullstackacademy.com'
else sender = `enrollment.${brand.toLowerCase()}@fullstackacademy.com`
