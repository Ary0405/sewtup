import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar"
import CustomerNavbar from "@/components/CustomerNavbar/CustomerNavbar"
import '@/styles/routes/designer/dashboard.scss'
import DesignerBids from "@/components/DesignerBids/DesignerBids";
import { getBidsByUser } from "@/services/bid.service";

export async function getServerSideProps(context) {
    if (context.req.session.user === undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/auth/login",
            },
        };
    }

    const user = context.req.session.user;
    // fetch user bids
    const userBids = await getBidsByUser(user.id);
console.log(userBids)
    return {
        props: { user: user, userBids: userBids },
    }
}

function dashboard({ user, userBids }) {
    return (
        <div className="parent">
            <div className="div1">
                <CustomerSidebar user={user} option={1} />
            </div>
            <div className="div2">
                <CustomerNavbar option={1} />
            </div>
            <div className="div3">
                <DesignerBids userBids={userBids} />
            </div>
        </div>
    )
}

export default dashboard