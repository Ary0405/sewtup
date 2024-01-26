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

    const { description, setDescription, skills, setSkills, minBudget, setMinBudget, maxBudget, setMaxBudget, experience, setExperience, location, setLocation } = useAuth();
    const [title, setTitle] = useState('');

    useEffect(() => {
        const localTitle = localStorage.getItem('title');
        if (localTitle && localTitle !== '') {
            setTitle(localTitle);
        }
        const localDescription = localStorage.getItem('description');
        if (localDescription && localDescription !== '') {
            setDescription(localDescription);
        }
        const localSkills = localStorage.getItem('skills');
        if (localSkills && localSkills !== '') {
            setSkills(localSkills);
        }
        const localMinBudget = localStorage.getItem('minBudget');
        if (localMinBudget && localMinBudget !== '') {
            setMinBudget(localMinBudget);
        }
        const localMaxBudget = localStorage.getItem('maxBudget');
        if (localMaxBudget && localMaxBudget !== '') {
            setMaxBudget(localMaxBudget);
        }
        const localExperience = localStorage.getItem('experience');
        if (localExperience && localExperience !== '') {
            setExperience(localExperience);
        }
        const localLocation = localStorage.getItem('location');
        if (localLocation && localLocation !== '') {
            setLocation(localLocation);
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
                    <div className='ProjectDescription__bottom--box__location'>
                        <p className='ProjectDescription__bottom--box__location--header'>Where do you want to work?</p>
                        <div className='ProjectDescription__bottom--box__location--text'>
                            <select className='ProjectDescription__bottom--box__location--text__select' onChange={(e) => {
                                localStorage.setItem('location', e.target.value);
                            }}>
                                <option value=''>Select Location</option>
                                <option value='ANDHRA_PRADESH'>Andhra Pradesh</option>
                                <option value='ARUNACHAL_PRADESH'>Arunachal Pradesh</option>
                                <option value='ASSAM'>Assam</option>
                                <option value='BIHAR'>Bihar</option>
                                <option value='CHHATTISGARH'>Chhattisgarh</option>
                                <option value='GOA'>Goa</option>
                                <option value='GUJARAT'>Gujarat</option>
                                <option value='HARYANA'>Haryana</option>
                                <option value='HIMACHAL_PRADESH'>Himachal Pradesh</option>
                                <option value='JHARKHAND'>Jharkhand</option>
                                <option value='KARNATAKA'>Karnataka</option>
                                <option value='KERALA'>Kerala</option>
                                <option value='MADHYA_PRADESH'>Madhya Pradesh</option>
                                <option value='MAHARASHTRA'>Maharashtra</option>
                                <option value='MANIPUR'>Manipur</option>
                                <option value='MEGHALAYA'>Meghalaya</option>
                                <option value='MIZORAM'>Mizoram</option>
                                <option value='NAGALAND'>Nagaland</option>
                                <option value='ODISHA'>Odisha</option>
                                <option value='PUNJAB'>Punjab</option>
                                <option value='RAJASTHAN'>Rajasthan</option>
                                <option value='SIKKIM'>Sikkim</option>
                                <option value='TAMIL_NADU'>Tamil Nadu</option>
                                <option value='TELANGANA'>Telangana</option>
                                <option value='TRIPURA'>Tripura</option>
                                <option value='UTTAR_PRADESH'>Uttar Pradesh</option>
                                <option value='UTTARAKHAND'>Uttarakhand</option>
                                <option value='WEST_BENGAL'>West Bengal</option>
                                <option value='REMOTE'>Remote</option>
                                <option value='OTHER'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='ProjectDescription__bottom--box__experience'>
                        <p className='ProjectDescription__bottom--box__experience--header'>Whats the required experience level?</p>
                        <div className='ProjectDescription__bottom--box__experience--text'>
                            <select className='ProjectDescription__bottom--box__experience--text__select' onChange={(e) => {
                                localStorage.setItem('experience', e.target.value);
                            }}>
                                <option value=''>Select Experience</option>
                                <option value='ENTRY_LEVEL'>Entry Level</option>
                                <option value='INTERMEDIATE'>Intermediate</option>
                                <option value='EXPERT'>Expert</option>
                            </select>
                        </div>
                    </div>
                    <div className='ProjectDescription__bottom--box__buttons'>
                        <div className='ProjectDescription__bottom--box__buttons--back'>Back</div>
                        <Link href="/customer/projectFinalize">
                            <div className='ProjectDescription__bottom--box__buttons--next'>Next</div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )


}