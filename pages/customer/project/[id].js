import { getOrderById } from "@/services/order.service";
import '@/styles/routes/customer/project.scss';
import CustomerNavbar from "@/components/CustomerNavbar/CustomerNavbar";
import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar";
import { acceptBid } from "@/operations/bids.fetch";
import DashHeader from "@/components/DashTable/DashHeader/DashHeader";
import DashRow from "@/components/DashTable/DashRow/DashRow";

export async function getServerSideProps(context) {

    const user = context.req.session.user;
    const projectId = parseInt(context.params.id);
    const userId = user.id;

    const project = await getOrderById(projectId);

    if (user === undefined || project === null || project === undefined || user === null || project.userId !== userId) {
        return {
            redirect: {
                permanent: false,
                destination: "/customer/customerDashboard",
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
                    <div className="project__data__image">
                        {
                            project.attachments.map((attachment, index) => (
                                <img key={index} src={attachment} alt="" width={200} height={200} />
                            ))
                        }
                    </div>
                </div>
                <div className="project__bids">
                    {/* <table className="project__bids__table">
                        <tr>
                            <th>Proposal</th>
                            <th>Price</th>
                            <th>Delivery Time</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {
                            project.Bid.map((bid, index) => (
                                <tr key={index}>
                                    <td>{bid.proposal}</td>
                                    <td>{bid.amount}</td>
                                    <td>{bid.days}</td>
                                    <td>{bid.status}</td>
                                    <td>
                                        {
                                            bid.status !== 'ACCEPTED' ?
                                                <button
                                                    onClick={() => accBid(bid.id)}
                                                >Accept</button> : null
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </table> */}
                    <DashHeader
                        style={{
                            padding: "14px 0 14px 20px",
                            gap: "20px",
                            borderTop: "none",
                        }}
                        headerTitles={[
                            "Proposal",
                            "Price",
                            "Delivery Time",
                            "Status",
                            "Action",
                        ]}
                    />
                    <div className='project__bids__body'>
                        {
                            project.Bid.map((bid, index) => (
                                <DashRow
                                    key={index}
                                    index={bid.id}
                                    className="project__bids__body__row"
                                    data={[
                                        bid.proposal,
                                        bid.amount,
                                        bid.days,
                                        bid.status,
                                        bid.status !== 'ACCEPTED' ?
                                            <button
                                                onClick={() => accBid(bid.id)}
                                                style={{
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    padding: "10px 20px",
                                                    border: "none",
                                                    borderRadius: "5px",
                                                    cursor: "pointer"
                                                }}
                                            >Accept</button> : null
                                    ]}
                                    style={{
                                        padding: "14px 0 14px 0",
                                    }}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default project