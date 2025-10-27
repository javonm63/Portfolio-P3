import '../styles/topNav.css'
import { useEffect } from 'react';
import { fetchVideos, fetchCrafts, fetchCartoons, fetchAnimals, fetchLearning, fetchSongs} from '../services/loadCategories';
import { topNavCatHook } from '../hooks/homepageHooks';

function TopNav3({myL, loadMore, setCardList, setCategory, all, setAll, trending, setTrending, cartoons, setCartoons}) {
    
    const cached = JSON.parse(localStorage.getItem('ToDos'));
    const cached2 = JSON.parse(localStorage.getItem('Completed Todos'));
    const cached3 = JSON.parse(localStorage.getItem('For later Todos'));
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
function getTodos() {
    if (!cached) {
        // fetchVideos(setCardList);
        setAll(true)
        setTrending(false)
        setCartoons(false)
    } else {
        const age = now - cached.savedAt;
        if (age > oneDay) {
            // fetchVideos(setCardList);
            setAll(true)
            setTrending(false)
            setCartoons(false)
        } else {
            // setCardList(cached.todos); 
            setCategory('ToDos')
            setAll(true)
            setTrending(false)
            setCartoons(false)
        }
    }
}; 

function getCompleted() {
    if (!cached2) {
        // fetchCartoons(setCardList);
        setAll(false)
        setTrending(true)
        setCartoons(false)
    } else {
        const age = now - cached2.savedAt;
        if (age > oneDay) {
            // fetchCartoons(setCardList);
            setAll(false)
            setTrending(true)
            setCartoons(false)
        } else {
            // setCardList(cached2.todos); 
            setCategory('Completed Todos')
            setAll(false)
            setTrending(true)
            setCartoons(false)
        }
    }
}

function getLaterTodos() {
    if (!cached3) {
        // fetchVideos(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(true)
    } else {
        const age = now - cached3.savedAt;
        if (age > oneDay) {
            // fetchVideos(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(true)
        } else {
            // setCardList(cached3.todos); 
            setCategory('For later Todos')
            setAll(false)
            setTrending(false)
            setCartoons(true)
        }
    }
}
    return (
        <nav className='topNav-main-container' style={{display: myL ? 'flex' : 'none', justifyContent: myL ? 'center': 'flex-start'}}>
            <button className='myL-topNav-btns' type='button' value='all' onClick={getTodos} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey'}}>ToDo</button>
            <button className='myL-topNav-btns' type='button' value='all' onClick={getCompleted} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey'}}>Completed</button>
            <button className='myL-topNav-btns' type='button' value='cartoons' onClick={getLaterTodos} style={{backgroundColor: cartoons ? 'rgb(184, 184, 184)' : 'grey'}}>Later</button>
        </nav> 
    )
}

export default TopNav3