import Image from 'next/image'
import Link from 'next/link'
import '@/styles/routes/customer/ProjectDescription.scss'
import useAuth from '@/hooks/useAuth';
import { useEffect, useState } from 'react';

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

export default function ProjectDescription() {

    const { description, setDescription, skills, setSkills, minBudget, setMinBudget, maxBudget, setMaxBudget } = useAuth();
    const [title, setTitle] = useState('');

    useEffect(() => {
        const localTitle = localStorage.getItem('title');
        if (localTitle) {
            setTitle(localTitle);
        }
        const localDescription = localStorage.getItem('description');
        if (localDescription) {
            setDescription(localDescription);
        }
        const localSkills = localStorage.getItem('skills');
        if (localSkills) {
            setSkills(localSkills);
        }
        const localMinBudget = localStorage.getItem('minBudget');
        if (localMinBudget) {
            setMinBudget(localMinBudget);
        }
        const localMaxBudget = localStorage.getItem('maxBudget');
        if (localMaxBudget) {
            setMaxBudget(localMaxBudget);
        }
    }, []);

    return (
        <div className="ProjectDescription">
            <div className="ProjectDescription__top">
                <div className="ProjectDescription__top--box">
                    <p className='ProjectDescription__top--box--text'>Tell us what needs to be done</p>
                    <p className='ProjectDescription__top--box--desc'>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay them. Pay the freelancer only when you are 1005 satisfied with their work.</p>
                </div>
            </div>
            <div className="ProjectDescription__bottom">
                <div className="ProjectDescription__bottom--box">
                    <p className='ProjectDescription__bottom--box__heading'>{title}</p>
                    <hr />
                    <div className='ProjectDescription__bottom--box__desc'>
                        <p className='ProjectDescription__bottom--box__desc--header'>Project Description</p>
                        <input className='ProjectDescription__bottom--box__desc--input' type='text' placeholder='Describe your project here...' value={description} onChange={(e) => {
                            setDescription(e.target.value);
                            localStorage.setItem('description', e.target.value);
                        }} />
                    </div>
                    <div className='ProjectDescription__bottom--box__attach'>
                        <div className='ProjectDescription__bottom--box__attach--logo'>
                            <Image className='ProjectDescription__bottom--box__attach--logo__image' src='/Images/Customer/attach_files.png' width={30} height={30} />
                            <input type='file' />
                        </div>
                        <p className='ProjectDescription__bottom--box__attach--text'>Upload any images or documents that might be helpful in explaining your brief here (Max file size: 10MB)</p>
                    </div>
                    <div className='ProjectDescription__bottom--box__skills'>
                        <p className='ProjectDescription__bottom--box__skills--header'>Enter Skills required</p>
                        <input type='text' placeholder='Enter Skills' value={skills} onChange={(e) => {
                            setSkills(e.target.value);
                            localStorage.setItem('skills', e.target.value);
                        }
                        } />
                    </div>
                    <div className='ProjectDescription__bottom--box__budget'>
                        <p className='ProjectDescription__bottom--box__budget--heading'>What is your estimated budget</p>
                        <div className='ProjectDescription__bottom--box__budget--text'>
                            <input className='ProjectDescription__bottom--box__budget--text__max' type='number' placeholder='Min Budget' value={minBudget} onChange={(e) => {
                                setMinBudget(e.target.value);
                                localStorage.setItem('minBudget', e.target.value);
                            }
                            } />
                            <input className='ProjectDescription__bottom--box__budget--text__min' type='number' placeholder='Max Budget' value={maxBudget} onChange={(e) => {
                                setMaxBudget(e.target.value);
                                localStorage.setItem('maxBudget', e.target.value);
                            }
                            } />
                        </div>
                    </div>
                    <div className='ProjectDescription__bottom--box__buttons'>
                        <div className='ProjectDescription__bottom--box__buttons--back'>Back</div>
                        <Link href="/customer/newOrder/projectFinalize">
                            <div className='ProjectDescription__bottom--box__buttons--next'>Next</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}