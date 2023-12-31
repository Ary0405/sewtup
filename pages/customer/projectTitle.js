import Link from 'next/link';
import '@/styles/routes/customer/ProjectTitle.scss'

export default function ProjectTitle() {
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
                    <input className='ProjectTitle__bottom--box--input' type='text' placeholder='What do you need done ?' />
                    <Link href="/customer/newOrder/projectDescription">
                        <button className='ProjectTitle__bottom--box--button'>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}