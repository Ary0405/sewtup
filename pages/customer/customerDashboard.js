import CustomerNavbar from "@/components/CustomerNavbar/CustomerNavbar";
import CustomerProjects from "@/components/CustomerProjects/CustomerProjects";
import CustomerSidebar from "@/components/CustomerSidebar/CustomerSidebar";
import { getOrdersByUser } from "@/services/order.service";
import "@/styles/routes/customer/customerDashboard.scss";
import { useEffect } from "react";

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

    const projects = await getOrdersByUser(user.id);
    
    projects.map((project) => {
        project.date = JSON.parse(JSON.stringify(project.date));
    });

    return {
        props: { user: user, projects: projects }
    }
}

export default function CustomerDashboard({ user, projects }) {

    useEffect(() => {
        localStorage.removeItem('title');
        localStorage.removeItem('description');
        localStorage.removeItem('skills');
        localStorage.removeItem('minBudget');
        localStorage.removeItem('maxBudget');
        localStorage.removeItem('experience');
        localStorage.removeItem('location');
        localStorage.removeItem('ImageUrls');
    }, []);
    

    return (
        <div className="parent">
            <div className="div1">
                <CustomerSidebar user={user} />
            </div>
            <div className="div2">
                <CustomerNavbar />
            </div>
            <div className="div3">
                <CustomerProjects userData={projects}/>
            </div>
        </div>
    )
}