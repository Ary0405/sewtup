import DashHeader from '../DashTable/DashHeader/DashHeader'
import DashRow from '../DashTable/DashRow/DashRow'
import './CustomerProjects.scss'

export default function CustomerProjects() {

    const data = [
        {
            projectName: "Project 1",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 2",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 3",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 4",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 5",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 6",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 7",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 8",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 9",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 10",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 11",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 12",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 13",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 14",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 15",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 16",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 17",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
        {
            projectName: "Project 18",
            description: "This is a project",
            status: "Completed",
            estimatedPrice: "$100",
            price: "$100",
        },
    ]


    return (
        <div className="CustomerProjects">
            <div className='CustomerProjects__header'>
                My Projects
            </div>
            <DashHeader
                style={{
                    padding: "14px 0 14px 20px",
                    gap: "20px",
                    borderTop: "none",
                }}
                headerTitles={[
                    "Project Name",
                    "Description",
                    "Status",
                    "Estimated Price",
                    "Price",
                ]}
            />
            <div className='CustomerProjects__body'>
                {data.map((project, index) => (
                    <DashRow
                        key={index}
                        className="CustomerProjects__body__row"
                        data={[
                            project.projectName,
                            project.description,
                            project.status,
                            project.estimatedPrice,
                            project.price,
                        ]}
                        style={{
                            padding: "14px 0 14px 0",
                        }}
                    />
                ))}
            </div>

        </div>
    )
}