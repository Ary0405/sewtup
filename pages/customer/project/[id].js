import { getOrderById } from "@/services/order.service";
import '@/styles/routes/customer/project.scss';
import CustomerNavbar from "@/components/CustomerNavbar/CustomerNavbar";
import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar";
import { acceptBid } from "@/operations/bids.fetch";
import { Table, Th, Td, Tr, Thead, Tbody,Heading } from '@chakra-ui/react'

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
                    <Heading as="h1" size="xl">{project.title}</Heading>
                    <p>{project.description}</p>
                    <p>{new Date(project.date).toDateString()}</p>
                    <p>{project.status}</p>
                    <div className="project__data__image">
                        {
                            project.attachments.map((attachment, index) => (
                                <img key={index} src={attachment} alt="" width={200} height={200} />
                            ))
                        }
                    </div>
                </div>
                <div className="project__bids">
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>Proposal</Th>
                                <Th>Price</Th>
                                <Th>Delivery Time</Th>
                                <Th>Status</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                project.Bid.map((bid, index) => (
                                    <Tr key={index}>
                                        <Td>{bid.proposal}</Td>
                                        <Td>{bid.amount}</Td>
                                        <Td>{bid.days}</Td>
                                        <Td>{bid.status}</Td>
                                        <Td>
                                            {bid.status !== 'ACCEPTED' ?
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
                                            }
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default project