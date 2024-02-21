import '@/styles/routes/designer/Browse.scss';
import BrowseItem from "@/components/BrowseItem/BrowseItem";
import Filter from "@/components/Filter/Filter";
import Image from 'next/image';
import Bid from '@/components/Bid/Bid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { browseProjects } from '@/services/order.service';
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


    const projects = await browseProjects();

    projects.forEach((project) => {
        project.date = JSON.parse(JSON.stringify(project.date));
    });

    return {
        props: { projects: projects, user: user },
    }

}

export default function ProjectTitle({ projects, user }) {

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
                            {/* <div className="Browse__top--box--column--input-wrapper"> */}
                                <input className="Browse__top--box--column--input" type="text" placeholder="Search projects" />
                                {/* <FontAwesomeIcon icon={faSearch} /> */}
                                <button className="Browse__top--box--column--button">Search Job</button>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="Browse__top--box-child">
                        <Image className="Browse__top--box--image" src={'/Images/img.png'} width={400} height={300} />
                    </div>
                </div>
            </div>
            <div className='Browse__bottom'>

                <div className="Browse__bottom--order">
                    {
                        projects.map((project) => {
                            return (
                                <div index={project.id} key={project.id} >
                                    <BrowseItem order={project} />

                                </div>
                            )
                        })
                    }
                </div>

                <Filter />

            </div>
        </div>
    );
}
