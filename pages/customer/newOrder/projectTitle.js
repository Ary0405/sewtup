import { useState } from 'react'
import '../../../styles/routes/newOrder/ProjectTitle.scss'
import { useRouter } from 'next/router';
import useOrder from '@/hooks/useOrder';

export default function ProjectTitle() {

    const [title, setTitle] = useState('');
    const { setOrderTitle } = useOrder();
    const router = useRouter();
    const handleClick = () => {
        localStorage.setItem('title', title);
        setOrderTitle(title)
        router.push('/customer/newOrder/projectTitle')
    }
    return (
        <div className="ProjectTitle">
            <div className="ProjectTitle__top">
                <div className='ProjectTitle__top--box'>
                    <p className='ProjectTitle__top--box--text'>Tell us what needs to be done</p>
                    <p className='ProjectTitle__top--box--desc'>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay them. Pay the freelancer only when you are 1005 satisfied with their work.</p>
                </div>
            </div>
            <div className='ProjectTitle__bottom'>
                <div className='ProjectTitle__bottom--box'>
                    <input onChange={(e) => setTitle(e.target.value)} className='ProjectTitle__bottom--box--input' type='text' placeholder='What do you need done ?' />
                    <button className='ProjectTitle__bottom--box--button'>Next</button>
                </div>
            </div>
        </div>
    )
}