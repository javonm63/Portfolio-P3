import '../styles/topNav.css'
import { useEffect } from 'react';
import { getAllBooks } from '../services/loadBooks';
import { topNavCatHook } from '../hooks/homepageHooks';

function TopNav4({stories, all, setAll, trending, setTrending, cartoons, setCartoons, crafts, setCrafts, setBookList}) {

function getVideos() {
    const cached = JSON.parse(localStorage.getItem('All Books'));
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    if (!cached) {
        setAll(true)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        getAllBooks(setBookList)
    } else {
        const age = now - cached.savedAt;
        if (age > oneDay) {
            getAllBooks(setBookList)
            setAll(true)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
        } else {
            setCardList(cached.facts); 
            setCategory('World Facts')
            setAll(true)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)

        }
    }
}; 
function getCrafts() {
   setAll(false)
    setTrending(false)
    setCartoons(false)
    setCrafts(true)
}
function getCartoons() {
    setAll(false)
    setTrending(false)
    setCartoons(true)
    setCrafts(false)
}

function trendingBtn() {
    setAll(false)
    setTrending(true)
    setCartoons(false)
    setCrafts(false)
}
    return (
        <nav className='topNav-main-container' style={{display: stories ? 'flex' : 'none', justifyContent: stories ? 'center' : 'flex-start'}}>
            <button className='topNav-btns' type='button' value='all' onClick={getVideos} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey'}}>All</button>
            <button className='topNav-btns' type='button' value='all' onClick={trendingBtn} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey'}}>History</button>
            <button className='topNav-btns' type='button' value='cartoons' onClick={getCartoons} style={{backgroundColor: cartoons ? 'rgb(184, 184, 184)' : 'grey'}}>Mystery</button>
            <button className='topNav-btns' type='button' value='crafts' onClick={getCrafts} style={{backgroundColor: crafts ? 'rgb(184, 184, 184)' : 'grey'}}>Cooking</button>
        </nav> 
    )
}

export default TopNav4