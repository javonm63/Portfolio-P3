import '../styles/topNav.css'
import { useEffect } from 'react';
import { fetchVideos, fetchCrafts, fetchCartoons, fetchAnimals, fetchLearning, fetchSongs} from '../services/loadCategories';
import { topNavCatHook } from '../hooks/homepageHooks';

function TopNav({pg, loadMore, setCardList, setCategory, all, setAll}) {
    const tpHooks = topNavCatHook()
    const trending = tpHooks.trending
    const setTrending = tpHooks.setTrending
    const cartoons = tpHooks.cartoons
    const setCartoons = tpHooks.setCartoons
    const crafts = tpHooks.crafts
    const setCrafts = tpHooks.setCrafts
    const animals = tpHooks.animals
    const setAnimals = tpHooks.setAnimals
    const learning = tpHooks.learning
    const setLearning = tpHooks.setLearning
    const songs = tpHooks.songs
    const setSongs = tpHooks.setSongs

    const cached = JSON.parse(localStorage.getItem('Todays Crafts'));
    const cached2 = JSON.parse(localStorage.getItem('Todays Cartoons'));
    const cached3 = JSON.parse(localStorage.getItem('Todays List'));
    const cached4 = JSON.parse(localStorage.getItem('Todays Animals'));
    const cached5 = JSON.parse(localStorage.getItem('Todays Learning'));
    const cached6 = JSON.parse(localStorage.getItem('Todays Songs'));
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
function getVideos() {
    if (!cached3) {
        fetchVideos(setCardList);
        setAll(true)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
    } else {
        const age = now - cached3.savedAt;
        if (age > oneDay) {
            fetchVideos(setCardList);
            setAll(true)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
        } else {
            setCardList(cached3.videos.slice(0, 12)); 
            setCategory('Todays List')
            setAll(true)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
        }
    }
}; 
function getCrafts() {
    if (!cached) {
        fetchCrafts(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(true)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
    } else {
        const age = now - cached.savedAt;
        if (age > oneDay) {
            fetchCrafts(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(true)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
        } else {
            setCardList(cached.videos.slice(0, 12)); 
            setCategory('Todays Crafts')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(true)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
        }
    }
}
function getCartoons() {
    if (!cached2) {
        fetchCartoons(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(true)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
    } else {
        const age = now - cached2.savedAt;
        if (age > oneDay) {
            fetchCartoons(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(true)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
        } else {
            setCardList(cached2.videos.slice(0, 12)); 
            setCategory('Todays Cartoons')
            setAll(false)
            setTrending(false)
            setCartoons(true)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
        }
    }
}
function getAnimals() {
    if (!cached4) {
        fetchAnimals(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(true)
        setLearning(false)
        setSongs(false)
    } else {
        const age = now - cached4.savedAt;
        if (age > oneDay) {
            fetchAnimals(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(true)
            setLearning(false)
            setSongs(false)
        } else {
            setCardList(cached4.videos.slice(0, 12)); 
            setCategory('Todays Animals')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(true)
            setLearning(false)
            setSongs(false)
        }
    }
}
function getLearning() {
    if (!cached5) {
        fetchLearning(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(true)
        setSongs(false)
    } else {
        const age = now - cached5.savedAt;
        if (age > oneDay) {
            fetchLearning(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(true)
            setSongs(false)
        } else {
            setCardList(cached5.videos.slice(0, 12)); 
            setCategory('Todays Learning')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(true)
            setSongs(false)
        }
    }
}
function getSongs() {
    if (!cached6) {
        fetchSongs(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(true)
    } else {
        const age = now - cached6.savedAt;
        if (age > oneDay) {
            fetchSongs(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(true)
        } else {
            setCardList(cached6.videos.slice(0, 12)); 
            setCategory('Todays Songs')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(true)
        }
    }
}
function trendingBtn() {
    loadMore('Todays List')
    setAll(false)
    setTrending(true)
    setCartoons(false)
    setCrafts(false)
    setAnimals(false)
    setLearning(false)
    setSongs(false)
}
    return (
        <nav className='topNav-main-container' style={{display: pg ? 'flex' : 'none'}}>
            <button className='topNav-btns' type='button' value='all' onClick={getVideos} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey'}}>All</button>
            <button className='topNav-btns' type='button' value='all' onClick={trendingBtn} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey'}}>Trending</button>
            <button className='topNav-btns' type='button' value='cartoons' onClick={getCartoons} style={{backgroundColor: cartoons ? 'rgb(184, 184, 184)' : 'grey'}}>Cartoons</button>
            <button className='topNav-btns' type='button' value='crafts' onClick={getCrafts} style={{backgroundColor: crafts ? 'rgb(184, 184, 184)' : 'grey'}}>Crafts</button>
            <button className='topNav-btns' type='button' value='animals' onClick={getAnimals} style={{backgroundColor: animals ? 'rgb(184, 184, 184)' : 'grey'}}>Animals</button>
            <button className='topNav-btns' type='button' value='learning' onClick={getLearning} style={{backgroundColor: learning ? 'rgb(184, 184, 184)' : 'grey'}}>Learn</button>
            <button className='topNav-btns' type='button' value='Songs' onClick={getSongs} style={{backgroundColor: songs ? 'rgb(184, 184, 184)' : 'grey'}}>Sing-Alongs</button>
            <button className='topNav-btns' type='button'>Peer Faves</button>
        </nav> 
    )
}

export default TopNav