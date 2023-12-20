import Image from 'next/image'
import Link from 'next/link'
import '@/styles/routes/customer/ProjectDescription.scss'

export default function ProjectDescription() {
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
                        <input className='ProjectDescription__bottom--box__desc--input' type='text' />
                    </div>
                    <div className='ProjectDescription__bottom--box__attach'>
                        <div className='ProjectDescription__bottom--box__attach--logo'>
                            <Image className='ProjectDescription__bottom--box__attach--logo__image' src='/Images/Customer/attach_files.webp' width={30} height={30} />
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
                            <input className='ProjectDescription__bottom--box__budget--text__max' type='number' placeholder='Min Budget' />
                            <input className='ProjectDescription__bottom--box__budget--text__min' type='number' placeholder='Max Budget' />
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