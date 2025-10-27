import '../styles/bookInfoCard.css'

function BookInfoCard({disp, setDisp}) {
    function closePopup() {
        setDisp(false)
    }
    return (
        <article className='bookInfoCard-main-container' style={{display: disp ? 'flex' : 'none'}}>
            <button className='exit-button' onClick={closePopup}>X</button>
        </article>
    )
}

export default BookInfoCard