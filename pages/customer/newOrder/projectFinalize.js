import Image from 'next/image'
import '../../../styles/routes/newOrder/ProjectDescription.scss'

export default function ProjectFinalize() {
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
                    <p className='ProjectDescription__bottom--box__heading'>Custom Silk Outfit with Embroidery</p>
                    <hr />
                    <div className='ProjectDescription__bottom--box__desc'>
                        <p className='ProjectDescription__bottom--box__desc--header'>Project Description</p>
                        <p className='ProjectDescription__bottom--box__desc--text'>Yo yo yoyoyoyoyoyo</p>
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
                        <input type='text' />
                    </div>
                    <div className='ProjectDescription__bottom--box__budget'>
                        <p className='ProjectDescription__bottom--box__budget--heading'>What is your estimated budget</p>
                        <div className='ProjectDescription__bottom--box__budget--text'>
                            <p className='ProjectDescription__bottom--box__budget--text__max'>INR 8000 - </p>
                            <p className='ProjectDescription__bottom--box__budget--text__min'>INR 10000</p>
                        </div>
                    </div>
                    <div className='ProjectDescription__bottom--box__buttons'>
                        <div className='ProjectDescription__bottom--box__buttons--back'>No, I want to edit</div>
                        <div className='ProjectDescription__bottom--box__buttons--next'>Yes, post my order</div>
                    </div>
                </div>
            </div>
        </div>
    )
}