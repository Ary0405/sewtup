import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar";

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

export default function CustomerDashboard({user}) {
    return (
        <div className="CustomerDashboard">
            <CustomerSidebar user={user} />
        </div>
    )
}