const params = new URLSearchParams(window.location.search);
const nameVal  = params.get('full_name')  || "";
const emailVal = params.get('email') || "";
const phoneVal = params.get('phone') || "";

function loadCalendlyWhenReady() {
  if (window.Calendly && typeof Calendly.initInlineWidget === 'function') {
    const prefillData = {
      name: nameVal,
      email: emailVal
    };

    if (phoneVal) {
      prefillData.customAnswers = { a1: phoneVal };
    }

    Calendly.initInlineWidget({
      url: 'https://calendly.com/d/crmx-mtx-rq7/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1',
      parentElement: document.getElementById('calendly-embed-container'),
      prefill: prefillData,
      utm: {}
    });
  } else {
    setTimeout(loadCalendlyWhenReady, 100);
  }
}

document.addEventListener('DOMContentLoaded', loadCalendlyWhenReady);