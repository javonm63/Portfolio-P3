import { storiesBookHook } from '../hooks/homepageHooks'
import '../styles/games.css'

function Games({disp, setDisp, disp2, setDisp2, gamesList, setGameSrc}) {

    const loadGame = (e) => {
        setDisp2(true)
        setDisp(false)
        setGameSrc(e.target.value)
    }
    return (
        <article className='games-page-container' style={{display: disp ? 'grid' : 'none'}}>
            { gamesList && gamesList.map((game, i) => (
                <section key={i} className='gameslCard-main-container' style={{display: disp ? 'flex' : 'none', backgroundImage: `url(${game.image})`, backgroundSize: 'contain'}}>
                    <p className='gamesCard-title'>{game.title}</p>
                    <button className='gamesCard-info' value={game.embed} onClick={loadGame}>play</button>
                </section>
            ))}
        </article>
    )
}

export default Games