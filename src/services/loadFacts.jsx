import { faker } from "@faker-js/faker";

export async function fetchAnimalsFacts(setCardList, animals) {
  const API_KEY = "SNqgfaUMNLeJnoqqyNyjbw==jIxIe3qHMQzRCtlK";
  const API_KEY2 = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo";

  try {
    const animalFacts = await Promise.all(
      animals.map(async (animal) => {
        const res = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
          headers: { "X-Api-Key": API_KEY },
        });
        const data = await res.json();
        return data[0];
      })
    );

    const factsWithImages = await Promise.all(
      animalFacts.map(async (fact) => {
        const res = await fetch(`https://api.pexels.com/v1/search?query=${fact.name}&per_page=1`, {
          headers: { Authorization: API_KEY2 },
        });
        const data = await res.json();
        const imageUrl = data.photos?.[0]?.src?.medium || null;
        return { ...fact, img: imageUrl };
      })
    );

    const cache = {
      savedAt: Date.now(),
      facts: factsWithImages,
    };
    localStorage.setItem("Animal Facts", JSON.stringify(cache));

    setCardList(factsWithImages.slice(0, 12));

  } catch (err) {
    console.error("Error fetching animal facts:", err);
  }
}

export async function fetchSpaceFacts(setCardList) {
  const API_KEY = "SNqgfaUMNLeJnoqqyNyjbw==jIxIe3qHMQzRCtlK";
  const API_KEY2 = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo";
  const spacef = [
    "mercury", "venus", "earth", "mars", "jupiter",
    "saturn", "uranus", "neptune", "pluto", "kepler-22b",
    "proxima%20centauri%20b", "kepler-452b"
  ];

  try {
    const spaceFacts = await Promise.all(
      spacef.map(async (space) => {
        const res = await fetch(`https://api.api-ninjas.com/v1/planets?name=${space}`, {
          headers: { "X-Api-Key": API_KEY },
        });
        const data = await res.json();
        return data[0];
      })
    );

    const factsWithImages = await Promise.all(
      spaceFacts.map(async (fact) => {
        const query = encodeURIComponent(`${fact.name} planet`);
        const res = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`, {
          headers: { Authorization: API_KEY2 },
        });
        const data = await res.json();
        const imageUrl = data?.collection?.items?.[0]?.links?.[0]?.href || null;
        return { ...fact, img: imageUrl };
      })
    );


    const cache = {
      savedAt: Date.now(),
      facts: factsWithImages,
    };
    localStorage.setItem("Space Facts", JSON.stringify(cache));

    setCardList(factsWithImages.slice(0, 12));

  } catch (err) {
    console.error("Error fetching space facts:", err);
  }
}

export async function fetchWorldFacts(setCardList, worldf) {
  const API_KEY = "SNqgfaUMNLeJnoqqyNyjbw==jIxIe3qHMQzRCtlK";
  const API_KEY2 = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo";

  try {
    const worldFacts = await Promise.all(
      worldf.map(async (country) => {
        const res = await fetch(`https://api.api-ninjas.com/v1/country?name=${country}`, {
          headers: { "X-Api-Key": API_KEY },
        });
        const data = await res.json();
        return data[0];
      })
    );

    const factsWithImages = await Promise.all(
      worldFacts.map(async (fact) => {
        const query = encodeURIComponent(`${fact.name} flag`);
        const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
          headers: { Authorization: API_KEY2 },
        });
        const data = await res.json();
        const imageUrl = data.photos?.[0]?.src?.medium || null;
        return { ...fact, img: imageUrl };
      })
    );


    const cache = {
      savedAt: Date.now(),
      facts: factsWithImages,
    };
    localStorage.setItem("World Facts", JSON.stringify(cache));

    setCardList(factsWithImages.slice(0, 12));

  } catch (err) {
    console.error("Error fetching world facts:", err);
  }
}

export async function fetchFoodFacts(setCardList, foodf) {
  const API_KEY = "SNqgfaUMNLeJnoqqyNyjbw==jIxIe3qHMQzRCtlK";
  const API_KEY2 = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo";

  try {
    const foodFacts = await Promise.all(
      foodf.map(async (food) => {
        const res = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${food}`, {
          headers: { "X-Api-Key": API_KEY },
        });
        const data = await res.json();
        return data[0];
      })
    );
    console.log(foodFacts)

    const factsWithImages = await Promise.all(
      foodFacts.map(async (fact) => {
        const query = encodeURIComponent(`${fact.name}`);
        const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
          headers: { Authorization: API_KEY2 },
        });
        const data = await res.json();
        const imageUrl = data.photos?.[0]?.src?.medium || null;
        return { ...fact, img: imageUrl };
      })
    );

    const cache = {
      savedAt: Date.now(),
      facts: factsWithImages,
    };
    localStorage.setItem("Food Facts", JSON.stringify(cache));

    setCardList(factsWithImages.slice(0, 12));

  } catch (err) {
    console.error("Error fetching food facts:", err);
  }
}

export async function fetchArtFacts(setCardList) {
  const artQueries = [
    "Monet", "Van Gogh", "Picasso", "Rembrandt", "Da Vinci",
    "Degas", "Warhol", "Kahlo", "O'Keeffe", "Michelangelo",
    "Matisse", "Rodin"
  ];

  try {
    const artFacts = await Promise.all(
      artQueries.map(async (query) => {
        const res = await fetch(
          `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&fields=id,title,image_id,artist_display,date_display`
        );
        const data = await res.json();
        const artwork = data.data?.[0];
        if (!artwork) return { title: query, artist: "Unknown", date: "", img: null };

        const imageUrl = artwork.image_id
          ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
          : null;

        return {
          name: artwork.title,
          artist: artwork.artist_display,
          date: artwork.date_display,
          img: imageUrl
        };
      })
    );

    const cache = {
      savedAt: Date.now(),
      facts: artFacts
    };
    localStorage.setItem("Art Facts", JSON.stringify(cache));

    setCardList(artFacts.slice(0, 12));
  } catch (err) {
    console.error("Error fetching art facts:", err);
  }
}
export async function fetchKindnessFacts(setCardList) {
  const PEXELS_KEY = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo"; 
  const numFacts = 12; 
  const nameArr = []
  const API_KEY = "SNqgfaUMNLeJnoqqyNyjbw==jIxIe3qHMQzRCtlK";

  try {
    const kindnessFacts = await Promise.all(
      Array.from({ length: numFacts }).map(async () => {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
          headers: { "X-Api-Key": API_KEY },
        });
        const data = await res.json();
        const quote = data[0];
        return { text: quote.quote, author: quote.author, name: `Quote about ${quote.category}` };
      })
    );
    

    console.log(kindnessFacts)

    const factsWithImages = await Promise.all(
      kindnessFacts.map(async (fact) => {
        const query = encodeURIComponent("sky");
        const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
          headers: { Authorization: PEXELS_KEY },
        });
        const data = await res.json();
        const imageUrl = data.photos?.[0]?.src?.medium || null;
        return { ...fact, img: imageUrl };
      })
    );

    const cache = {
      savedAt: Date.now(),
      facts: factsWithImages,
    };
    localStorage.setItem("Kindness Facts", JSON.stringify(cache));

    setCardList(factsWithImages.slice(0, numFacts));
  } catch (err) {
    console.error("Error fetching kindness facts:", err);
  }
}
export async function fetchHistoryFacts(setCardList, years) {
  const PEXELS_KEY = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo"; 
  const numFacts = 12; 
  const nameArr = []
  const API_KEY = "SNqgfaUMNLeJnoqqyNyjbw==jIxIe3qHMQzRCtlK";

  try {
    const allEvents = await Promise.all(
      years.map(async (year) => {
        const res = await fetch(`https://api.api-ninjas.com/v1/historicalevents?year=${year}`, {
          headers: { "X-Api-Key": API_KEY },
        });
        const data = await res.json();
        return data.map(event => ({ event: event.event, name: event.year }));
      })
    );

    const flatEvents = allEvents.flat();

    const factsWithImages = await Promise.all(
      flatEvents.map(async (fact) => {
        const query = encodeURIComponent(fact.event); 
        const imgRes = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
          headers: { Authorization: PEXELS_KEY },
        });
        const imgData = await imgRes.json();
        const imageUrl = imgData.photos?.[0]?.src?.medium || null;
        return { ...fact, img: imageUrl };
      })
    );

    const cache = {
      savedAt: Date.now(),
      facts: factsWithImages,
    };
    localStorage.setItem("History Facts", JSON.stringify(cache));

    setCardList(factsWithImages.slice(0, numFacts));
  } catch (err) {
    console.error("Error fetching history facts:", err);
  }
}

export async function fetchColorFacts(setCardList) {
  const PEXELS_KEY = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo"; 
  const numFacts = 12; 
  const colorCodes = [
    "FF5733", "33FF57", "3357FF", "F0E68C",
    "8A2BE2", "FF69B4", "00CED1", "FFD700",
    "FF4500", "7FFF00", "DC143C", "00FA9A"
  ];

  try {
    const allColors = await Promise.all(
      colorCodes.map(async (hex) => {
        const res = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
        const data = await res.json();
        return {
          name: data.name.value,
          hex: data.hex.value,
          rgb: data.rgb.value,
          hsl: data.hsl.value,
        };
      })
    );

    const colorsWithImages = await Promise.all(
      allColors.map(async (color) => {
        const query = encodeURIComponent(color.name);
        const imgRes = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
          headers: { Authorization: PEXELS_KEY },
        });
        const imgData = await imgRes.json();
        const imageUrl = imgData.photos?.[0]?.src?.medium || null;
        return { ...color, img: imageUrl };
      })
    );


    const cache = {
      savedAt: Date.now(),
      facts: colorsWithImages,
    };
    localStorage.setItem("Color Facts", JSON.stringify(cache));

    setCardList(factsWithImages.slice(0, numFacts));
  } catch (err) {
    console.error("Error fetching color facts:", err);
  }
}

export function generateWords(count = 12) {
  const animals = Array.from({ length: count }, () => faker.animal.type());
  const countries = Array.from({ length: count }, () => faker.location.country());
  const foods = Array.from({ length: count }, () => faker.food.dish());
  const kindWords = Array.from({ length: count }, () => faker.word.adjective());

  return {
    animals,
    countries,
    foods,
    kindWords,
  };
}
export function generateRandomYears(count = 4) {
  const currentYear = new Date().getFullYear();
  const earliestYear = -3000; 
  const years = new Set();

  while (years.size < count) {
    const randomYear = Math.floor(Math.random() * (currentYear - earliestYear + 1)) + earliestYear;
    years.add(randomYear);
  }

  return Array.from(years).sort((a, b) => a - b);
}