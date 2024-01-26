import Image from 'next/image'
import Link from 'next/link'
import '@/styles/routes/customer/ProjectDescription.scss'
import { useEffect, useState } from 'react';
import { postOrder } from '@/operations/orders.fetch';

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

export default function ProjectFinalize({ user }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState([]);
    const [minBudget, setMinBudget] = useState(0);
    const [maxBudget, setMaxBudget] = useState(0);
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        const localTitle = localStorage.getItem('title');
        setTitle(localTitle);
        const localDescription = localStorage.getItem('description');
        const localSkills = localStorage.getItem('skills');
        const localMinBudget = localStorage.getItem('minBudget');
        const localMaxBudget = localStorage.getItem('maxBudget');
        const localExperience = localStorage.getItem('experience');
        const localLocation = localStorage.getItem('location');
        setDescription(localDescription);
        setSkills(localSkills);
        setMinBudget(localMinBudget);
        setMaxBudget(localMaxBudget);
        setExperience(localExperience);
        setLocation(localLocation);

    }, []);

    const postOrderUser = async () => {
        if (!title || title === '' || !description || description === '' || !minBudget || minBudget === '' || !maxBudget || maxBudget === '' || !experience || experience === '' || !location || location === '') {
            alert('Please fill all the fields');
            return;
        }

        const data = {
            title,
            description,
            location,
            attachments: [],
            skills: [],
            userId: user.id,
            experience,
            maxBudget: parseInt(maxBudget),
            minBudget: parseInt(minBudget)
        }

        const response = await postOrder(data);
        if (response.status === 200) {
            alert('Order created successfully');
            localStorage.removeItem('title');
            localStorage.removeItem('description');
            localStorage.removeItem('skills');
            localStorage.removeItem('minBudget');
            localStorage.removeItem('maxBudget');
            localStorage.removeItem('experience');
            localStorage.removeItem('location');
            // window.location.href = '/customer/customerDashboard';
        }
        else {
            alert('Something went wrong');
        }
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
                        <input type='text' className='ProjectDescription__bottom--box__skills--input' placeholder='Enter skills required' />
                    </div>
                    <div className='ProjectDescription__bottom--box__budget'>
                        <p className='ProjectDescription__bottom--box__budget--heading'>What is your estimated budget</p>
                        <div className='ProjectDescription__bottom--box__budget--text'>
                            <p className='ProjectDescription__bottom--box__budget--text__max'>INR {minBudget} -</p>
                            <p className='ProjectDescription__bottom--box__budget--text__min'>INR {maxBudget}</p>
                        </div>
                    </div>
                    <div className='ProjectDescription__bottom--box__experience'>
                        <p className='ProjectDescription__bottom--box__experience--text'>{experience}</p>
                    </div>
                    <div className='ProjectDescription__bottom--box__location'>
                        <p className='ProjectDescription__bottom--box__location--text'>{location}</p>
                    </div>
                    <div className='ProjectDescription__bottom--box__buttons'>
                        <div className='ProjectDescription__bottom--box__buttons--back'>No, I want to edit</div>
                        <div className='ProjectDescription__bottom--box__buttons--next'
                            onClick={postOrderUser}
                        >Yes, post my order</div>
                    </div>
                </div>
            </div>
        </div>
    )
}