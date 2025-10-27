import '../styles/watchCard.css'
import { useEffect, useRef } from 'react';

function WatchCard({disp, video}) {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (!disp && iframeRef.current) {
            const iframe = iframeRef.current;
            const currentSrc = iframe.src;
            iframe.src = currentSrc; 
        }
    }, [disp]);
    return (
        <article className='watchCard-main-container' style={{display: disp ? 'flex' : 'none'}}>
            <iframe ref={iframeRef} className='video-player' src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
            <div className='video-info-card'>
                <h3 className='watch-video-title'>{video.title}</h3>
            </div>
            <div className='video-sub-container'>
                <p className='video-descript'>WHAT'S HAPPENING IN THE VIDEO</p>
                <p className='video-whats-happening'>{video.descript}</p>
            </div>
        </article>
    )
}

export default WatchCard