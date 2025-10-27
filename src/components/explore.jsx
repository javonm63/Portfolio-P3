import '../styles/explore.css'
import { exploreHooks } from '../hooks/homepageHooks'
import ExplCard from './explCard'
import FactsCard from './factsCard'

function Explore({resizeFacts, showSpace, disp, factList}) {
    const exploreHook = exploreHooks()
    const showFacts = exploreHook.showFacts
    const setShowFacts = exploreHook.setShowFacts
    const whichFact = exploreHook.whichFact
    const setWhichFact = exploreHook.setWhichFact

    return (
        <article className='explore-main-container' style={{display: disp ? 'grid' : 'none'}}>
            {factList && factList.map((fact, i) => (
                <ExplCard key={i} factTitle={fact.name} factImg={fact.img} setShowFacts={setShowFacts} setWhichFact={setWhichFact}/>
            ))}
            <FactsCard resizeFacts={resizeFacts} showSpace={showSpace} disp={showFacts} setDisp={setShowFacts} whichFact={whichFact}/>
        </article>
    )
}

export default Explore