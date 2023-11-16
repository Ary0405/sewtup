import DashHeader from '../DashTable/DashHeader/DashHeader'
import './CustomerProjects.scss'

export default function CustomerProjects() {
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
        </div>
    )
}