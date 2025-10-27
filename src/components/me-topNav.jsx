import '../styles/topNav.css'
import { useEffect } from 'react';
import { fetchVideos, fetchCrafts, fetchCartoons, fetchAnimals, fetchLearning, fetchSongs} from '../services/loadCategories';
import { topNavCatHook } from '../hooks/homepageHooks';

function TopNav8({disp, loadMore, setCardList, setCategory, all, setAll, trending, setTrending, setMeInfo}) {

    const aboutMe = JSON.parse(sessionStorage.getItem('Me'));
    const aboutPet = JSON.parse(sessionStorage.getItem('Pet'));
function getVideos() {
    if (!aboutMe) {
        setMeInfo(['NAME', '', 'AGE', '', 'COLOR', '', 'FOOD', '', 'ANIMAL', '', 'TALENT', ''])
        setAll(true)
        setTrending(false)
    } else {
        setMeInfo(['NAME', aboutMe.rname, 'AGE', `${aboutMe.rage} yrs old`, 'COLOR', aboutMe.rcolor, 'FOOD', aboutMe.rfood, 'ANIMAL', aboutMe.ranimal, 'TALENT', aboutMe.rtalent])
        setAll(true)
        setTrending(false)
    }
};
function trendingBtn() {
    // loadMore('Todays List')
    if (!aboutPet) {
        setMeInfo(['NAME', '', 'AGE', '', 'COLOR', '', 'FOOD', '', 'ANIMAL', '', 'TALENT', ''])
        setAll(false)
        setTrending(true)
    } else {
        setMeInfo(['NAME', aboutPet.rname, 'AGE', `${aboutPet.rage} yrs old`, 'COLOR', aboutPet.rcolor, 'FOOD', aboutPet.rfood, 'ANIMAL', aboutPet.ranimal, 'TALENT', aboutPet.rtalent])
        setAll(false)
        setTrending(true)
    }
}
    return (
        <nav className='topNav-main-container' style={{display: disp ? 'flex' : 'none', justifyContent: 'center'}}>
            <button className='topNav-btns' type='button' value='all' onClick={getVideos} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey', width: '45%'}}>Me</button>
            <button className='topNav-btns' type='button' value='all' onClick={trendingBtn} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey', width: '45%'}}>My Bot</button>
        </nav> 
    )
}

export default TopNav8