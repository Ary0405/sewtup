import Link from 'next/link';
import '@/styles/routes/customer/ProjectTitle.scss'
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

export async function getServerSideProps(context) {

    const user = context.req.session.user;

    if (user === undefined) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    return {
        props: { user: user },
    }

}

export default function ProjectTitle() {

    const { title, setTitle } = useAuth();

    useEffect(() => {
        const localTitle = localStorage.getItem('title');
        if (localTitle) {
            setTitle(localTitle);
        }
    },[]);

    return (
        <div className="ProjectTitle">
            <div className="ProjectTitle__top">
                <div className='ProjectTitle__top--box'>
                    <p className='ProjectTitle__top--box--text'>Tell us what needs to be done</p>
                    <p className='ProjectTitle__top--box--desc'>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay them. Pay the freelancer only when you are 100% satisfied with their work.</p>
                </div>
            </div>
            <div className='ProjectTitle__bottom'>
                <div className='ProjectTitle__bottom--box'>
                    <input className='ProjectTitle__bottom--box--input' type='text' placeholder='What do you need done ?' value={title} onChange={(e) => {
                        setTitle(e.target.value);
                        localStorage.setItem('title', e.target.value);
                    }} />
                    <Link href="/customer/projectDescription">
                        <button className='ProjectTitle__bottom--box--button'>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}