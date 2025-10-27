import { landingPageHooks } from '../hooks/landing-pageHooks'
import '../styles/landing.css'

function Landing() {
    const landingHooks = landingPageHooks()
    const lname = landingHooks.lname
    const setLname = landingHooks.setLname
    const lAlert = landingHooks.lAlert
    const setLAlert = landingHooks.setLAlert

    const enter = () => {
        const cached = JSON.parse(sessionStorage.getItem('Me'))
        if (!cached) {
            const me = {rname: lname, rage: null, rcolor: null, rfood: null, ranimal: null, rtalent: null}
            sessionStorage.setItem('Me', JSON.stringify(me))
        } else {
            if (cached.rname === lname.trim()) {
                window.location.href = '/home'
            } else {
                setLAlert('Try Again')
            }
        }
    }
    return ( 
        <article className='landing-page-container'>
            <h1 className='landing-title'>WETUBE.COM</h1>
            <p className='landing-info'>{lAlert}</p>
            <input className='landing-input' type='text' value={lname} onChange={(e) => setLname(e.target.value)}></input>
            <button className='landing-btn' type='button' onClick={enter}>enter</button>
            <p className='landing-info2'>An all-in-one website for kids learning and entertainment.</p>
            <p className='landing-info3'>Makes learning fun facts and new languages super fun.</p>
            <p className='landing-info4'>Simplifying kid friendly gaming, videos and music at its finest.</p>
        </article>
    )
}

export default Landing