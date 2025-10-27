import '../styles/explCard.css'

function ExplCard({factImg, factTitle, setShowFacts, setWhichFact}) {
    function showFactsCardFunc(e) {
        setShowFacts(true)
        setWhichFact(e.target.value)
    }
    const imgUrl = factImg
    return (
        <section className='explCard-main-container' style={{backgroundImage: `url(${imgUrl})`}}>
            <p className='explCard-title'>{factTitle}</p>
            <button className='explCard-info' value={factTitle} onClick={showFactsCardFunc}>{`click here for more facts about ${factTitle}`}</button>
        </section>
    )
}
export default ExplCard