async function filterComments() {
  const comments = document.querySelectorAll('p, span, div');
  const threshold = 0.5;

  for (let comment of comments) {
    let text = comment.innerText;
    if (text) {
      let isHateful = await checkForHateSpeech(text);
      if (isHateful) {
        comment.style.display = 'none';
      }
    }
  }
}

async function checkForHateSpeech(text) {
  const apiKey = constants.apiKey;
  const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${apiKey}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment: { text: text },
      languages: ["en"],
      requestedAttributes: { TOXICITY: {} }
    })
  });
  
  const result = await response.json();
  return result.attributeScores.TOXICITY.summaryScore.value >= 0.5;
}

async function checkForHateSpeech2(text) {
  const response = await fetch('http://localhost:5000/predict', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text })
  });

  const result = await response.json();
  return result.hatefulness >= 0.5; // Adjust threshold as needed
}

  

filterComments();
