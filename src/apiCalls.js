export default function getEventInfo(game) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  return fetch(`https://api.pandascore.co${game}/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo`, options)
    .then(response => response.json())
}