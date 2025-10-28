import '../styles/sideNav.css'
import { fetchAnimalsFacts, generateAnimalWords } from '../services/loadFacts'
import { getKidsMusic } from '../services/loadTunes'
import { fetchTranslates, generateWords } from '../services/loadTranslate'

function SideNav({setAll, setGaming, setMeInfo, setCrafts, setTrending, setCartoons, setCardList, setFactsList, setGameList, setTranslateList, setTunesList, setCategory, setWatchVid, pg, setPg, expl, setExpl, myL, setMyL, stories, setStories, later, setLater, tunes, setTunes, games, setGames, me, setMe, sett, setSettings, spotToken}) {
    function goToPg() {
        setPg(true)
        setExpl(false)
        setMyL(false)
        setStories(false)
        setLater(false)
        setTunes(false)
        setGames(false)
        setMe(false)
        setSettings(false)
        setFactsList(false)
        setWatchVid(false)
        setGaming(false)
    }
    function goToExpl() {
        setPg(false)
        setExpl(true)
        setMyL(false)
        setStories(false)
        setLater(false)
        setTunes(false)
        setGames(false)
        setMe(false)
        setWatchVid(false)
        setGaming(false)
        setSettings(false)
        const cached = JSON.parse(localStorage.getItem('Animal Facts'));
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000
        const foods = generateAnimalWords()
        const ani = foods.animals
        if (!cached) {
            fetchAnimalsFacts(setFactsList, ani);
            setAll(true)
        } else {
            const age = now - cached.savedAt;
            if (age > oneDay) {
                fetchAnimalsFacts(setFactsList, ani);
                setAll(true)
            } else {
                setFactsList(cached.facts); 
                setCategory('Animal Facts')
                setAll(true)
            }
        }
    }
    function goToMyL() {
        setPg(false)
        setExpl(false)
        setMyL(true)
        setStories(false)
        setLater(false)
        setTunes(false)
        setGames(false)
        setMe(false)
        setWatchVid(false)
        setFactsList(false)
        setGaming(false)
        setSettings(false)
    }
    function goToStories() {
        setPg(false)
        setExpl(false)
        setMyL(false)
        setStories(true)
        setLater(false)
        setTunes(false)
        setGames(false)
        setMe(false)
        setWatchVid(false)
        setFactsList(false)
        setGaming(false)
        setSettings(false)
    }
    function goToLater() {
        const cached = JSON.parse(localStorage.getItem('Translated Words'));
        const oneDay = 24 * 60 * 60 * 1000;
        const now = Date.now();
        const WORDS = generateWords()
        setPg(false)
        setExpl(false)
        setMyL(false)
        setStories(false)
        setLater(true)
        setTunes(false)
        setGames(false)
        setMe(false)
        setWatchVid(false)
        setFactsList(false)
        setGaming(false)
        setSettings(false)
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
    }
    function goToTunes() {
        const cached = JSON.parse(sessionStorage.getItem('New Tunes'));
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        setPg(false)
        setExpl(false)
        setMyL(false)
        setStories(false)
        setLater(false)
        setTunes(true)
        setGames(false)
        setMe(false)
        setWatchVid(false)
        setFactsList(false)
        setGaming(false)
        setSettings(false)
        if (!cached) {
                getKidsMusic(spotToken, setTunesList);
                setAll(true)
                setCartoons(false)
                setTrending(false)
            } else {
                const age = now - cached.savedAt;
                if (age > oneDay) {
                    getKidsMusic(spotToken, setTunesList);
                    setAll(true)
                    setCartoons(false)
                    setTrending(false)
                } else {
                    setTunesList(cached.slice(0, 12)); 
                    setCategory('New Tunes')
                    setAll(true)
                    setCartoons(false)
                    setTrending(false)
                }
            }
    }
    function goToGames() {
        const cached = JSON.parse(localStorage.getItem('Sports Games'))
        setPg(false)
        setExpl(false)
        setMyL(false)
        setStories(false)
        setLater(false)
        setTunes(false)
        setGames(true)
        setMe(false)
        setWatchVid(false)
        setFactsList(false)
        setSettings(false)
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
    }
    function goToMe() {
        setPg(false)
        setExpl(false)
        setMyL(false)
        setStories(false)
        setLater(false)
        setTunes(false)
        setGames(false)
        setMe(true)
        setWatchVid(false)
        setFactsList(false)
        setGaming(false)
        setSettings(false)
        const aboutMe = JSON.parse(sessionStorage.getItem('Me'));
        if (!aboutMe) {
            setMeInfo(['NAME', '', 'AGE', '', 'COLOR', '', 'FOOD', '', 'ANIMAL', '', 'TALENT', ''])
            setAll(true)
            setTrending(false)
        } else {
            setMeInfo(['NAME', aboutMe.rname, 'AGE', `${aboutMe.rage} yrs old`, 'COLOR', aboutMe.rcolor, 'FOOD', aboutMe.rfood, 'ANIMAL', aboutMe.ranimal, 'TALENT', aboutMe.rtalent])
            setAll(true)
            setTrending(false)
        }
    }
    function goToSett() {
        setPg(false)
        setExpl(false)
        setMyL(false)
        setStories(false)
        setLater(false)
        setTunes(false)
        setGames(false)
        setMe(false)
        setWatchVid(false)
        setFactsList(false)
        setGaming(false)
        setSettings(true)
    }
    return (
        <div className='sideNav-main-container'>
            <section className='sideNav-icons-container'>
                <img className='sideNav-icons' src='/playground-icon.webp' alt='playground icon' style={{backgroundColor: pg ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToPg}></img>
                <img className='sideNav-icons' src='/explore-icon.png' alt='explore icon' style={{backgroundColor: expl ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToExpl}></img>
                <img className='sideNav-icons' src='/mylist-icon.webp' alt='my list icon' style={{backgroundColor: myL ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToMyL}></img>
                <img className='sideNav-icons' src='/stories-icon.png' alt='stories icon' style={{backgroundColor: stories ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToStories}></img>
                <img className='sideNav-icons' src='/language-icon.png' alt='watch later icon' style={{backgroundColor: later ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToLater}></img>
                <img className='sideNav-icons' src='/funTune-icon.png' alt='fun tunes icon' style={{backgroundColor: tunes ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToTunes}></img>
                <img className='sideNav-icons' src='/games-icon.png' alt='games icon' style={{backgroundColor: games ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToGames}></img>
                <img className='sideNav-icons' src='/me-icon.webp' alt='my profile icon' style={{backgroundColor: me ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToMe}></img>
                <img className='sideNav-icons' src='/settings-icon.png' alt='settings icon' style={{backgroundColor: sett ? 'rgba(112, 112, 112, 0.41)' : 'rgba(176, 39, 1, 0)', borderRadius: '5px'}} onClick={goToSett}></img>
            </section>
            <section className='sideNav-options-container'>
                <button className='sideNav-options' style={{color: pg ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToPg}>PlayGround</button>
                <button className='sideNav-options' style={{color: expl ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToExpl}>Explore</button>
                <button className='sideNav-options' style={{color: myL ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToMyL}>My List</button>
                <button className='sideNav-options' style={{color: stories ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToStories}>Stories</button>
                <button className='sideNav-options' style={{color: later ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToLater}>Language</button>
                <button className='sideNav-options' style={{color: tunes ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToTunes}>Fun Tunes</button>
                <button className='sideNav-options' style={{color: games ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToGames}>Games</button>
                <button className='sideNav-options' style={{color: me ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToMe}>Me</button>
                <button className='sideNav-options' style={{color: sett ? 'rgba(176, 39, 1, 0.756)' : 'black'}} onClick={goToSett}>Settings</button>
            </section>
            <div className="confetti">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
            </div>
        </div>
    )
}

export default SideNav