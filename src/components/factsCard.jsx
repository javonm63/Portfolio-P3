import { exploreHooks } from '../hooks/homepageHooks'
import { useEffect } from 'react'
import '../styles/factsCard.css'

function FactsCard({resizeFacts, showSpace, disp, setDisp, whichFact}) {
    const colorHook = exploreHooks()
    const showColorFcts = colorHook.showColorFcts
    const setShowColorFcts = colorHook.setShowColorFcts

    function closePopup() {
        setDisp(false)
    }
    useEffect(() => {
        function setColor() {
            setShowColorFcts(true)
        }
        setColor()
    }, [])
    const factsTitleArr = []
    const factsArr = []
    try {
        if (showSpace === 'animals') {
            const factsDb = JSON.parse(localStorage.getItem('Animal Facts'))
            const facts = factsDb.facts
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const characteristics = thisFact.characteristics
                const {color, diet, group, group_behavior, habitat, height, lifespan, location, name_of_young, prey, top_speed, weight} = characteristics
                factsArr.push(color, diet, group, group_behavior, habitat, height, lifespan, location, name_of_young, prey, top_speed, weight)
                factsTitleArr.push('Thier color: ', 'What they eat: ', 'Thier group: ', 'Group behavior: ', 'Thier habitat: ', 'How tall they are: ', 'They live for: ', 'Where they live: ', 'Babies are called: ', 'Known Preys: ','Thier speed: ', 'Thier weight: ')
            }
        } else if (showSpace === 'space') {
            const factsDb = JSON.parse(localStorage.getItem('Space Facts'))
            const facts = factsDb.facts
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const {name, distance_light_year, period, temperature} = thisFact
                factsArr.push(name, distance_light_year, period, temperature)
                factsTitleArr.push('Planet name: ', 'Distance from Earth: ', 'Days in a Year: ', 'Temperature: ')
            }
        } else if (showSpace === 'world') {
            const factsDb = JSON.parse(localStorage.getItem('World Facts'))
            const facts = factsDb.facts 
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const {name, capital, population, refugees, telephone_country_codes, tourists} = thisFact
                factsArr.push(name, capital, population, refugees, telephone_country_codes, tourists)
                factsTitleArr.push('Country name: ', 'Capital city: ', 'Population size: ', 'refugees est: ', 'Area code: ', 'Tourist atr: ')
            }
        } else if (showSpace === 'foods') {
            const factsDb = JSON.parse(localStorage.getItem('Food Facts'))
            const facts = factsDb.facts 
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const {name, calories, carbohydrates_total_g, cholesterol_mg, fat_total_g, fiber_g, potassium_mg, protien_g, serving_size_g, sodium_mg, sugar_g} = thisFact
                factsArr.push(name, calories, carbohydrates_total_g, cholesterol_mg, fat_total_g, fiber_g, potassium_mg, protien_g, serving_size_g, sodium_mg, sugar_g)
                factsTitleArr.push('Food name: ', 'Calories: ', 'Total carbs[g]: ', 'choleratorol[mg]: ', 'Total fat[g]: ', 'Fiber[g]: ', 'Potassium[mg: ', 'Protien[g]: ', 'Serving size[g]: ', 'Sodium[mg]: ', 'Sugar[g]: ')
            }
        } else if (showSpace === 'art') {
            const factsDb = JSON.parse(localStorage.getItem('Art Facts'))
            const facts = factsDb.facts 
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const {name, artist, date} = thisFact
                factsArr.push(name, artist, date)
                factsTitleArr.push('Art name: ', 'Artist: ', 'Date created: ')
            }
        } else if (showSpace === 'colors') {
            const factsDb = JSON.parse(localStorage.getItem('Color Facts'))
            const facts = factsDb.facts 
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const {name, hex, hsl, rgb} = thisFact
                factsArr.push(name, hex, hsl, rgb)
                factsTitleArr.push('Color: ', 'hex: ', 'hsl: ', 'rgb: ')
            }
        } else if (showSpace === 'kindness') {
            const factsDb = JSON.parse(localStorage.getItem('Kindness Facts'))
            const facts = factsDb.facts 
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const {text, author} = thisFact
                factsArr.push(text, author)
                factsTitleArr.push('Quote: ', 'Author: ')
            }
        } else if (showSpace === 'history') {
            const factsDb = JSON.parse(localStorage.getItem('History Facts'))
            const facts = factsDb.facts 
            const thisFact = facts.find((fact) => fact.name === whichFact)    
            if (thisFact === undefined) {
                return
            } else {
                const {name, event} = thisFact
                factsArr.push(name, event)
                factsTitleArr.push('Year: ', 'Event: ')
            }
        } 
    } catch (err) {
        console.log(err)
    }
    
    return (
        <article className='factsCard-main-container' style={{display: disp ? 'flex' : 'none', height: resizeFacts ? "fit-content" : '50vh'}}>
            <button className='exit-button' onClick={closePopup}>X</button>
            <h3 className='popup-title'>FUN FACTS</h3>
            <div className='details-main-container'>
                <section className='details-titles-cont'>
                    {factsTitleArr && factsTitleArr.map((title, i) => (
                        <p key={i} className='factCard-fact-title'>{title}</p>
                    ))}
                </section>
                <section className='details-cont'>
                    {factsArr && factsArr.map((fact, i) => (
                        <p key={i} className='factCard-fact'>{fact}</p>
                    ))}
                </section>
            </div>
            <div className='color-display-container' style={{display: showColorFcts ? 'flex' : 'none', backgroundColor: showColorFcts ? factsArr[3] : 'rgba(0, 0, 0, 0)'}}></div>
        </article>
    )
}
export default FactsCard