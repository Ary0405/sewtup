import { getOrderById } from "@/services/order.service";
import '@/styles/routes/customer/project.scss';
import CustomerNavbar from "@/components/CustomerNavbar/CustomerNavbar";
import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar";
import { acceptBid } from "@/operations/bids.fetch";

export async function getServerSideProps(context) {

    const user = context.req.session.user;
    const projectId = parseInt(context.params.id);
    const userId = user.id;

    const project = await getOrderById(projectId);

    if (user === undefined || project === null || project === undefined || user === null || project.userId !== userId) {
        return {
            redirect: {
                permanent: false,
                destination: "/customer/dashboard",
            },
        };
    }

    project.date = JSON.parse(JSON.stringify(project.date));

    return {
        props: { user: user, project: project }
    }

}

function project({ user, project }) {

    const accBid = async (bidId) => {

        const data = {
            orderId: project.id,
            bidId: bidId,
            userId: user.id
        }
        const respone = await acceptBid(data);
        if (respone.status === 200) {
            alert("Bid accepted successfully");
        }
        else {
            alert("There is some problem");
            window.location.reload();
        }
    }

    return (
        <div className="parent">
            <div className="div1">
                <CustomerSidebar user={user} />
            </div>
            <div className="div2">
                <CustomerNavbar />
            </div>
            <div className="div3">
                <div className="project__data">
                    <div className="project__data__title">
                        <h1>{project.title}</h1>
                    </div>
                    <div className="project__data__description">
                        <p>{project.description}</p>
                    </div>
                    <div className="project__data__date">
                        <p>{project.date}</p>
                    </div>
                    <div className="project__data__status">
                        <p>{project.status}</p>
                    </div>
                </div>
                <div className="project__bids">
                    {project.Bid.map((bid, index) => (
                        <div className="project__bids__bid" key={index}>
                            <hr />
                            <div className="project__bids__bid__description">
                                <p>{bid.proposal}</p>
                            </div>
                            <div className="project__bids__bid__price">
                                <p>{bid.amount}</p>
                            </div>
                            <div className="project__bids__bid__date">
                                <p>{bid.days}</p>
                            </div>
                            <div className="project__bids__bid__status">
                                <p>{bid.status}</p>
                            </div>
                            {
                                bid.status !== 'ACCEPTED' ?
                                    <div className="project__bids__bid__button">
                                        <p className="project__bids__bid__button__text"
                                            onClick={() => accBid(bid.id)}
                                        >Accept</p>
                                    </div> : null
                            }
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default project