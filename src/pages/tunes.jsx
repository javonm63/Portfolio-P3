import '../styles/tunes.css'

function Tunes({tunes, all, cartoons, trending, tunesList, expTunesList, myTunesList}) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = '0.750'
    return (
        <article className='tunes-page-container' style={{display: tunes ? 'flex' : 'none'}}>
            <section className='new-tunes-container' style={{display: all ? 'grid' : 'none'}}>   
                {tunesList && tunesList.map((tune, i) => (
                <div key={i} className='spot-player-container' style={{backgroundColor: `rgb(${r}, ${g}, ${b}, ${a})`}}>
                    <iframe className='spot-Player' src={`https://open.spotify.com/embed/track/${tune}?utm_source=generator`} style={{ borderRadius: "12px", height: '10vh', border: 'none'}} width='90%' allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading='lazy'></iframe>
                </div>
                ))}
            </section>
            <section className='explore-tunes-container' style={{display: cartoons ? 'grid' : 'none'}}>
                {expTunesList && expTunesList.map((tune, i) => (
                <div key={i} className='spot-player-container' style={{backgroundColor: `rgb(${r}, ${g}, ${b}, ${a})`}}>
                    <iframe className='spot-Player' src={`https://open.spotify.com/embed/track/${tune}?utm_source=generator`} style={{ borderRadius: "12px", height: '10vh', border: 'none'}} width='90%' allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading='lazy'></iframe>
                </div>
                ))}
            </section>
            <section className='my-tunes-container' style={{display: trending ? 'grid' : 'none'}}>
                {myTunesList && myTunesList.map((tune, i) => (
                <div key={i} className='spot-player-container' style={{backgroundColor: `rgb(${r}, ${g}, ${b}, ${a})`}}>
                    <iframe className='spot-Player' src={`https://open.spotify.com/embed/track/${tune}?utm_source=generator`} style={{ borderRadius: "12px", height: '10vh', border: 'none'}} width='90%' allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading='lazy'></iframe>
                </div>
                ))}
            </section>
        </article>
    )
}

export default Tunes