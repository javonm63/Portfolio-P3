import { useEffect } from 'react'
import { meAboutHooks, meReflectHooks } from '../hooks/homepageHooks'
import '../styles/me.css'

function Me({disp, me, pet, stars, compTask, moons, orbs, setOrbs, meInfo, setMeInfo, all, trending}) {
    const reflectHooks = meReflectHooks()
    const rlearn = reflectHooks.rlearn
    const setRlearn = reflectHooks.setRlearn
    const rproud = reflectHooks.rproud
    const setRproud = reflectHooks.setRproud
    const rkindness = reflectHooks.rkindness
    const setRkindness = reflectHooks.setRkindness
    const rsad = reflectHooks.rsad
    const setRsad = reflectHooks.setRsad
    const rbest = reflectHooks.rbest
    const setRbest = reflectHooks.setRbest
    const rmain = reflectHooks.rmain
    const setRmain = reflectHooks.setRmain
    const rfun = reflectHooks.rfun
    const setRfun = reflectHooks.setRfun
    const rforward = reflectHooks.rforward
    const setRforward = reflectHooks.setRforward
    const refAlert = reflectHooks.refAlert
    const setRefAlert = reflectHooks.setRefAlert

    const refHooks = meAboutHooks() 
    const rname = refHooks.rname
    const setRname = refHooks.setRname
    const rage = refHooks.rage
    const setRage = refHooks.setRage
    const rcolor = refHooks.rcolor
    const setRcolor = refHooks.setRcolor
    const rfood = refHooks.rfood
    const setRfood = refHooks.setRfood
    const rtalent = refHooks.rtalent
    const setRtalent = refHooks.setRtalent
    const ranimal = refHooks.ranimal
    const setRanimal= refHooks.setRanimal
    const aboutAlert = refHooks.aboutAlert
    const setAboutAlert = refHooks.setAboutAlert
    const meInputs = refHooks.meInputs
    const setMeInputs = refHooks.setMeInputs
    const myAvatar = refHooks.myAvatar
    const setMyAvatar = refHooks.setMyAvatar
    const editAv = refHooks.editAv
    const setEditAv = refHooks.setEditAv
    const petAvatar = refHooks.petAvatar
    const setPetAvatar = refHooks.setPetAvatar
    const editAv2 = refHooks.editAv2
    const setEditAv2 = refHooks.setEditAv2
    const botMood = refHooks.botMood
    const setBotMood = refHooks.setBotMood

    const submitReflection = () => {
        const expData = JSON.parse(localStorage.getItem('Reflection'))
        if (!expData) {
            if (!rlearn || !rproud || !rkindness || !rsad || !rbest || !rmain || !rfun || !rforward) {
                setRefAlert('All questions are required.')
            } else {
                setRefAlert('WooHoo! +2 orbs')
                setTimeout(() => {
                    setRefAlert('REFLECT')
                    setRlearn('')
                    setRproud('') 
                    setRkindness('') 
                    setRsad('') 
                    setRbest('') 
                    setRmain('') 
                    setRfun('') 
                    setRforward('')
                }, 2000)
                setOrbs((prev) => prev + 2)
                setRlearn('')
                setRproud('') 
                setRkindness('') 
                setRsad('') 
                setRbest('') 
                setRmain('') 
                setRfun('') 
                setRforward('')
                const now = Date.now()
                localStorage.setItem('Reflection', JSON.stringify({reflection: now}))
            }
        }
        const expiry = expData.reflection
        const now = Date.now()
        const oneDay = 24 * 60 * 60 * 1000;
        const age = now - expiry
        if (age < oneDay) {
            setRefAlert('Done Already')
            setTimeout(() => {
                    setRefAlert('REFLECT')
                    setRlearn('')
                    setRproud('') 
                    setRkindness('') 
                    setRsad('') 
                    setRbest('') 
                    setRmain('') 
                    setRfun('') 
                    setRforward('')
                }, 2000)
        } else {
            if (!rlearn || !rproud || !rkindness || !rsad || !rbest || !rmain || !rfun || !rforward) {
                setRefAlert('All questions are required.')
            } else {
                setRefAlert('WooHoo! +2 orbs')
                setTimeout(() => {
                    setRefAlert('REFLECT')
                    setRlearn('')
                    setRproud('') 
                    setRkindness('') 
                    setRsad('') 
                    setRbest('') 
                    setRmain('') 
                    setRfun('') 
                    setRforward('')
                }, 2000)
                setOrbs((prev) => prev + 2)
                setRlearn('')
                setRproud('') 
                setRkindness('') 
                setRsad('') 
                setRbest('') 
                setRmain('') 
                setRfun('') 
                setRforward('')
                const now = Date.now()
                localStorage.setItem('Reflection', JSON.stringify({reflection: now}))
            }
        }
    }
    const submitAboutMe = (e) => {
        const whichInfo = e.target.value
        if (whichInfo === 'me') {
            if (!rname || !rage || !rcolor || !rfood || !ranimal || !rtalent) {
                setAboutAlert('All details are required.')
                setTimeout(() => {
                    setAboutAlert('ENTER DETAILS ABOUT YOU')
                }, 5000)
            } else {
                const me = {rname, rage, rcolor, rfood, ranimal, rtalent}
                sessionStorage.setItem('Me', JSON.stringify(me))
                setAboutAlert('YAYY!, Info Updated')
                setMeInfo(['NAME', rname, 'AGE', `${rage} yrs old`, 'COLOR', rcolor, 'FOOD', rfood, 'ANIMAL', ranimal, 'TALENT', rtalent])
                setTimeout(() => {
                    setAboutAlert('ENTER DETAILS ABOUT YOU')
                    setRname('')
                    setRage('')
                    setRcolor('')
                    setRfood('')
                    setRanimal('')
                    setRtalent('')
                }, 3000)
                setTimeout(() => {
                    setMeInputs(false)
                }, 5000)
            }
        } else if (whichInfo === 'pet') {
            if (!rname || !rage || !rcolor || !rfood || !ranimal || !rtalent) {
                setAboutAlert('All details are required.')
                setTimeout(() => {
                    setAboutAlert('ENTER DETAILS ABOUT YOU')
                }, 5000)
            } else {
                const pet = {rname, rage, rcolor, rfood, ranimal, rtalent}
                sessionStorage.setItem('Pet', JSON.stringify(pet))
                sessionStorage.setItem('Pet Avatar', JSON.stringify({url: `https://api.dicebear.com/9.x/adventurer/svg?seed=${rname}`}))
                setAboutAlert('YAYY!, Info Updated')
                setMeInfo(['NAME', rname, 'AGE', `${rage} yrs old`, 'COLOR', rcolor, 'FOOD', rfood, 'ANIMAL', ranimal, 'TALENT', rtalent])
                setTimeout(() => {
                    setAboutAlert('ENTER DETAILS ABOUT YOU')
                    setRname('')
                    setRage('')
                    setRcolor('')
                    setRfood('')
                    setRanimal('')
                    setRtalent('')
                }, 3000)
                setTimeout(() => {
                    setMeInputs(false)
                }, 5000)
            }
        }
    }
    function editAvatar(e) {
        const parameter = e.target.value.trim(); 
        const me = JSON.parse(sessionStorage.getItem("Me"));
        const avname = me.rname;

        if (!parameter) return;

        const [key, val] = parameter.split("=");

        setMyAvatar((prev) => {
            const baseUrl = new URL(`https://api.dicebear.com/9.x/adventurer/svg?seed=${avname}`);
            baseUrl.searchParams.set("seed", avname);

            const saved = JSON.parse(sessionStorage.getItem("AvatarParams")) || {};
            saved[key] = val; 
            Object.entries(saved).forEach(([k, v]) => baseUrl.searchParams.set(k, v));

            sessionStorage.setItem("AvatarParams", JSON.stringify(saved));

            const finalUrl = baseUrl.toString();
            sessionStorage.setItem("Avatar", JSON.stringify({ url: finalUrl }));
            return finalUrl;
        });
    }
    function editAvatar2(e) {
        const parameter = e.target.value.trim(); 
        const me = JSON.parse(sessionStorage.getItem("Pet"));
        const avname = me.rname;

        if (!parameter) return;

        const [key, val] = parameter.split("=");

        setPetAvatar((prev) => {
            const baseUrl = new URL(`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${avname}`);
            baseUrl.searchParams.set("seed", avname);

            const saved = JSON.parse(sessionStorage.getItem("BotAvatarParams")) || {};
            saved[key] = val; 
            Object.entries(saved).forEach(([k, v]) => baseUrl.searchParams.set(k, v));

            sessionStorage.setItem("BotAvatarParams", JSON.stringify(saved));

            const finalUrl = baseUrl.toString();
            sessionStorage.setItem("Bot Avatar", JSON.stringify({ url: finalUrl }));
            return finalUrl;
        });
    }
    useEffect(() => {
        const moods = [
            "Beep boop! Calculating happiness level…",
            "Beep boop! Scanning for cookies 🍪",
            "Executing dance protocol 💃",
            "Charging happiness circuits ⚡",
            "Running smile.exe 😄",
            "Sensors detect fun ahead! 🚀",
            "Uploading good vibes ☀️",
            "Mission: Make a new friend 🤝",
            "Processing kindness data 💖",
            "Activating silly mode 🤪",
            "Rebooting imagination system 🌈"
        ];
        setBotMood(() => {
            const interval = setInterval(() => {
            setTimeout(() => {
                setBotMood((prev) => {
                let newMood;
                do {
                    newMood = moods[Math.floor(Math.random() * moods.length)];
                } while (newMood === prev);
                return newMood;
                });
            }, 3000)
            }, 10000) 
        })
    }, [])

    return (
        <article className='me-page-container' style={{display: disp ? 'flex' : 'none'}}>
            <section className='me-main-container' style={{display: me ? 'flex' : 'none'}}>
                <section className='me-avatar-container'>
                    <p className='me-card-titles'>MY AVATAR</p>
                    <div className='me-avatar-cont' style={{backgroundImage: `url(${myAvatar})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <img className='edit-avatar-icon' src='/edit-icon.png' alt='edit icon image' onClick={() => setEditAv(true)}></img>
                        <div className='edit-avatar-options-cont' style={{display: editAv ? 'flex' : 'none'}}>
                            <button className='exit-button' type='button' onClick={() => setEditAv(false)}>X</button>
                            <h5 className='edit-avatar-title'>AVATAR</h5>
                            <p className='edit-avatar-subtitles'>Hairstyle:</p>
                            <button className='edit-avatar-options' type='button' value='hair=short01' onClick={editAvatar}>short</button>
                            <button className='edit-avatar-options' type='button' value='hair=short02' onClick={editAvatar}>kinda short</button>
                            <button className='edit-avatar-options' type='button' value='hair=long01' onClick={editAvatar}>medium</button>
                            <button className='edit-avatar-options' type='button' value='hair=long02' onClick={editAvatar}>long</button>
                            <p className='edit-avatar-subtitles'>Hair Color:</p>
                            <button className='edit-avatar-options' type='button' value='hairColor=804000 ' onClick={editAvatar}>brown</button>
                            <button className='edit-avatar-options' type='button' value='hairColor=000000 ' onClick={editAvatar}>black</button>
                            <button className='edit-avatar-options' type='button' value='hairColor=ffcc66' onClick={editAvatar}>blonde</button>
                            <button className='edit-avatar-options' type='button' value='hairColor=ff0000' onClick={editAvatar}>red</button>
                            <button className='edit-avatar-options' type='button' value='hairColor=800080' onClick={editAvatar}>purple</button>
                            <p className='edit-avatar-subtitles'>Eyebrows:</p>
                            <button className='edit-avatar-options' type='button' value='eyebrows=variant01' onClick={editAvatar}>brows1</button>
                            <button className='edit-avatar-options' type='button' value='eyebrows=variant02' onClick={editAvatar}>brows2</button>
                            <button className='edit-avatar-options' type='button' value='eyebrows=variant03' onClick={editAvatar}>brows3</button>
                            <button className='edit-avatar-options' type='button' value='eyebrows=variant04' onClick={editAvatar}>brows4</button>
                            <button className='edit-avatar-options' type='button' value='eyebrows=variant05' onClick={editAvatar}>brows5</button>
                            <p className='edit-avatar-subtitles'>Eyes:</p>
                            <button className='edit-avatar-options' type='button' value='eyes=variant01' onClick={editAvatar}>eyes1</button>
                            <button className='edit-avatar-options' type='button' value='eyes=variant02' onClick={editAvatar}>eyes2</button>
                            <button className='edit-avatar-options' type='button' value='eyes=variant03' onClick={editAvatar}>eyes3</button>
                            <button className='edit-avatar-options' type='button' value='eyes=variant04' onClick={editAvatar}>eyes4</button>
                            <p className='edit-avatar-subtitles'>Nose:</p>
                            <button className='edit-avatar-options' type='button' value='nose=variant01' onClick={editAvatar}>nose1</button>
                            <button className='edit-avatar-options' type='button' value='nose=variant02' onClick={editAvatar}>nose2</button>
                            <button className='edit-avatar-options' type='button' value='nose=variant03' onClick={editAvatar}>nose3</button>
                            <p className='edit-avatar-subtitles'>Mouth:</p>
                            <button className='edit-avatar-options' type='button' value='mouth=variant01' onClick={editAvatar}>smile1</button>
                            <button className='edit-avatar-options' type='button' value='mouth=variant02' onClick={editAvatar}>smile2</button>
                            <button className='edit-avatar-options' type='button' value='mouth=variant03' onClick={editAvatar}>frown1</button>
                            <button className='edit-avatar-options' type='button' value='mouth=variant04' onClick={editAvatar}>frown2</button>
                            <button className='edit-avatar-options' type='button' value='mouth=variant05' onClick={editAvatar}>open</button>
                            <p className='edit-avatar-subtitles'>Skin Color:</p>
                            <button className='edit-avatar-options' type='button' value='skinColor=ddb180' onClick={editAvatar}>color1</button>
                            <button className='edit-avatar-options' type='button' value='skinColor=fcd7b6' onClick={editAvatar}>color2</button>
                            <button className='edit-avatar-options' type='button' value='skinColor=ffcc99' onClick={editAvatar}>color3</button>
                            <button className='edit-avatar-options' type='button' value='skinColor=fad7b6' onClick={editAvatar}>color4</button>
                            <button className='edit-avatar-options' type='button' value='skinColor=8d5524' onClick={editAvatar}>color4</button>
                            <h5 className='edit-avatar-title'>FEATURES</h5>
                            <button className='edit-avatar-options' type='button' value='features=blush' onClick={editAvatar}>blush</button>
                            <button className='edit-avatar-options' type='button' value='features=freckles' onClick={editAvatar}>freckles</button>
                            <button className='edit-avatar-options' type='button' value='features=birthmark' onClick={editAvatar}>birthmark</button>
                            <h5 className='edit-avatar-title'>ACCESSORIES</h5>
                            <p className='edit-avatar-subtitles'>Earrings:</p>
                            <button className='edit-avatar-options' type='button' value='earrings=variant01' onClick={editAvatar}>earrings1</button>
                            <button className='edit-avatar-options' type='button' value='earrings=variant02' onClick={editAvatar}>earrings2</button> 
                        </div>
                    </div>
                </section>
                <section className='me-info-container'>
                    <p className='me-card-titles'>ABOUT ME</p>
                        <div className='me-card-grid'>
                        {meInfo && meInfo.map((me, i) => (
                            <div key={i}>
                                <p className='me-card-labels'>{me}</p>
                            </div>
                        ))}
                        </div>
                <button className='edit-about-me-info' type='button' onClick={() => setMeInputs(true)} >edit info</button>
                </section>
            </section>
            <section className='me-sub-container' style={{display: me ? 'flex' : 'none'}}>
                <div className='me-progress-container'>
                    <p className='me-card-titles'>PROGRESS</p>
                    <div className='pg-div'>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Stars</p>
                            <img className='me-stat-icons' src='/star-icon.png' alt='star icon image'></img>
                            <p className='me-stat'>{stars}</p>
                        </div>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Moons</p>
                            <img className='me-stat-icons' src='/moon-icon.png' alt='moon icon image'></img>
                            <p className='me-stat'>{moons}</p>
                        </div>
                    </div>
                    <div className='pg-div'>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Tasks</p>
                            <img className='me-stat-icons' src='/comp-icon.png' alt='completed icon image'></img>
                            <p className='me-stat'>{compTask}</p>
                        </div>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Orbs</p>
                            <img className='me-stat-icons' src='/daily-icon.png' alt='daily challenges icon image'></img>
                            <p className='me-stat'>{orbs}</p>
                        </div>
                    </div>
                </div>
                <div className='me-reflect-container'>
                    <p className='me-card-titles'>{refAlert}</p>
                    <div className='me-reflect-card'>
                        <input className='me-reflect-inputs' type='text' value={rlearn} onChange={(e) => setRlearn(e.target.value)} placeholder='Something you learned'></input>
                        <input className='me-reflect-inputs' type='text' value={rproud} onChange={(e) => setRproud(e.target.value)} placeholder="Something you're proud of"></input>
                        <input className='me-reflect-inputs' type='text' value={rkindness} onChange={(e) => setRkindness(e.target.value)} placeholder='Kindess you shared'></input>
                        <input className='me-reflect-inputs' type='text' value={rsad} onChange={(e) => setRsad(e.target.value)} placeholder='Were you sad?'></input>
                        <input className='me-reflect-inputs' type='text' value={rbest} onChange={(e) => setRbest(e.target.value)} placeholder='Best thing happened'></input>
                        <input className='me-reflect-inputs' type='text' value={rmain} onChange={(e) => setRmain(e.target.value)} placeholder='Main emotion was?'></input>
                        <input className='me-reflect-inputs' type='text' value={rfun} onChange={(e) => setRfun(e.target.value)} placeholder='Was it fun?'></input>
                        <input className='me-reflect-inputs' type='text' value={rforward} onChange={(e) => setRforward(e.target.value)} placeholder='Looking forward to?'></input>
                        <button className='me-reflect-btn' type='submit' onClick={submitReflection}>submit</button>
                    </div>
                </div>
            </section>
    {/* /////////////////// */}
            <section className='pet-main-container' style={{display: pet ? 'flex' : 'none'}}>
                <section className='pet-avatar-container'>
                    <p className='me-card-titles'>BOT AVATAR</p>
                    <div className='me-avatar-cont' style={{backgroundImage: `url(${petAvatar})`}}>
                        <img className='edit-avatar-icon' src='/edit-icon.png' alt='edit icon image' onClick={() => setEditAv(true)}></img>
                        <div className='edit-avatar-options-cont' style={{display: editAv ? 'flex' : 'none'}}>
                            <button className='exit-button' type='button' onClick={() => setEditAv(false)}>X</button>
                            <h5 className='edit-avatar-title'>AVATAR</h5>
                            <p className='edit-avatar-subtitles'>Eyes:</p>
                            <button className='edit-avatar-options' type='button' value='eyes=eva' onClick={editAvatar2}>eyes1</button>
                            <button className='edit-avatar-options' type='button' value='eyes=frame1' onClick={editAvatar2}>eyes2</button>
                            <button className='edit-avatar-options' type='button' value='eyes=glow' onClick={editAvatar2}>eyes3</button>
                            <button className='edit-avatar-options' type='button' value='eyes=happy' onClick={editAvatar2}>eyes4</button>
                            <button className='edit-avatar-options' type='button' value='eyes=robocop' onClick={editAvatar2}>eyes5</button>
                            <button className='edit-avatar-options' type='button' value='eyes=sensor' onClick={editAvatar2}>eyes4</button>
                            <p className='edit-avatar-subtitles'>Mouth:</p>
                            <button className='edit-avatar-options' type='button' value='mouth=bite' onClick={editAvatar2}>mouth1</button>
                            <button className='edit-avatar-options' type='button' value='mouth=diagram' onClick={editAvatar2}>mouth2</button>
                            <button className='edit-avatar-options' type='button' value='mouth=grill02' onClick={editAvatar2}>mouth3</button>
                            <button className='edit-avatar-options' type='button' value='mouth=smile02' onClick={editAvatar2}>mouth4</button>
                            <button className='edit-avatar-options' type='button' value='mouth=square02' onClick={editAvatar2}>mouth5</button>
                            <p className='edit-avatar-subtitles'>Color:</p>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=00acc1' onClick={editAvatar2}>blue</button>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=43a047' onClick={editAvatar2}>green</button>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=757575' onClick={editAvatar2}>grey</button>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=c0ca33' onClick={editAvatar2}>yellow</button>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=ffb300' onClick={editAvatar2}>orange1</button>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=fb8c00' onClick={editAvatar2}>orange2</button>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=546e7a' onClick={editAvatar2}>color1</button>
                            <button className='edit-avatar-options' type='button' value='backgroundColor=d81b60' onClick={editAvatar2}>pink</button>
                        </div>
                    </div>
                </section>
                <section className='pet-info-container'>
                    <p className='me-card-titles'>BOT INFO</p>
                    <div className='me-card-grid'>
                        {meInfo && meInfo.map((me, i) => (
                            <div key={i}>
                                <p className='me-card-labels'>{me}</p>
                            </div>
                        ))}
                    </div>
                    <button className='edit-about-me-info' type='button' onClick={() => setMeInputs(true)} >edit info</button>
                </section>
            </section>
            <section className='pet-sub-container' style={{display: pet ? 'flex' : 'none'}}>
                <div className='pet-progress-container'>
                    <p className='me-card-titles'>PROGRESS</p>
                    <div className='pg-div'>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Stars</p>
                            <img className='me-stat-icons' src='/star-icon.png' alt='star icon image'></img>
                            <p className='me-stat'>{stars}</p>
                        </div>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Moons</p>
                            <img className='me-stat-icons' src='/moon-icon.png' alt='moon icon image'></img>
                            <p className='me-stat'>{moons}</p>
                        </div>
                    </div>
                    <div className='pg-div'>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Tasks</p>
                            <img className='me-stat-icons' src='/comp-icon.png' alt='completed icon image'></img>
                            <p className='me-stat'>{compTask}</p>
                        </div>
                        <div className='me-progress-cards'>
                            <p className='me-stat-titles'>Orbs</p>
                            <img className='me-stat-icons' src='/daily-icon.png' alt='daily challenges icon image'></img>
                            <p className='me-stat'>{orbs}</p>
                        </div>
                    </div>
                </div>
                <div className='pet-reflect-container'>
                    <p className='me-card-titles'>MOOD</p>
                    <div className='pet-closet-cont'>
                        <p className="robot-mood" id="robotMood">{botMood}</p>
                    </div>
                </div>
            </section>

            <article className='me-info-input-card' style={{display: meInputs ? 'flex' : 'none'}}>
                <button className='exit-button' type='button' onClick={() => setMeInputs(false)}>X</button>
                <p className='me-inputs-title'>{aboutAlert}</p>
                <input className='me-info-inputs' type='text' value={rname} onChange={(e) => setRname(e.target.value)} placeholder='Enter your name'></input>
                <input className='me-info-inputs' type='text' value={rage} onChange={(e) => setRage(e.target.value)} placeholder='Enter your age'></input>
                <input className='me-info-inputs' type='text' value={rcolor} onChange={(e) => setRcolor(e.target.value)} placeholder='Enter favorite color'></input>
                <input className='me-info-inputs' type='text' value={rfood} onChange={(e) => setRfood(e.target.value)} placeholder='Enter favorite food'></input>
                <input className='me-info-inputs' type='text' value={ranimal} onChange={(e) => setRanimal(e.target.value)} placeholder='Enter favorite animal'></input>
                <input className='me-info-inputs' type='text' value={rtalent} onChange={(e) => setRtalent(e.target.value)} placeholder='Enter best talent'></input>
                <button className='me-info-submit-btn' type='button' value={all ? 'me' : 'pet'} onClick={submitAboutMe}>submit</button>
            </article>
        </article>
    )
}

export default Me