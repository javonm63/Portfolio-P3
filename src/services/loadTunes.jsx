export async function getKidsMusic(spotToken, setTunesList) {

  const res = await fetch(
    "https://api.spotify.com/v1/search?q=kidz-bop-kids%20music&type=track&limit=20",
    {
      headers: {
        Authorization: `Bearer ${spotToken}`,
      },
    }
  );

  const data = await res.json();
  const tunesDb = data.tracks.items
  const tunesArr = []
  tunesDb.forEach((tune) => {
    if (tune !== null) {
        tunesArr.push(tune.id)
    }
  })
  setTunesList(tunesArr.slice(0, 12))
  sessionStorage.setItem('New Tunes', JSON.stringify(tunesArr))
}

export async function getExpMusic(spotToken, setExpTunesList) {

  const res = await fetch(
    "https://api.spotify.com/v1/search?q=kids%20music&type=track&limit=20",
    {
      headers: {
        Authorization: `Bearer ${spotToken}`,
      },
    }
  );

  const data = await res.json();
  console.log(data)
  const tunesDb = data.tracks.items
  const tunesArr = []
  tunesDb.forEach((tune) => {
    if (tune !== null) {
        tunesArr.push(tune.id)
    }
  })
  console.log(tunesArr);
  setExpTunesList(tunesArr.slice(0, 12))
  sessionStorage.setItem('Explore Tunes', JSON.stringify(tunesArr))
}
export async function getMyMusic(spotToken, setMyTunesList) {
  const res = await fetch(
    "https://api.spotify.com/v1/search?q=disney%20music&type=track&limit=20",
    {
      headers: {
        Authorization: `Bearer ${spotToken}`,
      },
    }
  );

  const data = await res.json();
  console.log(data)
  const tunesDb = data.tracks.items
  const tunesArr = []
  tunesDb.forEach((tune) => {
    if (tune !== null) {
        tunesArr.push(tune.id)
    }
  })
  console.log(tunesArr);
  setMyTunesList(tunesArr.slice(0, 12))
  sessionStorage.setItem('My Tunes', JSON.stringify(tunesArr))
}