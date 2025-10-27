function GamePlayer({disp2, setDisp, setDisp2, gameSrc, setGameSrc}) {
    function closePlayer() {
        setDisp(true)
        setDisp2(false)
        setGameSrc(null)
    }
    return (
        <article className='game-player-main-container' style={{display: disp2 ? 'flex' : 'none'}}>
            <button className="exit-button" type="button" onClick={closePlayer}>X</button>
            <iframe
                width="800"
                height="600"
                src={gameSrc}
                allowFullScreen
            ></iframe>
        </article>
    )
}

export default GamePlayer