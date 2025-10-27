import WatchCard from '../components/watchCard'
import '../styles/watchPage.css'

function WatchPage({disp, video}) {
    return (
        <div className='watchpage-main-container' style={{display: disp ? 'flex' : 'none'}}>
            <WatchCard disp={disp} video={video}/>
        </div>
    )
}

export default WatchPage