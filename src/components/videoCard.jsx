import '../styles/videoCard.css'

function VideoCard({thumbnailSrc, videoId, videoTitle, creator, when, disp, setPg, setVidId, descript}) {
    function showWatchPage(e) {
        disp(true)
        setPg(false)
        setVidId({id: e.target.dataset.value, title: e.target.dataset.id, descript: descript})
    }
    return (
        <section className='videoCard-main-container'>
            <img className='videoCard-thumbnail' src={thumbnailSrc} alt='video thumbnail' data-value={videoId} data-id={videoTitle} onClick={showWatchPage}></img>
            <section className='videoCard-bottom-container'>
                <div className='videoCard-text-container'>
                    <h3 className='videoCard-title'>{videoTitle}</h3>
                    <p className='videoCard-Creator'>{`posted by: ${creator}`}</p>
                    <p className='videoCard-more-info'>{`posted on: ${when}`}</p>
                </div>
                <img className='video-options-icon' src='/options-icon.png' alt='option icon'></img>
            </section>
        </section>
    )
}

export default VideoCard 