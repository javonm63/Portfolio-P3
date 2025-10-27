export async function fetchCrafts(setCardList) {
    const API_KEY = process.env.REACT_APP_API_KEY_CRAFTS;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=fun-arts-and-crafts-videos-for-kids&maxResults=50&regionCode=US&key=${API_KEY}`;

    try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) throw new Error("Invalid YouTube API response");

    const videosArr = data.items.map(item => ({
        thumbnail: item.snippet.thumbnails.high.url,
        channel: item.snippet.channelTitle,
        title: item.snippet.title,
        when: item.snippet.publishedAt,
        descript: item.snippet.description,
        id: item.id.videoId,
    }));

    const cache = {
        savedAt: Date.now(),
        videos: videosArr,
    };
    localStorage.setItem('Todays Crafts', JSON.stringify(cache));

    setCardList(videosArr.slice(0, 12));

    } catch (err) {
    console.error("Error fetching videos:", err);
    }
}

export async function fetchVideos(setCardList) {
    const API_KEY = process.env.REACT_APP_API_KEY_ALL;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=fun-videos-for-kids&maxResults=50&regionCode=US&key=${API_KEY}`;

    try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) throw new Error("Invalid YouTube API response");

    const videosArr = data.items.map(item => ({
        thumbnail: item.snippet.thumbnails.high.url,
        channel: item.snippet.channelTitle,
        title: item.snippet.title,
        when: item.snippet.publishedAt,
        descript: item.snippet.description,
        id: item.id.videoId,
    }));

    const cache = {
        savedAt: Date.now(),
        videos: videosArr,
    };
    localStorage.setItem('Todays List', JSON.stringify(cache));

    setCardList(videosArr.slice(0, 12));

    } catch (err) {
    console.error("Error fetching videos:", err);
    }
}

export async function fetchCartoons(setCardList) {
    const API_KEY = process.env.REACT_APP_API_KEY_CARTOONS;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=cartoons-for-kids&maxResults=50&regionCode=US&key=${API_KEY}`;

    try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) throw new Error("Invalid YouTube API response");

    const videosArr = data.items.map(item => ({
        thumbnail: item.snippet.thumbnails.high.url,
        channel: item.snippet.channelTitle,
        title: item.snippet.title,
        when: item.snippet.publishedAt,
        descript: item.snippet.description,
        id: item.id.videoId,
    }));

    const cache = {
        savedAt: Date.now(),
        videos: videosArr,
    };
    localStorage.setItem('Todays Cartoons', JSON.stringify(cache));
    setCardList(videosArr.slice(0, 12));
    } catch (err) {
        console.error("Error fetching videos:", err);
    }
}
export async function fetchAnimals(setCardList) {
    const API_KEY = process.env.REACT_APP_API_KEY_CARTOONS;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=animal-videos-for-kids&maxResults=50&regionCode=US&key=${API_KEY}`;

    try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) throw new Error("Invalid YouTube API response");

    const videosArr = data.items.map(item => ({
        thumbnail: item.snippet.thumbnails.high.url,
        channel: item.snippet.channelTitle,
        title: item.snippet.title,
        when: item.snippet.publishedAt,
        id: item.id.videoId,
        descript: item.snippet.description
    }));

    const cache = {
        savedAt: Date.now(),
        videos: videosArr,
    };
    localStorage.setItem('Todays Animals', JSON.stringify(cache));
    setCardList(videosArr.slice(0, 12));
    } catch (err) {
        console.error("Error fetching videos:", err);
    }
}
export async function fetchLearning(setCardList) {
    const API_KEY = process.env.REACT_APP_API_KEY_LEARNING;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=educational-videos-for-kids&maxResults=50&regionCode=US&key=${API_KEY}`;

    try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) throw new Error("Invalid YouTube API response");

    const videosArr = data.items.map(item => ({
        thumbnail: item.snippet.thumbnails.high.url,
        channel: item.snippet.channelTitle,
        title: item.snippet.title,
        when: item.snippet.publishedAt,
        descript: item.snippet.description,
        id: item.id.videoId,
    }));

    const cache = {
        savedAt: Date.now(),
        videos: videosArr,
    };
    localStorage.setItem('Todays Learning', JSON.stringify(cache));
    setCardList(videosArr.slice(0, 12));
    } catch (err) {
        console.error("Error fetching videos:", err);
    }
}
export async function fetchSongs(setCardList) {
    const API_KEY = process.env.REACT_APP_API_KEY_SONGS;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=disney-songs&maxResults=50&regionCode=US&key=${API_KEY}`;

    try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items) throw new Error("Invalid YouTube API response");

    const videosArr = data.items.map(item => ({
        thumbnail: item.snippet.thumbnails.high.url,
        channel: item.snippet.channelTitle,
        title: item.snippet.title,
        when: item.snippet.publishedAt,
        descript: item.snippet.description,
        id: item.id.videoId,
    }));

    const cache = {
        savedAt: Date.now(),
        videos: videosArr,
    };
    localStorage.setItem('Todays Songs', JSON.stringify(cache));
    setCardList(videosArr.slice(0, 12));
    } catch (err) {
        console.error("Error fetching videos:", err);
    }
}
