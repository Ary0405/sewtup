import DashHeader from '../DashTable/DashHeader/DashHeader'
import DashRow from '../DashTable/DashRow/DashRow'
import './DesignerBids.scss'

function DesignerBids({ userBids }) {
    return (
        <div>
            <div className='DesignerBids__header'>
                My Bids
            </div>
            <div className="DesignerBids__row">
                <DashHeader
                    style={{
                        padding: "14px 0 14px 20px",
                        gap: "20px",
                        borderTop: "none",
                    }}
                    headerTitles={[
                        "Project Name",
                        "Amount",
                        "Days",
                        "Proposal",
                        "Status",
                    ]}
                />
                <div className='DesignerBids__body'>
                    {
                        userBids.map((bid, index) => (
                            <DashRow
                                key={index}
                                index={bid.id}
                                className="DesignerBids__body__row"
                                data={[
                                    bid.Order.title,
                                    bid.amount,
                                    bid.days,
                                    bid.proposal,
                                    bid.status,
                                ]}
                                style={{
                                    padding: "14px 0 14px 0",
                                }}
                                type={1}
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default DesignerBids