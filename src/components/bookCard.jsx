import '../styles/bookCard.css'

function BookCard({bookUrl, setShow}) {
    function showBookDescription() {
        setShow(true)
    }
    return (
        <button className='bookCard-main-container' style={{backgroundImage: bookUrl}} onClick={showBookDescription}>
            Coming Soon!
        </button>
    )
}

export default BookCard