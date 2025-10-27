import { storiesBookHook } from '../hooks/homepageHooks'
import '../styles/gw.css'

function GwCard({gw, setGw, gwGuess, setMoons, setGwGuess, gwAns, gwHint, setGwHint, translateList, setTranslateList}) {
    const cached = JSON.parse(localStorage.getItem('Translated Words'))

    const popupHooks = storiesBookHook()
    const gwTitle = popupHooks.gwTitle
    const setGwTitle = popupHooks.setGwTitle

    function closeGwPopup() {
        setGw(false)
        setGwHint(false)
    }
    function getRandomItems(arr, n) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }
    function checkGuess(e) {
        const guess = String(gwGuess.trim())
        const answer = String(gwAns.trim())
        if (guess !== answer) {
            setGwTitle('WRONG GUESS TRY AGAIN')
            setGwGuess('')
        } else {
            setGwTitle('WOOHOO! CORRECT!!')
            const randomReplacement = getRandomItems(cached.words, 1)[0];
            let replaced = false;
            const updatedList = translateList.map(item => {
            if (!replaced && item.translated === gwAns) {
                replaced = true;
                return randomReplacement;
            }
            return item;
            });
            setTranslateList(updatedList)
            setMoons((prev) => prev + 1)
            setGwGuess('')
            setTimeout(() => {
                setGw(false)
                setGwTitle('GUESS THE WORD IN THE PICTURE')
            }, 3000)
        }

    }
    return (
        <article className='gwCard-main-container' style={{display: gw ? 'flex' : 'none'}}>
            <button className='exit-button' type='button' onClick={closeGwPopup} >X</button>
            <h3 className='gw-popup'>{gwTitle}</h3>
            <input className='gw-popup-input' type='text' value={gwGuess} onChange={(e) => setGwGuess(e.target.value)} placeholder='type your guess here'></input>
            <button className='gw-popup-btns' type='button' value={gwAns} onClick={checkGuess}>enter guess</button>
            <button className='gw-popup-btns' type='button' onClick={() => setGwHint(true)}>get hint</button>
            <p className='ans-hint' style={{display: gwHint ? 'flex' : 'none'}}>{gwAns}</p>
        </article>
    )
}

export default GwCard 