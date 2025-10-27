import { settingsPageHooks } from '../hooks/homepageHooks'
import '../styles/settings.css'
import ToggleButton from '../utils/toggle-btn'
import VolumeSlider from '../utils/volumeSlider'

function Settings({disp}) {
    const settingsHooks = settingsPageHooks()
    const todoSett = settingsHooks.todoSett
    const setTodoSett = settingsHooks.setTodoSett
    const learningSett = settingsHooks.learningSett
    const setLearningSett = settingsHooks.setLearningSett
    const gamingSett = settingsHooks.gamingSett
    const setGamingSett = settingsHooks.setGamingSett
    const appSett = settingsHooks.appSett
    const setAppSett = settingsHooks.setAppSett
    const qotd = settingsHooks.qotd
    const setQotd = settingsHooks.setQotd
    const rL = settingsHooks.rL
    const setRL = settingsHooks.setRL
    const langL = settingsHooks.langL
    const setLangL = settingsHooks.setLangL
    const learnL = settingsHooks.learnL
    const setLearnL = settingsHooks.setLearnL
    const refL = settingsHooks.refL
    const setRefL = settingsHooks.setRefL
    const gameB = settingsHooks.gameB
    const setGameB = settingsHooks.setGameB
    const tdBg = settingsHooks.tdBg
    const setTdBg = settingsHooks.setTdBg
    const tBg = settingsHooks.tBg
    const setTBg = settingsHooks.setTBg
    const pBg = settingsHooks.pBg
    const setPBg= settingsHooks.setPBg
    
    const todoSettings = () => {
        setTodoSett(true)
        setAppSett(false)
        setLearningSett(false)
        setGamingSett(false)
    }
    const learningSettings = () => {
        setTodoSett(false)
        setAppSett(false)
        setLearningSett(true)
        setGamingSett(false)
    }
    const gamingSettings = () => {
        setTodoSett(false)
        setAppSett(false)
        setLearningSett(false)
        setGamingSett(true)
    }
    const appSettings = () => {
        setTodoSett(false)
        setAppSett(true)
        setLearningSett(false)
        setGamingSett(false)
    }
    const animationsToggle = (isOn) => {
        const cached = JSON.parse(sessionStorage.getItem('App Settings'))
        if (!cached) {
            sessionStorage.setItem('App Settings', JSON.stringify({animations: isOn, btnSounds: null, bckgrndMusic: null, musicVol: 50, tdB: 'default', tB: 'default', pB: 'default'}))
        } else {
            cached.animations = isOn
            sessionStorage.setItem('App Settings', JSON.stringify(cached))
        }
    };
    const btnSoundToggle = (isOn) => {
        const cached = JSON.parse(sessionStorage.getItem('App Settings'))
        if (!cached) {
            sessionStorage.setItem('App Settings', JSON.stringify({animations: null, btnSounds: isOn, bckgrndMusic: null, musicVol: 50, tdB: 'default', tB: 'default', pB: 'default'}))
        } else {
            cached.btnSounds = isOn
            sessionStorage.setItem('App Settings', JSON.stringify(cached))
        }
    };
    const backgrndSoundToggle = (isOn) => {
        const cached = JSON.parse(sessionStorage.getItem('App Settings'))
        if (!cached) {
            sessionStorage.setItem('App Settings', JSON.stringify({animations: null, btnSounds: null, bckgrndMusic: isOn, musicVol: 50, tdB: 'default', tB: 'default', pB: 'default'}))
        } else {
            cached.bckgrndMusic = isOn
            sessionStorage.setItem('App Settings', JSON.stringify(cached))
        }
    };
    const handleVolumeChange = (value) => {
        const cached = JSON.parse(sessionStorage.getItem('App Settings'))
        if (!cached) {
            sessionStorage.setItem('App Settings', JSON.stringify({animations: null, btnSounds: null, bckgrndMusic: null, musicVol: 50, tdB: 'default', tB: 'default', pB: 'default'}))
        } else {
            cached.musicVol = value
            sessionStorage.setItem('App Settings', JSON.stringify(cached))
        }
    };

    const clearTodoList = () => {
        sessionStorage.setItem('Completed Tasks', JSON.stringify([]))
        sessionStorage.setItem('Todo Tasks', JSON.stringify([]))
    }
    const resetProgress = () => {
        sessionStorage.setItem('User Progress', JSON.stringify([]))
    }
    const quoteOfTheDay = (e) => {
        sessionStorage.setItem('QOTD', JSON.stringify({QOTD: e.target.value}))
    }
    const readingLevel = (e) => {
        sessionStorage.setItem('Reading Level', JSON.stringify({reading: e.target.value || 'elementary'}))
    }
    const languageLevel = (e) => {
        sessionStorage.setItem('Language Level', JSON.stringify({langL: e.target.value || 'beginner'}))
    }
    const learningLang = (e) => {
        sessionStorage.setItem('Learning Language', JSON.stringify({learnL: e.target.value || 'es'}))
    }
    const reflectionsSettings = (e) => {
        sessionStorage.setItem('Reflection Settings', JSON.stringify({reflection: e.target.value || 'weekly'}))
    }
    const gameBreak = (e) => {
        sessionStorage.setItem('Game Break', JSON.stringify({break: e.target.value || '1 hr'}))
    }
    const tdBgSettings = (e) => {
        const cached = JSON.parse(sessionStorage.getItem('App Settings'))
        if (!cached) {
            sessionStorage.setItem('App Settings', JSON.stringify({animations: null, btnSounds: null, bckgrndMusic: null, musicVol: 50, tdB: e.target.value, tB: 'default', pB: 'default'}))
        } else {
            cached.tdB = e.target.value
            sessionStorage.setItem('App Settings', JSON.stringify(cached))
        }
    }
    const tBgSettings = (e) => {
        const cached = JSON.parse(sessionStorage.getItem('App Settings'))
        if (!cached) {
            sessionStorage.setItem('App Settings', JSON.stringify({animations: null, btnSounds: null, bckgrndMusic: null, musicVol: 50, tdB: 'default', tB: e.target.value, pB: 'default'}))
        } else {
            cached.tB = e.target.value
            sessionStorage.setItem('App Settings', JSON.stringify(cached))
        }
    }
    const pBgSettings = (e) => {
        const cached = JSON.parse(sessionStorage.getItem('App Settings'))
        if (!cached) {
            sessionStorage.setItem('App Settings', JSON.stringify({animations: null, btnSounds: null, bckgrndMusic: null, musicVol: 50, tdB: 'default', tB: 'default', pB: e.target.value}))
        } else {
            cached.pB = e.target.value
            sessionStorage.setItem('App Settings', JSON.stringify(cached))
        }
    }

    return (
        <article className='settings-page-container' style={{display: disp ? 'flex' : 'none'}}>
            <section className='settings-sett-container'>
                <div className='settings-window'>
                    <h3 className='settings-titles'>SETTINGS</h3>
                    <button className='settings' type='button' style={{color: todoSett ? 'rgba(0, 0, 0, 0.503)' : 'rgba(0, 0, 0, 0.37)'}} onClick={todoSettings}>Todo List</button>
                    <button className='settings' type='button' style={{color: learningSett ? 'rgba(0, 0, 0, 0.503)' : 'rgba(0, 0, 0, 0.37)'}} onClick={learningSettings}>Learning</button>
                    <button className='settings' type='button' style={{color: gamingSett ? 'rgba(0, 0, 0, 0.503)' : 'rgba(0, 0, 0, 0.37)'}} onClick={gamingSettings}>Gaming</button>
                    <button className='settings' type='button' style={{color: appSett ? 'rgba(0, 0, 0, 0.503)' : 'rgba(0, 0, 0, 0.37)'}} onClick={appSettings}>App Settings</button>
                </div>
            </section>
            <section className='settings-sett-opts-container'>
                <section className='settings-opt-window' style={{display: todoSett ? 'flex' : 'none'}}>
                    <h3 className='settings-titles'>TODO SETTINGS</h3>
                    <button className='settings-btns' type='button' onClick={clearTodoList}>clear todo list</button>
                    <button className='settings-btns' type='button' onClick={resetProgress}>reset progess</button>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>quote of the day</label>
                    <select className='settings-dropdown' onChange={(e) => setQotd(e.target.value)}>
                        <option className='settings-drop-opts' value='motivational' >motivational</option>
                        <option className='settings-drop-opts' value='funny'>funny</option>
                        <option className='settings-drop-opts' value='kindness'>kindness</option>
                        <option className='settings-drop-opts' value='random'>random</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={qotd} onClick={quoteOfTheDay}>change</button>
                </section>
                <section className='settings-opt-window' style={{display: learningSett ? 'flex' : 'none'}}>
                    <h3 className='settings-titles'>LEARNING SETTINGS</h3>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Reading Level</label>
                    <select className='settings-dropdown' onChange={(e) => setRL(e.target.value)}>
                        <option className='settings-drop-opts' value='elementary'>k-5</option>
                        <option className='settings-drop-opts' value='preK'>preschool</option>
                        <option className='settings-drop-opts' value='middle'>6-8grade</option>
                        <option className='settings-drop-opts' value='high'>9-12grade</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={rL} onClick={readingLevel}>change</button>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Language Level</label>
                    <select className='settings-dropdown' onChange={(e) => setLangL(e.target.value)}>
                        <option className='settings-drop-opts' value='beginner' defaultChecked>beginner</option>
                        <option className='settings-drop-opts' value='practicing'>practing</option>
                        <option className='settings-drop-opts' value='intermediater'>intermediate</option>
                        <option className='settings-drop-opts' value='fluent'>fluent</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={langL} onClick={languageLevel}>change</button>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Learning Language</label>
                    <select className='settings-dropdown' onChange={(e) => setLearnL(e.target.value)}>
                        <option className='settings-drop-opts' value='es' defaultChecked>spanish</option>
                        <option className='settings-drop-opts' value='kr'>korean</option>
                        <option className='settings-drop-opts' value='fr'>french</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={learnL} onClick={learningLang}>change</button>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Reflections</label>
                    <select className='settings-dropdown' onChange={(e) => setRefL(e.target.value)}>
                        <option className='settings-drop-opts' value='weekly' defaultChecked>weekly</option>
                        <option className='settings-drop-opts' value='daily'>daily</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={refL} onClick={reflectionsSettings}>change</button>
                </section>
                <section className='settings-opt-window' style={{display: gamingSett ? 'flex' : 'none'}}>
                    <h3 className='settings-titles'>GAMING SETTINGS</h3>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Set Game Break</label>
                    <select className='settings-dropdown' onChange={(e) => setGameB(e.target.value)}>
                        <option className='settings-drop-opts' value='motivational' defaultChecked>1 hr</option>
                        <option className='settings-drop-opts' value='motivational'>30 mins</option>
                        <option className='settings-drop-opts' value='motivational'>45 mins</option>
                        <option className='settings-drop-opts' value='motivational'>10 mins</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={gameB} onClick={gameBreak}>change</button>
                </section>
                <section className='settings-opt-window' style={{display: appSett ? 'flex' : 'none'}}>
                    <h3 className='settings-titles'>APP SETTINGS</h3>
                    <ToggleButton label="Animations" onToggle={animationsToggle} />
                    <ToggleButton label="Button Sounds" onToggle={btnSoundToggle} />
                    <ToggleButton label="Background Music" onToggle={backgrndSoundToggle} />
                    <VolumeSlider label="Music Volume" onChange={handleVolumeChange} />
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Todo Background</label>
                    <select className='settings-dropdown' onChange={(e) => setTdBg(e.target.value)}>
                        <option className='settings-drop-opts' value='default' defaultChecked>default</option>
                        <option className='settings-drop-opts' value='default2'>default2</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={tdBg} onClick={tdBgSettings}>change</button>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Tunes Background</label>
                    <select className='settings-dropdown' onChange={(e) => setTBg(e.target.value)}>
                        <option className='settings-drop-opts' value='default' defaultChecked>default</option>
                        <option className='settings-drop-opts' value='default2'>default2</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={tBg} onClick={tBgSettings}>change</button>
                    <label htmlFor='settings-dropdown' className='settings-dropdown-label'>Profile background</label>
                    <select className='settings-dropdown' onChange={(e) => setPBg(e.target.value)}>
                        <option className='settings-drop-opts' value='default' defaultChecked>default</option>
                        <option className='settings-drop-opts' value='default2'>default2</option>
                    </select>
                    <button className='qofd-select-btn' type='button' value={pBg} onClick={pBgSettings}>change</button>
                </section>
                <section className='settings-opt-sub-window'>
                    <h3 className='settings-titles'>MOM & DAD</h3>
                    <p className='settings-mom-and-dad'>Coming Soon!</p>
                </section>
            </section>
        </article>
    )
}

export default Settings