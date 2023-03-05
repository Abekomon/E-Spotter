const dayjs = require('dayjs')

export default function dataCleaner(event) {
  const teamNames = event.teams.map(team => team.name).join(",  ")
  const data = {
    id: event.id,
    type: event.name,
    logo: event.league.image_url,
    teams: teamNames,
    game_name: event.videogame.name,
    league_name: event.league.name,
    series_name: event.serie.name,
    series_full: event.serie.full_name,
    start_time: dayjs(event.begin_at).format('dddd, MMM DD @ h A (EST)'),
    num_matches: event.matches.length,
  }
  return data
}