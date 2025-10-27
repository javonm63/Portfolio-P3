import GwCard from '../components/gw'
import { storiesBookHook } from '../hooks/homepageHooks'
import '../styles/translate.css'

function Translate({disp, all, trending, translateList, setTranslateList, setMoons}) {
    const transltHook = storiesBookHook()
    const gw = transltHook.gw
    const setGw = transltHook.setGw
    const gwAns = transltHook.gwAns
    const setGwAns = transltHook.setGwAns
    const gwGuess = transltHook.gwGuess
    const setGwGuess = transltHook.setGwGuess
    const gwHint = transltHook.gwHint
    const setGwHint = transltHook.setGwHint
    const sw = transltHook.sw
    const setSw = transltHook.setSw
    const swAns = transltHook.swAns
    const setSwAns = transltHook.setSwAns
    const swGuess = transltHook.swGuess
    const setSwGuess = transltHook.setSwGuess

    function showGwPopUp(e) {
        setGw(true)
        setGwAns(e.target.value)
    }
    return (
        <article className='translate-main-container' style={{display: disp ? 'flex' : 'none'}}>
            <section className='pictureGrid-container' style={{display: all ? 'grid' : 'none'}}>   
            {translateList && translateList.map((tune, i) => (
            <button key={i} className='t-picture-container' value={tune.translated} style={{backgroundImage: `url(${tune.imageUrl})`}} onClick={showGwPopUp}>

            </button>
            ))} 
            </section>
            <section className='pictureGrid2-container' style={{display: trending ? 'grid' : 'none'}}>   
            {translateList && translateList.map((tune, i) => (
            <button key={i} className='t-picture-container' value={tune.translated} onClick={showGwPopUp}>
                {tune.word}
            </button>
            ))} 
            </section>
            <GwCard gw={gw} setGw={setGw} setMoons={setMoons} gwGuess={gwGuess} setGwGuess={setGwGuess} gwAns={gwAns} gwHint={gwHint} setGwHint={setGwHint} translateList={translateList} setTranslateList={setTranslateList}/>
        </article>
    )
}

export default Translate