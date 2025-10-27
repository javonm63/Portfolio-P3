import '../styles/topNav.css'

function TopNav9({disp, trending}) {

    return (
        <div className='topNav-main-container' style={{display: disp ? 'flex' : 'none', justifyContent: 'center'}}>
            <button className='topNav-btns' type='button' value='all' style={{backgroundColor: trending ? 'rgb(184, 184, 184)' : 'grey', width: '90%'}}></button>
        </div> 
    )
}

export default TopNav9