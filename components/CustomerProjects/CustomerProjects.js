import DashHeader from '../DashTable/DashHeader/DashHeader'
import DashRow from '../DashTable/DashRow/DashRow'
import './CustomerProjects.scss'

export default function CustomerProjects({ userData }) {
    
    return (
        <div className="CustomerProjects">
            <div className='CustomerProjects__header'>
                My Orders
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
                {
                    userData.map((project, index) => (
                        <DashRow
                            key={index}
                            index={project.id}
                            className="CustomerProjects__body__row"
                            data={[
                                project.title,
                                project.description,
                                project.status,
                                project.minBudget,
                                project.finalPrice,
                            ]}
                            style={{
                                padding: "14px 0 14px 0",
                            }}
                        />
                    ))
                }

            </div>

        </div>
    )
}