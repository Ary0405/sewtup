import Image from 'next/image'
import Link from 'next/link'
import '@/styles/routes/customer/ProjectDescription.scss'
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

export default function ProjectFinalize() {

    // const title = localStorage.getItem('title');
    // const description = localStorage.getItem('description');
    // const skills = localStorage.getItem('skills');
    // const minBudget = localStorage.getItem('minBudget');
    // const maxBudget = localStorage.getItem('maxBudget');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [minBudget, setMinBudget] = useState(0);
    const [maxBudget, setMaxBudget] = useState(0);

    useEffect(() => {
        const localTitle = localStorage.getItem('title');
        console.log(localTitle, 'localTitle');
        if (!localTitle || localTitle === '') {
            window.location.href = '/customer/projectTitle';
        }
        setTitle(localTitle);
        const localDescription = localStorage.getItem('description');
        const localSkills = localStorage.getItem('skills');
        const localMinBudget = localStorage.getItem('minBudget');
        const localMaxBudget = localStorage.getItem('maxBudget');
        if (!localDescription || localDescription === '' || !localSkills || localSkills === '' || !localMinBudget || localMinBudget === '' || !localMaxBudget || localMaxBudget === '') {
            window.location.href = '/customer/projectDescription';
        }
        setDescription(localDescription);
        setSkills(localSkills);
        setMinBudget(localMinBudget);
        setMaxBudget(localMaxBudget);

    }, []);

    const postOrder = async () => {
        // post

        // clear local storage
        localStorage.removeItem('title');
        localStorage.removeItem('description');
        localStorage.removeItem('skills');
        localStorage.removeItem('minBudget');
        localStorage.removeItem('maxBudget');

    }

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
                        <p className='ProjectDescription__bottom--box__desc--text'>{description}</p>
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
                        <input type='text' className='ProjectDescription__bottom--box__skills--input' placeholder='Enter skills required' value={skills} onChange={(e) => {
                            localStorage.setItem('skills', e.target.value);
                        }
                        } />
                    </div>
                    <div className='ProjectDescription__bottom--box__budget'>
                        <p className='ProjectDescription__bottom--box__budget--heading'>What is your estimated budget</p>
                        <div className='ProjectDescription__bottom--box__budget--text'>
                            <p className='ProjectDescription__bottom--box__budget--text__max'>INR {minBudget} -</p>
                            <p className='ProjectDescription__bottom--box__budget--text__min'>INR {maxBudget}</p>
                        </div>
                    </div>
                    <div className='ProjectDescription__bottom--box__buttons'>
                        <div className='ProjectDescription__bottom--box__buttons--back'>No, I want to edit</div>
                        <div className='ProjectDescription__bottom--box__buttons--next'
                            onClick={postOrder}
                        >Yes, post my order</div>
                    </div>
                </div>
            </div>
        </div>
    )
}