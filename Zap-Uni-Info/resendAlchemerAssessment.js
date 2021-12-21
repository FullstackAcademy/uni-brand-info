  tokenVariables += `%26curriculum=${alchemerAssessmentMap[keyName].curriculumVar.toLowerCase()}`
  surveyId = alchemerAssessmentMap[keyName].surveyId
  templateId = alchemerAssessmentMap[keyName].templateId
  if (curriculum === 'DAT') linkContactProp = 'data_assessment_invite_link'
  else if (curriculum === 'DVO') linkContactProp = 'devops_assessment_invite_link'
  else linkContactProp = 'cyber_university_assessment_invite_link'
}
​
const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}
​
const url = `https://api.alchemer.com/v5/survey/${surveyId}/surveycampaign/${templateId}?_method=POST&api_token=750d65732b91288445ec02be84f3b8d65236d733d58512dd91&api_token_secret=A9LEmy6IorjJM&name=${assessmentName}&tokenvariables=${tokenVariables}&copy=true`
​
// new fullstack site assessment flow does not require us to generate unique links (uses email as sguid)
let personalAlchemerLink
if (!isNewFullstack) {
  const resRaw = await fetch(url, options)
  const res = await resRaw.json()
  personalAlchemerLink = res.data.uri
} else {
  personalAlchemerLink = candidateAssessmentLink
}
​
let resendAssessmentProp
if (isWDFData) {
  resendAssessmentProp = wdfDataAssessmentType === 'wdf-data-excel'
    ? 're_send_wdf_data_excel_assessment'
    : 're_send_wdf_data_math_assessment'
} else {
  resendAssessmentProp = 'resend_assessment'
}
​
const assessmentLengthMinutes = isWDFData ? '60' : '30'
​
return { hsContactId, programName, buttonColor, candidateAssessmentLink, sender, personalAlchemerLink, linkContactProp, resendAssessmentProp, assessmentLengthMinutes }
​
// UNIV & FCB & FSA Data & Core & WDF Data | Re-Send Alchemer Assessment (o07888c)
