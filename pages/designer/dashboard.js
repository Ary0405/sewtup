import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar"
import CustomerNavbar from "@/components/CustomerNavbar/CustomerNavbar"
import '@/styles/routes/designer/dashboard.scss'

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

    return {
        props: { user: user }
    }
}

function dashboard({ user }) {
    return (
        <div className="parent">
            <div className="div1">
                <CustomerSidebar user={user} option={1} />
            </div>
            <div className="div2">
                <CustomerNavbar option={1} />
            </div>
            <div className="div3">
            </div>
        </div>
    )
}

export default dashboard