import { faker } from "@faker-js/faker";
export async function fetchTranslates(setTranslateList, WORDS) {
  const PEXELS_KEY = "9JAwGggodiE7NHl8FQ6cs1i6FwfkLbhis4zICykVX0viCTEGv0Ox3cbo";

  try {
    const results = await Promise.all(
      WORDS.map(async (word) => {
        const translateRes = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|es`
        );
        const translateData = await translateRes.json();
        const translated = translateData.responseData.translatedText;

        const imageRes = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(word)}&per_page=1`,
          { headers: { Authorization: PEXELS_KEY } }
        );
        const imageData = await imageRes.json();
        const imageUrl = imageData.photos?.[0]?.src?.medium || null;

        return {
          word,
          translated,
          imageUrl,
        };
      })
    );

    const cache = {
      savedAt: Date.now(),
      words: results,
    };
    localStorage.setItem("Translated Words", JSON.stringify(cache));

    setTranslateList(results.slice(0, 12));

  } catch (err) {
    console.error("Error fetching translations and images:", err);
  }
}

export function generateWords(count = 24) {
  const categories = [
    faker.color.human,     
    faker.animal.type,      
    faker.word.adjective,   
  ];

  const words = Array.from({ length: count }, () => {
    const randomCategory = faker.helpers.arrayElement(categories);
    return randomCategory();
  });

  return words;
}