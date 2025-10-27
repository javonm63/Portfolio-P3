import '../styles/statCard.css'

function StatCard({statIcon, stat, statNum, statTitle}) {
    return (
        <div className='statCard-main-container'>
            <img className='stat-icon' src={statIcon} alt={`${stat} icon`}></img>
            <p className='myL-stat'>{String(statNum)}</p>
            <p className='myL-stat-title'>{statTitle}</p>
        </div>
    )
}

export default StatCard