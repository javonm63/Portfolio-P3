import '../styles/topNav.css'
import { fetchAnimalsFacts, fetchSpaceFacts, fetchWorldFacts, fetchFoodFacts, fetchArtFacts, fetchKindnessFacts, fetchHistoryFacts, fetchColorFacts, generateWords, generateRandomYears } from '../services/loadFacts';
import { topNavCatHook } from '../hooks/homepageHooks';

function TopNav2({setResizeFacts, setShowSpace, expl, loadMore, setCardList, setCategory, all, setAll}) {
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
    const history = tpHooks.history
    const setHistory = tpHooks.setHistory

    const cached = JSON.parse(localStorage.getItem('Animal Facts'));
    const cached8 = JSON.parse(localStorage.getItem('Space Facts'));
    const cached2 = JSON.parse(localStorage.getItem('World Facts'));
    const cached4 = JSON.parse(localStorage.getItem('Food Facts'));
    const cached5 = JSON.parse(localStorage.getItem('Art Facts'));
    const cached6 = JSON.parse(localStorage.getItem('Color Facts'));
    const cached7 = JSON.parse(localStorage.getItem('Kindness Facts'));
    const cached3 = JSON.parse(localStorage.getItem('History Facts'));
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const foods = generateWords() 
    const worldf = foods.countries
    const ani = foods.animals
function getAnimals() {
    if (!cached) {
        fetchAnimalsFacts(setCardList, ani);
        setAll(true)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
        setShowSpace('animals')
        setResizeFacts(false)
    } else {
        const age = now - cached.savedAt;
        if (age > oneDay) {
            fetchAnimalsFacts(setCardList, ani);
            setAll(true)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setShowSpace('animals')
            setResizeFacts(false)
        } else {
            setCardList(cached.facts); 
            setCategory('Animal Facts')
            setAll(true)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setShowSpace('animals')
            setResizeFacts(false)
        }
    }
}; 
function getFood() {
    if (!cached4) {
        fetchFoodFacts(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(true)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
        setShowSpace('foods')
        setResizeFacts(true)
    } else {
        const age = now - cached4.savedAt;
        if (age > oneDay) {
            fetchFoodFacts(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(true)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setShowSpace('foods')
            setResizeFacts(true)
        } else {
            setCardList(cached4.facts); 
            setCategory('Food Facts')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(true)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setShowSpace('foods')
            setResizeFacts(true)
        }
    }
}
function getWorld() {
    if (!cached2) {
        fetchWorldFacts(setCardList, worldf);
        setAll(false)
        setTrending(false)
        setCartoons(true)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
        setShowSpace('world')
        setResizeFacts(true)
    } else {
        const age = now - cached2.savedAt;
        if (age > oneDay) {
            fetchWorldFacts(setCardList, worldf);
            setAll(false)
            setTrending(false)
            setCartoons(true)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setShowSpace('world')
            setResizeFacts(true)
        } else {
            setCardList(cached2.facts); 
            setCategory('World Facts')
            setAll(false)
            setTrending(false)
            setCartoons(true)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setShowSpace('world')
            setResizeFacts(true)
        }
    }
}
function getArt() {
    if (!cached5) {
        fetchArtFacts(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(true)
        setLearning(false)
        setSongs(false)
        setShowSpace('art')
        setResizeFacts(true)
    } else {
        const age = now - cached5.savedAt;
        if (age > oneDay) {
            fetchArtFacts(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(true)
            setLearning(false)
            setSongs(false)
            setShowSpace('art')
            setResizeFacts(true)
        } else {
            setCardList(cached5.facts); 
            setCategory('Art Facts')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(true)
            setLearning(false)
            setSongs(false)
            setShowSpace('art')
            setResizeFacts(true)
        }
    }
}
function getColor() {
    if (!cached6) {
        fetchColorFacts(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(true)
        setSongs(false)
        setShowSpace('colors')
        setResizeFacts(false)
    } else {
        const age = now - cached6.savedAt;
        if (age > oneDay) {
            fetchColorFacts(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(true)
            setSongs(false)
            setShowSpace('colors')
            setResizeFacts(false)
        } else {
            setCardList(cached6.facts.slice(0, 12)); 
            setCategory('Color Facts')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(true)
            setSongs(false)
            setShowSpace('colors')
            setResizeFacts(false)
        }
    }
}
function getKindness() {
    if (!cached7) {
        fetchKindnessFacts(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(true)
        setShowSpace('kindness')
        setResizeFacts(true)
    } else {
        const age = now - cached7.savedAt;
        if (age > oneDay) {
            fetchKindnessFacts(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(true)
            setShowSpace('kindness')
            setResizeFacts(true)
        } else {
            setCardList(cached7.facts); 
            setCategory('Kindness Facts')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(true)
            setShowSpace('kindness')
            setResizeFacts(true)
        }
    }
}
function getHistory() {
    if (!cached3) {
        fetchHistoryFacts(setCardList);
        setAll(false)
        setTrending(false)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
        setHistory(true)
        setShowSpace('history')
        setResizeFacts(true)
    } else {
        const age = now - cached3.savedAt;
        if (age > oneDay) {
            fetchHistoryFacts(setCardList);
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setHistory(true)
            setShowSpace('history')
            setResizeFacts(true)
        } else {
            setCardList(cached3.facts.slice(0, 12)); 
            setCategory('History Facts')
            setAll(false)
            setTrending(false)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setHistory(true)
            setShowSpace('history')
            setResizeFacts(true)
        }
    }
}
function getSpace() {
    if (!cached8) {
        fetchSpaceFacts(setCardList);
        setAll(false)
        setTrending(true)
        setCartoons(false)
        setCrafts(false)
        setAnimals(false)
        setLearning(false)
        setSongs(false)
        setHistory(false)
        setShowSpace('space')
        setResizeFacts(true)
    } else {
        const age = now - cached8.savedAt;
        if (age > oneDay) {
            fetchSpaceFacts(setCardList);
            setAll(false)
            setTrending(true)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setHistory(false)
            setShowSpace('space')
            setResizeFacts(true)
        } else {
            setCardList(cached8.facts); 
            setCategory('Space Facts')
            setAll(false)
            setTrending(true)
            setCartoons(false)
            setCrafts(false)
            setAnimals(false)
            setLearning(false)
            setSongs(false)
            setHistory(false)
            setShowSpace('space')
            setResizeFacts(true)
        }
    }
}
    return (
        <nav className='topNav-main-container' style={{display: expl ? 'flex' : 'none'}}>
            <button className='topNav-btns' type='button' value='all' onClick={getAnimals} style={{backgroundColor: all ? 'rgb(184, 184, 184)' : 'grey'}}>Animals</button>
            <button className='topNav-btns' type='button' value='all' onClick={getSpace} style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey'}}>Space</button>
            <button className='topNav-btns' type='button' value='cartoons' onClick={getWorld} style={{backgroundColor: cartoons ? 'rgb(184, 184, 184)' : 'grey'}}>World</button>
            <button className='topNav-btns' type='button' value='crafts' onClick={getFood} style={{backgroundColor: crafts ? 'rgb(184, 184, 184)' : 'grey'}}>Food</button>
            <button className='topNav-btns' type='button' value='animals' onClick={getArt} style={{backgroundColor: animals ? 'rgb(184, 184, 184)' : 'grey'}}>Art</button>
            <button className='topNav-btns' type='button' value='learning' onClick={getColor} style={{backgroundColor: learning ? 'rgb(184, 184, 184)' : 'grey'}}>Color</button>
            <button className='topNav-btns' type='button' value='Songs' onClick={getKindness} style={{backgroundColor: songs ? 'rgb(184, 184, 184)' : 'grey'}}>Kindness</button>
            <button className='topNav-btns' type='button' onClick={getHistory}>History</button>
        </nav> 
    )
}

export default TopNav2