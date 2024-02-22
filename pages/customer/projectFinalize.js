import Image from 'next/image'
import Link from 'next/link'
import '@/styles/routes/customer/ProjectDescription.scss'
import { useEffect, useState } from 'react';
import { postOrder } from '@/operations/orders.fetch';
import { useRouter } from 'next/router';

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

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState([]);
    const [minBudget, setMinBudget] = useState(0);
    const [maxBudget, setMaxBudget] = useState(0);
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [attachments, setAttachments] = useState([]);

    useEffect(() => {
        const localTitle = localStorage.getItem('title');
        setTitle(localTitle);
        const localDescription = localStorage.getItem('description');
        const localSkills = localStorage.getItem('skills');
        const localMinBudget = localStorage.getItem('minBudget');
        const localMaxBudget = localStorage.getItem('maxBudget');
        const localExperience = localStorage.getItem('experience');
        const localLocation = localStorage.getItem('location');
        const localAttachments = localStorage.getItem('ImageUrls');
        setDescription(localDescription);
        setSkills(localSkills);
        setMinBudget(localMinBudget);
        setMaxBudget(localMaxBudget);
        setExperience(localExperience);
        setLocation(localLocation);
        setAttachments(JSON.parse(localAttachments));
        if(localMinBudget === null) setMinBudget(0);
    }, []);

    const postOrderUser = async () => {
        
        if(!title || title === '') {
            alert('Please enter title');
            return;
        }

        if(!description || description === '') {
            alert('Please enter description');
            return;
        }

        if(!minBudget){
            alert('Please enter minimum budget');
            return;
        }

        if(!maxBudget){
            alert('Please enter maximum budget');
            return;
        }

        // if(!experience){
        //     alert('Please enter experience');
        //     return;
        // }

        if(!location){
            alert('Please enter location');
            return;
        }

        if(minBudget > maxBudget){
            alert('Minimum budget cannot be greater than maximum budget');
            return;
        }

        if(minBudget === '') 
            setMinBudget(0);

        const data = {
            title,
            description,
            location,
            attachments: attachments ? attachments : [],
            skills: [],
            userId: user.id,
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
            localStorage.removeItem('ImageUrls');
            router.push('/customer/customerDashboard');
        }
        else {
            console.log(response);
            alert('Something went wrong');
        }
    }

    return (
        <div className="ProjectDescription">
            <div className="ProjectDescription__top">
                <div className="ProjectDescription__top--box">
                    <p className='ProjectDescription__top--box--text'>Tell us what needs to be done</p>
                    <p className='ProjectDescription__top--box--desc'>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay them. Pay the freelancer only when you are 100% satisfied with their work.</p>
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
                        {/* <div className='ProjectDescription__bottom--box__attach--logo'>
                            <Image className='ProjectDescription__bottom--box__attach--logo__image' src='/Images/Customer/attach_files.png' width={30} height={30} />
                            <input type='file' />
                        </div>
                        <p className='ProjectDescription__bottom--box__attach--text'>Upload any images or documents that might be helpful in explaining your brief here (Max file size: 10MB)</p> */}
                        {
                            attachments.length > 0 ? (
                                <div className='ProjectDescription__bottom--box__attach--images'>
                                    {
                                        attachments.map((attachment, index) => {
                                            return (
                                                <div key={index} className='ProjectDescription__bottom--box__attach--images__image'>
                                                    <Image src={attachment} width={100} height={100} />
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                    <div className='ProjectDescription__bottom--box__skills'>
                        <p className='ProjectDescription__bottom--box__skills--header'>Enter Skills required</p>
                        <input type='text' className='ProjectDescription__bottom--box__skills--input' placeholder='Enter skills required' value={skills} disabled />
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