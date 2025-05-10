// calendly-arabic.js

const params = new URLSearchParams(window.location.search);
const nameVal  = params.get('full_name') || "";
const emailVal = params.get('email') || "";

function loadCalendlyWhenReady() {
  if (window.Calendly && typeof Calendly.initInlineWidget === 'function') {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/d/cnkq-tww-96n/discovery-call-with-salma?hide_event_type_details=1&hide_gdpr_banner=1',
      parentElement: document.getElementById('calendly-embed-container'),
      prefill: {
        name: nameVal,
        email: emailVal
      }
    });
  } else {
    console.log('Waiting for Calendly...');
    setTimeout(loadCalendlyWhenReady, 100);
  }
}

document.addEventListener('DOMContentLoaded', loadCalendlyWhenReady);
