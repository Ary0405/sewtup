import CustomerNavbar from "@/components/CustomerNavbar/CustomerNavbar";
import CustomerProjects from "@/components/CustomerProjects/CustomerProjects";
import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar";
import "@/styles/routes/customer/customerDashboard.scss";

export async function getServerSideProps(context) {
    if (context.req.session.user === undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        };
    }

    const user = context.req.session.user;

    return {
        props: { user: user }
    }
}

export default function CustomerDashboard({ user }) {
    return (
        <div className="parent">
            <div className="div1">
                <CustomerSidebar user={user} />
            </div>
            <div className="div2">
                <CustomerNavbar />
            </div>
            <div className="div3">
                <CustomerProjects />
            </div>
        </div>
    )
}