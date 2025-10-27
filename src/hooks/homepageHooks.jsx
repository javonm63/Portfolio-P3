import { use, useState } from "react"
export function showMobLogo() {
    const [mobLogo, setMobLogo] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    return {mobLogo, setMobLogo, showSearch, setShowSearch}
}

export function getVideosHooks() {
    const [cardList, setCardList] = useState([])
    const [factList, setFactList] = useState([])
    const [cartoonList, setCartoonList] = useState([])
    return {cardList, setCardList, factList, setFactList, cartoonList, setCartoonList}
}
export function watchHooks() {
    const [watchVid, setWatchVid] = useState(false)
    const [vidId, setVidId] = useState([])
    return {watchVid, setWatchVid, vidId, setVidId}
}

export function topNavCatHook() {
    const [all, setAll] = useState(false)
    const [trending, setTrending] = useState(false)
    const [cartoons, setCartoons] = useState(false)
    const [crafts, setCrafts] = useState(false)
    const [animals, setAnimals] = useState(false)
    const [learning, setLearning] = useState(false)
    const [songs, setSongs] = useState(false)
    const [history, setHistory] = useState(false)
    const [gaming, setGaming] = useState(false)
    return {gaming, setGaming, all, setAll, trending, setTrending, cartoons, setCartoons, crafts, setCrafts, animals, setAnimals, learning, setLearning, songs, setSongs, history, setHistory}
}
export function sideNavHooks() {
    const [pg, setPg] = useState(false)
    const [expl, setExpl] = useState(false)
    const [myL, setMyL] = useState(false)
    const [stories, setStories] = useState(false)
    const [later, setLater] = useState(false)
    const [tunes, setTunes] = useState(false)
    const [games, setGames] = useState(false)
    const [me, setMe] = useState(false)
    const [settings, setSettings] = useState(false)
    return {
        pg, setPg, 
        expl, setExpl,
        myL, setMyL,
        stories, setStories,
        later, setLater,
        tunes, setTunes,
        games, setGames,
        me, setMe,
        settings, setSettings,
    }
}

export function exploreHooks() {
    const [showFacts, setShowFacts] = useState(false)
    const [showSpace, setShowSpace] = useState(false)
    const [resizeFacts, setResizeFacts] = useState(false)
    const [showColorFcts, setShowColorFcts] = useState(false)
    const [whichFact, setWhichFact] = useState([])
    return {showFacts, setShowFacts, showSpace, setShowSpace, whichFact, setWhichFact, resizeFacts, setResizeFacts, showColorFcts, setShowColorFcts}
}
export function todoHooks() {
    const [progress, setProgress] = useState(0);
    const [level, setLevel] = useState(0);
    const [compTask, setCompTask] = useState(0)
    const [stars, setStars] = useState(0)
    const [taskName, setTaskName] = useState('')
    const [taskDescrip, setTaskDescrip] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskList, setTaskList] = useState([])
    const [compTaskList, setCompTaskList] = useState([])
    const [savedTaskList, setSavedTaskList] = useState([])
  return {progress, setProgress, level, setLevel, compTask, setCompTask, stars, setStars, taskName, setTaskName, taskDescrip, setTaskDescrip, taskDate, setTaskDate, taskList, setTaskList, compTaskList, setCompTaskList, savedTaskList, setSavedTaskList}
}

export function storiesBookHook() {
    const [showBookDescrip, setShowBookDescrip] = useState(false)
    const [gw, setGw] = useState(false)
    const [gwHint, setGwHint] = useState(false)
    const [sw, setSw] = useState(false)
    const [gwAns, setGwAns] = useState('')
    const [gwGuess, setGwGuess] = useState('')
    const [gwTitle, setGwTitle] = useState('GUESS THE WORD IN THE PICTURE')
    const [swAns, setSwAns] = useState('')
    const [swGuess, setSwGuess] = useState('')
    const [spotToken, setSpotToken] = useState('')
    const [bookList, setBookList] = useState([])
    const [tunesList, setTunesList] = useState([])
    const [expTunesList, setExpTunesList] = useState([])
    const [myTunesList, setMyTunesList] = useState([])
    const [translateList, setTranslateList] = useState([])
    const [gameList, setGameList] = useState([])
    const [gameSrc, setGameSrc] = useState(null)
    const [moons, setMoons] = useState(0)
    return {gameList, setGameList, moons, setMoons, gameSrc, setGameSrc, gwTitle, setGwTitle, gw, setGw, gwHint, setGwHint, sw, setSw, swGuess, setSwGuess, gwGuess, setGwGuess, expTunesList, gwAns, setGwAns, swAns, setSwAns, setExpTunesList, myTunesList, setMyTunesList, showBookDescrip, setShowBookDescrip, spotToken, setSpotToken, bookList, setBookList, tunesList, setTunesList, translateList, setTranslateList}
}

export function meReflectHooks() {
    const [rlearn, setRlearn] = useState('')
    const [rproud, setRproud] = useState('')
    const [rkindness, setRkindness] = useState('')
    const [rsad, setRsad] = useState('')
    const [rbest, setRbest] = useState('')
    const [rmain, setRmain] = useState('')
    const [rfun, setRfun] = useState('')
    const [rforward, setRforward] = useState('')
    const [orbs, setOrbs] = useState(0)
    const [refAlert, setRefAlert] = useState('REFLECT')
    return {
        rlearn, setRlearn,
        rproud, setRproud,
        rkindness, setRkindness,
        rsad, setRsad,
        rbest, setRbest,
        rmain, setRmain,
        rfun, setRfun,
        rforward, setRforward,
        orbs, setOrbs,
        refAlert, setRefAlert
    }
}
const meData = JSON.parse(sessionStorage.getItem('Me'))
const avname = meData.rname
const avatar = {url: `https://api.dicebear.com/9.x/adventurer/svg?seed=${avname}&hairColor=000000&mouth=variant01`}
sessionStorage.setItem('Avatar', JSON.stringify(avatar))
const petData = JSON.parse(sessionStorage.getItem('Pet'))
const petAvData = JSON.parse(sessionStorage.getItem('Bot Avatar'))
if (!petAvData) {
    sessionStorage.setItem('Bot Avatar', JSON.stringify({url: petUrl}))
}
const petname = petData.rname
const petUrl = `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${petname}`
export function meAboutHooks() {
    const [rname, setRname] = useState('')
    const [rage, setRage] = useState('')
    const [rcolor, setRcolor] = useState('')
    const [rfood, setRfood] = useState('')
    const [ranimal, setRanimal] = useState('')
    const [rtalent, setRtalent] = useState('')
    const [aboutAlert, setAboutAlert] = useState('ENTER DETAILS ABOUT YOU')
    const [meInfo, setMeInfo] = useState(['NAME', '', 'AGE', '', 'COLOR', '', 'FOOD', '', 'ANIMAL', '', 'TALENT', ''])
    const [meInputs, setMeInputs] = useState(false)
    const [myAvatar, setMyAvatar] = useState(avatar.url)
    const [editAv, setEditAv] = useState(false)
    const [petAvatar, setPetAvatar] = useState(petAvData.url || petUrl)
    const [editAv2, setEditAv2] = useState(false)
    const [botMood, setBotMood] = useState("Beep boop! Calculating happiness level…")
    return {
        rname, setRname,
        rage, setRage,
        rcolor, setRcolor,
        rfood, setRfood,
        ranimal, setRanimal,
        rtalent, setRtalent,
        aboutAlert, setAboutAlert,
        meInputs, setMeInputs,
        meInfo, setMeInfo, 
        myAvatar, setMyAvatar,
        editAv, setEditAv,
        petAvatar, setPetAvatar,
        editAv2, setEditAv2,
        botMood, setBotMood
    }
}

export function settingsPageHooks() {
    const [todoSett, setTodoSett] = useState(true)
    const [learningSett, setLearningSett] = useState(false)
    const [gamingSett, setGamingSett] = useState(false)
    const [appSett, setAppSett] = useState(false)
    const [qotd, setQotd] = useState('')
    const [rL, setRL] = useState('')
    const [langL, setLangL] = useState('')
    const [learnL, setLearnL] = useState('')
    const [refL, setRefL] = useState('')
    const [gameB, setGameB] = useState('')
    const [tdBg, setTdBg] = useState('')
    const [tBg, setTBg] = useState('')
    const [pBg, setPBg] = useState('')
    return {
        todoSett, setTodoSett, 
        learningSett, setLearningSett,
        gamingSett, setGamingSett,
        appSett, setAppSett,
        qotd, setQotd,
        rL, setRL,
        langL, setLangL,
        learnL, setLearnL,
        refL, setRefL,
        gameB, setGameB,
        tdBg, setTdBg,
        tBg, setTBg,
        pBg, setPBg
    }
}