import './CustomerNavbar.scss'

export default function CustomerNavbar() {
    return (
        <div className='CustomerNavbar'>
            <input className='CustomerNavbar__input' type='text' placeholder='Search'/>
            <div className='CustomerNavbar__right'>
                <p className='CustomerNavbar__right--icon'>+</p>
                <p className='CustomerNavbar__right--text'>Create</p>
            </div>
        </div>
    )
}