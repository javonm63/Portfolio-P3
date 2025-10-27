import '../styles/topNav.css'
import { useEffect } from 'react';
import { fetchVideos, fetchCrafts, fetchCartoons, fetchAnimals, fetchLearning, fetchSongs} from '../services/loadCategories';
import { topNavCatHook } from '../hooks/homepageHooks';

function TopNav7({loadMore, setGameList, setGaming, setCategory, all, setAll, trending, setTrending, cartoons, setCartoons, crafts, setCrafts, disp}) {

    const cached = JSON.parse(localStorage.getItem('Sports Games'));
    const cached2 = JSON.parse(localStorage.getItem('Arcade Games'));
    const cached3 = JSON.parse(localStorage.getItem('Puzzle Games'));
    const cached4 = JSON.parse(localStorage.getItem('Random Games'));
    // const cached5 = JSON.parse(localStorage.getItem('Todays Learning'));
    // const cached6 = JSON.parse(localStorage.getItem('Todays Songs'));
function getVideos() {
    if (!cached) {
        setGameList([]);
        setAll(true)
        setTrending(false)
        setCartoons(false)
        setGaming(false)
        setCrafts(false)
    } else {
        setGameList(cached.slice(0, 6)); 
        // setCategory('Todays List')
        setAll(true)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setGaming(false)
    }
}; 
function getCrafts() {
    if (!cached4) {
        setGameList([]);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setGaming(false)
        setCrafts(true)
    } else {
        setGameList(cached4.slice(0, 6)); 
        // setCategory('Todays Crafts')
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setGaming(false)
        setCrafts(true)
    }
}
function getCartoons() {
    if (!cached3) {
        setGameList([]);
        setAll(false)
        setTrending(false)
        setCartoons(true)
        setGaming(false)
        setCrafts(false)
    } else {
        setGameList(cached3.slice(0, 6)); 
        // setCategory('Todays List')
        setAll(false)
        setTrending(false)
        setCartoons(true)
        setGaming(false)
        setCrafts(false)
    }
}

function trendingBtn() {
    // loadMore('Todays List')
    if (!cached2) {
        setGameList([]);
        setAll(false)
        setTrending(true)
        setCartoons(false)
        setGaming(false)
        setCrafts(false)
    } else {
        setGameList(cached2.slice(0, 6)); 
        // setCategory('Todays List')
        setAll(false)
        setTrending(true)
        setCartoons(false)
        setGaming(false)
        setCrafts(false)
    }
}
    return (
        <nav className='topNav-main-container' style={{display: disp ? 'flex' :'none', justifyContent: 'center'}}>
            <button className='topNav-btns' type='button' value='all' onClick={getVideos} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey'}}>Sports</button>
            <button className='topNav-btns' type='button' value='all' onClick={trendingBtn} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey'}}>Arcade</button>
            <button className='topNav-btns' type='button' value='cartoons' onClick={getCartoons} style={{backgroundColor: cartoons ? 'rgb(184, 184, 184)' : 'grey'}}>Puzzles</button>
            <button className='topNav-btns' type='button' value='crafts' onClick={getCrafts} style={{backgroundColor: crafts ? 'rgb(184, 184, 184)' : 'grey'}}>Random</button>
        </nav> 
    )
}

export default TopNav7