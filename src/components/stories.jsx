import { storiesBookHook } from '../hooks/homepageHooks'
import '../styles/stories.css'
import BookCard from './bookCard'
import BookInfoCard from './bookInfoCard'

function Stories({disp, all, trending, cartoons, crafts, bookList}) {
    const bookHooks = storiesBookHook()
    const showBookDescrip = bookHooks.showBookDescrip
    const setShowBookDescrip = bookHooks.setShowBookDescrip
    

    return ( 
        <article className='stories-page-container' style={{display: disp ? 'flex' : 'none'}}>
            <section className='stories-all-container' style={{display: all ? 'grid' : 'none'}}>
                <BookCard setShow={setShowBookDescrip} />
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
            </section>
            <section className='stories-history-container' style={{display: trending ? 'grid' : 'none'}}>
                <BookCard setShow={setShowBookDescrip} />
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
            </section>
            <section className='stories-mystery-container' style={{display: cartoons ? 'grid' : 'none'}}>
                <BookCard setShow={setShowBookDescrip} />
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
            </section>
            <section className='stories-cooking-container' style={{display: crafts ? 'grid' : 'none'}}>
                <BookCard setShow={setShowBookDescrip} />
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
                <BookCard setShow={setShowBookDescrip}/>
            </section>

            <BookInfoCard disp={showBookDescrip} setDisp={setShowBookDescrip}/>
        </article>
    )
}

export default Stories