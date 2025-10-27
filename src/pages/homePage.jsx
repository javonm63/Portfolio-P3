import SearchBar from '../components/searchBar'
import SideNav from '../components/sideNav'
import TopNav from '../components/pg-topNav'
import VideoCard from '../components/videoCard'
import { useEffect, useRef } from "react";
import '../styles/homePage.css'
import { exploreHooks, getVideosHooks, meAboutHooks, meReflectHooks, sideNavHooks, storiesBookHook, todoHooks, topNavCatHook, watchHooks } from '../hooks/homepageHooks';
import { fetchVideos } from '../services/loadCategories';
import Intro from '../utils/intro';
import Explore from '../components/explore';
import TopNav2 from '../components/expl-topNav';
import WatchPage from './watchPage';
import MyList from './myList';
import TopNav3 from '../components/myL-topNav';
import TopNav4 from '../components/stories-topNav';
import Stories from '../components/stories';
import TopNav5 from '../components/tunes-topNav';
import Tunes from './tunes';
import Games from './GAMES.JSX';
import TopNav6 from '../components/later-topNav';
import Translate from './translate';
import TopNav7 from '../components/games-topNav';
import GamePlayer from '../components/gamePlayer';
import TopNav8 from '../components/me-topNav';
import Me from './me';
import TopNav9 from '../components/sett-topNav';
import Settings from './settings';

function HomePage() {
    const getVideoHook = getVideosHooks()
    const cardList = getVideoHook.cardList
    const setCardList = getVideoHook.setCardList
    const category = getVideoHook.cartoonList
    const setCategory = getVideoHook.setCartoonList
    const factList = getVideoHook.factList
    const setFactList = getVideoHook.setFactList

    const tpHooks = topNavCatHook()
    const all = tpHooks.all
    const setAll = tpHooks.setAll
    const trending = tpHooks.trending
    const setTrending = tpHooks.setTrending
    const cartoons = tpHooks.cartoons
    const setCartoons = tpHooks.setCartoons
    const crafts = tpHooks.crafts
    const setCrafts = tpHooks.setCrafts
    const gaming = tpHooks.gaming
    const setGaming = tpHooks.setGaming

    const sideNavHook = sideNavHooks()
    const pg = sideNavHook.pg
    const setPg = sideNavHook.setPg
    const expl = sideNavHook.expl
    const setExpl = sideNavHook.setExpl
    const myL = sideNavHook.myL
    const setMyL = sideNavHook.setMyL
    const stories = sideNavHook.stories
    const setStories = sideNavHook.setStories
    const later = sideNavHook.later
    const setLater = sideNavHook.setLater
    const tunes = sideNavHook.tunes
    const setTunes = sideNavHook.setTunes
    const games = sideNavHook.games
    const setGames = sideNavHook.setGames
    const me = sideNavHook.me
    const setMe= sideNavHook.setMe
    const settings = sideNavHook.settings
    const setSettings= sideNavHook.setSettings

    const watchHook = watchHooks()
    const watchVid = watchHook.watchVid
    const setWatchVid = watchHook.setWatchVid
    const vidId = watchHook.vidId
    const setVidId = watchHook.setVidId

    const factsCardHook = exploreHooks()
    const showSpace = factsCardHook.showSpace
    const setShowSpace = factsCardHook.setShowSpace
    const resizeFacts = factsCardHook.resizeFacts
    const setResizeFacts = factsCardHook.setResizeFacts
    
    const todoHook = todoHooks()
    const progress = todoHook.progress
    const setProgress = todoHook.setProgress
    const compTask = todoHook.compTask
    const setCompTask = todoHook.setCompTask
    const stars = todoHook.stars
    const setStars = todoHook.setStars

    const bookHooks2 = storiesBookHook()
    const bookList = bookHooks2.bookList
    const setBookList = bookHooks2.setBookList
    const spotToken = bookHooks2.spotToken
    const setSpotToken = bookHooks2.setSpotToken
    const tunesList = bookHooks2.tunesList
    const setTunesList = bookHooks2.setTunesList
    const expTunesList = bookHooks2.expTunesList
    const setExpTunesList = bookHooks2.setExpTunesList
    const myTunesList = bookHooks2.myTunesList
    const setMyTunesList = bookHooks2.setMyTunesList
    const translateList = bookHooks2.translateList
    const setTranslateList = bookHooks2.setTranslateList
    const gameList = bookHooks2.gameList
    const setGameList = bookHooks2.setGameList
    const gameSrc = bookHooks2.gameSrc
    const setGameSrc = bookHooks2.setGameSrc
    const moons = bookHooks2.moons
    const setMoons = bookHooks2.setMoons

    const reflectHooks = meReflectHooks()
    const orbs = reflectHooks.orbs
    const setOrbs = reflectHooks.setOrbs

    const aboutHooks = meAboutHooks() 
    const meInfo = aboutHooks.meInfo
    const setMeInfo = aboutHooks.setMeInfo

    useEffect(() => {
        const todaysList = JSON.parse(localStorage.getItem('Todays List'))
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        if (!todaysList) {
            fetchVideos(setCardList);
        } else {
            const age = now - todaysList.savedAt;
            if (age > oneDay) {
                fetchVideos(setCardList);
            } else {
                setCardList(todaysList.videos.slice(0, 12)); 
                setCategory('Todays List')
            }
        }
        setCategory('Todays List')
        setAll(true)
        setPg(true)
        setExpl(false)
        setMyL(false)
        setStories(false)
        setLater(false)
        setTunes(false)
        setGames(false)
        setMe(false)
        setSettings(false)

        async function getSpotifyToken() {
            const clientId = "8f0c9ec1f81a48cea4c3cb71d7577fe5";
            const clientSecret = "a0c24b0028f04783b6d7c7b01fec8e2d";

            const response = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
                },
                body: "grant_type=client_credentials",
            });

            const data = await response.json();
            setSpotToken(data.access_token)
            return
        }
        getSpotifyToken()

        const sportsGames = [{
            title: "Stickman Parkour",
            embed: "https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html",
            image: "https://www.onlinegames.io/media/posts/871/responsive/stickman-parkour-OG-xs.jpg",
            description: "Stickman Parkour is an online platformer game that you can play on your browser, embracing the easy-to-learn but hard-to-master mechanics.  Collect keys, open chests, pass levels and help him find his way out across 30 levels. \nWhat is Stickman Parkour about? \nImagine Stickman, a tiny stick figure who decides one day to go on this epic adventure.",
        }, {
            title: "Basket Hoop",
            embed: "https://cloud.onlinegames.io/games/2024/construct/311/basket-hoop/index-og.html",
            image: "https://www.onlinegames.io/media/posts/843/responsive/Basket-Hoop-xs.jpg",
            description: "In Basket Hoop, gravity is your only challenge, and tapping is your sole weapon.  Your goal is simple make the ball jump and send it inside the hoop.  The charm of the one button games peaks in Basket Hoop online.  Make as many baskets as you can in a limited amount of time.",
        }, {
            title: "Archer Hero",
            embed: "https://www.onlinegames.io/games/2023/unity/archer-hero/index.html",
            image: "https://www.onlinegames.io/media/posts/364/responsive/Archer-Hero-Online-xs.jpg",
            description: "In Archer Hero, we give you the possibility to enter the world of mysticism and magic.  Begin the journey by testing your archery abilities and eliminating potential enemies.  You can select from a variety of bows, arrows, and targets in order to improve your shooting skills.  Every level brings new challenges and rewards.",
        }, {
            title: "Head Soccer 2022",
            embed: "https://www.onlinegames.io/games/2023/construct/280/head-soccer-2022/index.html",
            image: "https://www.onlinegames.io/media/posts/624/responsive/Head-Soccer-2022-xs.jpg",
            description: "Head Soccer 2022 is a 2D sports game in which you engage in football matches with a friend or against the CPU.  The first thing to do is choose your beloved football player.  You will take part in matches in his shoes!  Be the one who scores the most and get your World Cup in this thrilling arcade game!",
        }, {
            title: "Car Football",
            embed: "https://cloud.onlinegames.io/games/2023/construct/198/car-football/index.html",
            image: "https://www.onlinegames.io/media/posts/405/responsive/Car-Football-xs.jpg",
            description: "Are you ready to breathe new life into football?  Car Football is a 2 player car game where you can kick a goal to the opponent's side with your favorite monster truck.  There are 6 cars listed for you, two available in the first place.  To open the rest, you need to earn coins via the games you have played.",
        }, {
            title: "Snake Football",
            embed: "https://www.onlinegames.io/games/2023/construct/200/snake-football/index.html",
            image: "https://www.onlinegames.io/media/posts/706/responsive/Snake-Football-xs.jpg",
            description: "Slide your snake and score a goal!  Snake Football is a 2D soccer game in which you direct a snake on a football field.  Your cute animal is a footballer!  Your main objective is to score as many goals as possible within 2 minutes.",
        }]
        const arcadeGames = [{
            title: "Mini Cars Racing",
            embed: "https://cloud.onlinegames.io/games/2021/unity/mini-cars-racing/index-og.html",
            image: "https://www.onlinegames.io/media/posts/1010/responsive/Mini-Cars-Racing-xs.jpg",
            description: "Mini Cars Racing is a 2 player car racing game you can play free on OnlineGames. io!  You can race against the clock or battle a friend on the same device.  It's fast, fun, and feels just like playing with toy cars on your childhood road traffic rug.",
        }, {
            title: "Block Blast",
            embed: "https://cloud.onlinegames.io/games/2024/unity3/block-blast/index-og.html",
            image: "https://www.onlinegames.io/media/posts/876/responsive/block-blast-xs.jpg",
            description: "Tetris is all fun and games, but the pressure of dropping blocks quickly?  Oh, it's not what we love in a chill puzzle game, right?  So, we've created Block Blast Online, offering endless Tetris fun without any time limits.  Take it easy, and place the blocks in the grids in peace.",
        }, {
            title: "F1 Drift Racer",
            embed: "https://www.onlinegames.io/games/2022/construct/134/f1-drift-racer/index.html",
            image: "https://www.onlinegames.io/media/posts/504/responsive/F1-Drift-Racer-xs.jpg",
            description: "We invite you to another Formula 1 race!  F1 Drift Racer is a 2D drift game where you race with other F1 racers on a curved racing map.  There are 4 Formula racers with you in this race, and you have to complete 2 laps in total.  Give your vehicle credit for being a Formula 1 vehicle and be the first to reach the finish line at full speed!",
        }, {
            title: "Cookie Clicker Pro",
            embed: "https://cloud.onlinegames.io/games/2025/unity/cookie-clicker-pro/index-og.html",
            image: "https://www.onlinegames.io/media/posts/971/responsive/Cookie-Clicker-Pro-Game-xs.jpg",
            description: "Love cookies?  Want to create the biggest cookie empire the internet has ever seen?  Then Cookie Clicker Pro is exactly your game!  It's a simple, addictively fun incremental game, packed with sweet strategies.",
        }, {
            title: "Secret Sniper Agent",
            embed: "https://www.onlinegames.io/games/2022/construct/129/secret-sniper-agent/index.html",
            image: "https://www.onlinegames.io/media/posts/753/responsive/Secret-Sniper-Agent-xs.jpg",
            description: "You have been given a special mission: to eliminate the men in suits!  Secret Sniper Agent is a 2D shooting game in which you are a skilled sniper agent.  You have a crucial task on the rooftop. \nYou must hunt down all the men with silenced guns who are moving left and right in the city park.",
        }, {
            title: "Futuristic Racer",
            embed: "https://cloud.onlinegames.io/games/2021/2/futuristic-racer/index-og.html",
            image: "https://www.onlinegames.io/media/posts/1051/responsive/futuristic_racer_game-xs.webp",
            description: "Welcome to the year 2149, where racing isn't just a sport, but a high-stakes, neon-fueled battle for supremacy across the galaxy. \nFuturistic Racer takes you into a world of adrenaline and luminous cityscapes.  If you are a perfectionist who craves some intensity and precision handling, this game is definitely for you.  \nGameplay\nYour racing journey starts with a basic car.",
        }]
        const puzzleGames = [{
            title: "Tile Match",
            embed: "https://cloud.onlinegames.io/games/2025/unity/tile-match/index-og.html",
            image: "https://www.onlinegames.io/media/posts/939/responsive/tile-match-xs.jpg",
            description: "It's late afternoon, and the sun is casting a soft golden glow through your little window.  You've got your pumpkin spice latte in hand and a cozy plaid blanket draped over your chilly legs.  Your laptop is resting nearby, waiting for you to chill out with something simple yet satisfying. \nYou open a tile game on OnlineGames.",
        }, {
            title: "Cake Match Puzzle",
            embed: "https://cloud.onlinegames.io/games/2024/unity3/cake-match-puzzle/index-og.html",
            image: "https://www.onlinegames.io/media/posts/908/responsive/55-xs.jpg",
            description: "Cake Match Puzzle is an addictive free game where you become a bakery chef.  You'll play with cake slices on a 4x4 tray, merging them to create full cakes.  The goal is simple: make as many cakes as possible before you run out of moves.  It’s all about strategy, smart placement, and a little bit of luck!",
        }, {
            title: "Subway Idle 3D",
            embed: "https://www.onlinegames.io/games/2022/unity4/subway-idle-3d/index.html",
            image: "https://www.onlinegames.io/media/posts/586/responsive/Subway-Idle-xs.jpg",
            description: "Subway Idle 3D is an idle game where you try to run an underground network in New York City.  You are in charge of all engineering work of this subway system.  You will be the head of the construction.  Can you imagine how much this system is needed in a crowded city like New York?",
        }, {
            title: "Draw the Car Path",
            embed: "https://cloud.onlinegames.io/games/2021/4/draw-the-car-path/index-og.html",
            image: "https://www.onlinegames.io/media/posts/936/responsive/draw-the-car-path-xs.jpg",
            description: "Draw the Car Path is an online puzzle game where you guide cars to their parking spots by drawing their paths.  It sounds simple, but as you progress, the difficulty of solving the tangled cars increases.  You'll start with a single car in an empty parking lot, but soon, you'll have to manage multiple vehicles, all while making sure they don't crash into each other or the walls.  With 30 levels to complete, strategic thinking and precise drawing skills will be your best buddies!",
        }, {
            title: "Find It",
            embed: "https://cloud.onlinegames.io/games/2025/unity/find-it/index-og.html",
            image: "https://www.onlinegames.io/media/posts/940/responsive/Find-It-xs.jpg",
            description: "Looking for a cozy, sweet and oh-so adorable feel-good game?   Then Find It is the perfect game to play.  It's like wrapping yourself in a warm, fuzzy blanket but for your brain!  You start off in a kid's room, but it's not just any room.",
        }, {
            title: "Nuts and Bolts Puzzle",
            embed: "https://cloud.onlinegames.io/games/2025/unity/nuts-and-bolts-puzzle/index-og.html",
            image: "https://www.onlinegames.io/media/posts/965/responsive/nuts-and-bolts-puzzle-xs.jpg",
            description: "Ever gotten lost in a maze of planks and screws when trying to build an IKEA shelf?  Well, Nuts and Bolts Puzzle is like the opposite of that!  Instead of frantically trying to assemble stuff, you're gleefully taking everything apart and the best part is: no confusing instructions required.  In this fun online game on OnlineGames.",
        }]
        const randomGames = [{
            title: "Stickman Destruction",
            embed: "https://www.onlinegames.io/games/2021/unity3/stickman-destruction/index.html",
            image: "https://www.onlinegames.io/media/posts/233/responsive/Stickman-Destruction-xs.jpg",
            description: "How many parts can you divide a virtual character into?  Stickman Destruction is an action-oriented stickman ragdoll game in which you tear the virtual character apart a million times.  The whole point of this game is to break the Stickman's bones as much as possible by hitting him from right to left!  Use your creativity and strategically calculate how you can get the most points.",
        }, {
            title: "Cat Simulator",
            embed: "https://www.onlinegames.io/games/2022/unity4/cat-simulator/index.html",
            image: "https://www.onlinegames.io/media/posts/330/responsive/Cat-Simulator-Online-xs.jpg",
            description: "Purrr!  Cat Simulator is a game where you purrr a lot.  You are playing as a cat.  You have the option to choose your cat's species.",
        }, {
            title: "Archer Hero",
            embed: "https://www.onlinegames.io/games/2023/unity/archer-hero/index.html",
            image: "https://www.onlinegames.io/media/posts/364/responsive/Archer-Hero-Online-xs.jpg",
            description: "In Archer Hero, we give you the possibility to enter the world of mysticism and magic.  Begin the journey by testing your archery abilities and eliminating potential enemies.  You can select from a variety of bows, arrows, and targets in order to improve your shooting skills.  Every level brings new challenges and rewards.",
        }, {
            title: "Julie Beauty Salon",
            embed: "https://cloud.onlinegames.io/games/2021/1/julie-beauty-salon/index-og.html",
            image: "https://www.onlinegames.io/media/posts/1011/responsive/Julie-Beauty-Salon-xs.jpg",
            description: "Julie Beauty Salon is a glam up makeover game where you run a beauty salon.  Every makeover is a mini masterpiece in this fun, stylish browser game.  You're a beauty expert in charge of transforming a fabulous girl with bold makeup, trendy hairstyles, and colorful manicures.  If you've ever dreamed of being a stylist or just love mixing and matching beauty looks, this free game is perfect for you.",
        }, {
            title: "Pixel Driver",
            embed: "https://cloud.onlinegames.io/games/2021/unity3/pixel-driver/index-og.html",
            image: "https://www.onlinegames.io/media/posts/990/responsive/Pixel-Driver-xs.jpg",
            description: "Sometimes, you just crave something simple.  Nothing fancy.  No complicated missions or stressful tasks.  Just a pixel car, a colorful city, and the freedom to roam.",
        }, {
            title: "Troll Level",
            embed: "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html",
            image: "https://www.onlinegames.io/media/posts/857/responsive/troll-level-online-xs.jpg",
            description: "Okay, you asked for it!  Playing Troll Level Online will be a humbling experience because this is the troll game ever.  Get ready to feel like a complete failure while bursting into laughter!  Not every game offers that kind of combo, right?",
        }]
        localStorage.setItem('Sports Games', JSON.stringify(sportsGames))
        localStorage.setItem('Arcade Games', JSON.stringify(arcadeGames))
        localStorage.setItem('Puzzle Games', JSON.stringify(puzzleGames))
        localStorage.setItem('Random Games', JSON.stringify(randomGames))
    }, [])

    const batchIndex = useRef(0);
    function loadMore(text) {
            const cached = JSON.parse(localStorage.getItem(text));
            if (!cached?.videos) return;

            const total = cached.videos.length;
            const batchSize = 12;

            const start = batchIndex.current * batchSize;
            const nextVideos = [];

            for (let i = 0; i < batchSize; i++) {
                nextVideos.push(cached.videos[(start + i) % total]);
            }

            setCardList(nextVideos);

            batchIndex.current = (batchIndex.current + 1) % Math.ceil(total / batchSize);
    }
    return (
        <div className='homepage-main-container'>
            <header className='header-container'>
                <SearchBar />
                <TopNav pg={pg} loadMore={loadMore} setCardList={setCardList} setCategory={setCategory} all={all} setAll={setAll}/>
                <TopNav2 expl={expl} setResizeFacts={setResizeFacts} setShowSpace={setShowSpace} loadMore={loadMore} setCardList={setFactList} setCategory={setCategory} all={all} setAll={setAll}/>
                <TopNav3 myL={myL} trending={trending} setTrending={setTrending} cartoons={cartoons} setCartoons={setCartoons} loadMore={loadMore} setCardList={setCardList} setCategory={setCategory} all={all} setAll={setAll} />
                <TopNav4 stories={stories} all={all} setAll={setAll} trending={trending} setTrending={setTrending} cartoons={cartoons} setCartoons={setCartoons} crafts={crafts} setCrafts={setCrafts} setBookList={setBookList}/>
                <TopNav5 tunes={tunes} all={all} setAll={setAll} trending={trending} setTrending={setTrending} cartoons={cartoons} setCartoons={setCartoons} setTunesList={setTunesList} setExpTunesList={setExpTunesList} setMyTunesList={setMyTunesList} spotToken={spotToken}/>
                <TopNav6 disp={later} all={all} setAll={setAll} trending={trending} setTrending={setTrending} setCategory={setCategory} setTranslateList={setTranslateList} loadMore={loadMore} />
                <TopNav7 disp={games} setGaming={setGaming} all={all} setAll={setAll} trending={trending} setTrending={setTrending} cartoons={cartoons} setCartoons={setCartoons} crafts={crafts} setCrafts={setCrafts} setGameList={setGameList} />
                <TopNav8 disp={me} all={all} setAll={setAll} setCategory={setCategory} trending={trending} setTrending={setTrending} setMeInfo={setMeInfo}/>
                <TopNav9 disp={settings} trending={trending}/>
                <div className="balloon balloon1"></div>
                <div className="balloon balloon4"></div>
                <div className="balloon balloon5"></div>
            </header>
            <main className='home-page-main-cont'>
                <article className='sideNav-container'>
                    <SideNav setMeInfo={setMeInfo} setCrafts={setCrafts} setGameList={setGameList} setGaming={setGaming} setAll={setAll} setCartoons={setCartoons} setTrending={setTrending} setCardList={setCardList} setFactsList={setFactList} setTunesList={setTunesList} setCategory={setCategory} setWatchVid={setWatchVid} pg={pg} setPg={setPg} expl={expl} setExpl={setExpl} myL={myL} setMyL={setMyL} stories={stories} setStories={setStories} later={later} setLater={setLater} tunes={tunes} setTunes={setTunes} games={games} setGames={setGames} me={me} setMe={setMe} sett={settings} setSettings={setSettings} setTranslateList={setTranslateList} spotToken={spotToken}/>
                    <button className='loadMore-button' type='button' onClick={() => loadMore(category)} style={{display: pg ? 'flex' : 'none'}}>More</button>
                </article>
                <article className='main-window-container' style={{display: pg ? 'grid' : 'none'}}>
                    {cardList && cardList.map((video) => (
                        <VideoCard key={video.id} setVidId={setVidId} descript={video.descript} thumbnailSrc={video.thumbnail} videoId={video.id} videoTitle={video.title} creator={video.channel} when={video.when} setPg={setPg} disp={setWatchVid} />
                    ))}
                </article>
                <WatchPage disp={watchVid} setPg={setPg} video={vidId}/>
                <Explore resizeFacts={resizeFacts} showSpace={showSpace} disp={expl} factList={factList}/>
                <MyList disp={myL} all={all} trending={trending} cartoons={cartoons} progress={progress} setProgress={setProgress} compTask={compTask} setCompTask={setCompTask} stars={stars} setStars={setStars}/>
                <Stories disp={stories} all={all} trending={trending} cartoons={cartoons} crafts={crafts} bookList={bookList}/>
                <Translate disp={later} all={all} trending={trending} translateList={translateList} setTranslateList={setTranslateList} setMoons={setMoons}/>
                <Tunes tunes={tunes} all={all} trending={trending} cartoons={cartoons} tunesList={tunesList} expTunesList={expTunesList} myTunesList={myTunesList}/>
                <Games setGameSrc={setGameSrc} disp={games} setDisp={setGames} disp2={gaming} setDisp2={setGaming} gamesList={gameList}/>
                <GamePlayer disp2={gaming} setDisp={setGames} setDisp2={setGaming} gameSrc={gameSrc} setGameSrc={setGameSrc}/>
                <Me disp={me} me={all} pet={trending} stars={stars} compTask={compTask} moons={moons} orbs={orbs} setOrbs={setOrbs} meInfo={meInfo} setMeInfo={setMeInfo} all={all} trending={trending}/>
                <Settings disp={settings} />
            </main>

            <Intro />
        </div>
    )
}

export default HomePage