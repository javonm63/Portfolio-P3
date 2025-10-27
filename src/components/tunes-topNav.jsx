import '../styles/topNav.css'
import { useEffect } from 'react';
import { topNavCatHook } from '../hooks/homepageHooks';
import { getKidsMusic , getExpMusic, getMyMusic} from '../services/loadTunes';

function TopNav5({tunes, all, setAll, trending, setTrending, cartoons, setCartoons, setTunesList, setExpTunesList, setMyTunesList, spotToken}) {

    const cached = JSON.parse(sessionStorage.getItem('New Tunes'));
    const cached2 = JSON.parse(sessionStorage.getItem('Explore Tunes'));
    const cached3 = JSON.parse(sessionStorage.getItem('My Tunes'));
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
function getVideos() {
    if (!cached) {
        getKidsMusic(spotToken, setTunesList);
        setAll(true)
        setTrending(false)
        setCartoons(false)
    } else {
        setTunesList(cached.slice(0, 12)); 
        // setCategory('New Tunes')
        setAll(true)
        setTrending(false)
        setCartoons(false)
    }
}; 
function getCartoons() {
    if (!cached2) {
        getExpMusic(spotToken, setExpTunesList);
        setAll(false)
        setTrending(false)
        setCartoons(true)
    } else {
        setExpTunesList(cached2.slice(0, 12)); 
        // setCategory('New Tunes')
        setAll(false)
        setTrending(false)
        setCartoons(true)
    }
}
function trendingBtn() {
    // loadMore('Todays List')
    if (!cached3) {
        getMyMusic(spotToken, setMyTunesList);
        setAll(false)
        setTrending(true)
        setCartoons(false)
    } else {
        setMyTunesList(cached3.slice(0, 12)); 
        // setCategory('New Tunes')
        setAll(false)
        setTrending(true)
        setCartoons(false)
    }
}
    return (
        <nav className='topNav-main-container' style={{display: tunes ? 'flex' : 'none', justifyContent: 'center'}}>
            <button className='topNav-btns' type='button' value='all' onClick={getVideos} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey', width: '30%'}}>Kids Bop</button>
            <button className='topNav-btns' type='button' value='all' onClick={getCartoons} style={{backgroundColor: cartoons ? 'rgb(184, 184, 184)' : 'grey', width: '30%'}}>Explore</button>
            <button className='topNav-btns' type='button' value='cartoons' onClick={trendingBtn} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey', width: '30%'}}>Disney</button>
        </nav> 
    )
}

export default TopNav5