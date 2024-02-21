import './CustomerNavbar.scss'
import { useRouter } from 'next/router'


export default function CustomerNavbar() {

    const router = useRouter();

    return (
        <div className='CustomerNavbar'>
            <input className='CustomerNavbar__input' type='text' placeholder='Search'/>
            <div className='CustomerNavbar__right' onClick={() => {
                router.push('/customer/projectTitle')
            }
            }>
                <p className='CustomerNavbar__right--icon'>+</p>
                <p className='CustomerNavbar__right--text'>Create</p>
            </div>
        </div>
    )
}