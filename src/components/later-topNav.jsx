import '../styles/topNav.css'
import { fetchTranslates, generateWords } from '../services/loadTranslate';

function TopNav6({setTranslateList, all, setAll, trending, setTrending, disp}) {

    const cached = JSON.parse(localStorage.getItem('Translated Words'));
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const WORDS = generateWords()
    function getVideos() {
        if (!cached) {
            fetchTranslates(setTranslateList, WORDS);
            setAll(true)
            setTrending(false)
        } else {
            const age = now - cached.savedAt;
            if (age > oneDay) {
                fetchTranslates(setTranslateList, WORDS);
                setAll(true)
                setTrending(false)
            } else {
                setTranslateList(cached.words.slice(0, 12));
                setAll(true)
                setTrending(false)
            }
        }
    }; 

    function trendingBtn() {
        setAll(false)
        setTrending(true)
    }
    return (
        <nav className='topNav-main-container' style={{display: disp ? 'flex' : 'none', justifyContent: 'center'}}>
            <button className='topNav-btns' type='button' value='all' onClick={getVideos} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey', width: '50%'}}>Guess The Word</button>
            <button className='topNav-btns' type='button' value='all' onClick={trendingBtn} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey', width: '50%'}}>Spell The Word</button>
        </nav> 
    )
}

export default TopNav6