import '../styles/routes/Browse.scss';
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import Filter from "@/components/Filter/Filter"
import img from '../public/Images/img.png';
import Image from 'next/image';

export default function ProjectTitle() {
    return (
        <div className="Browse">
            <div className="Browse__top">
                <div className="Browse__top--box">
                    <div className="Browse__top--box-child">
                        <p className="Browse__top--box--column--text">
                            Browse through a diverse selection of projects, each with its own requirements and style.
                        </p>
                        <p className="Browse__top--box--column--desc">
                            Whether you're an experienced designer looking for your next creative challenge or a newcomer eager to showcase
                            your talent, our platform offers you a world of opportunities.
                        </p>
                        <div className="Browse__top--box--column--input-container">
                            <div className="Browse__top--box--column--input-wrapper">
                                <input className="Browse__top--box--column--input" type="text" placeholder="Search projects" />
                                <button className="Browse__top--box--column--button">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="Browse__top--box-child">
                        <Image className="Browse__top--box--image" src={'/Images/img.png'} width={400} height={300} />
                    </div>
                </div>
            </div>
            <div className='Browse__bottom'>

                <ProjectItem />
                <Filter />

            </div>
        </div>
    );
}
