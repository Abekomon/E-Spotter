export default function getEventInfo(game) {
  return fetch(`https://espotter-server.herokuapp.com${game}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error("Api Response Error")
      }
    })
}