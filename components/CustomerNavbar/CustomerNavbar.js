import { useRouter } from 'next/router'
import './CustomerNavbar.scss'

export default function CustomerNavbar() {
    const router = useRouter();
    return (
        <div className='CustomerNavbar'>
            <input className='CustomerNavbar__input' type='text' placeholder='Search' />
            <div onClick={() => { router.push('/customer/newOrder/projectTitle') }} className='CustomerNavbar__right'>
                <p className='CustomerNavbar__right--icon'>+</p>
                <p className='CustomerNavbar__right--text'>Create</p>
            </div>
        </div>
    )
}