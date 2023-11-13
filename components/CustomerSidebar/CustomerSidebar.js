import Image from "next/image";
import './CustomerSidebar.scss';

export default function CustomerSidebar({ user }) {
    return (
        <div className="CustomerSidebar" >
            <div className="CustomerSidebar__top">
                <div className="CustomerSidebar__top__row">
                    <Image className="CustomerSidebar__top__row--image" src={'/Images/Customer/my_projects.png'} width={25} height={25} />
                    <p className="CustomerSidebar__top__row--text">My Projects</p>
                </div>
                <div className="CustomerSidebar__top__row">
                    <Image className="CustomerSidebar__top__row--image" src={'/Images/Customer/bid_management.png'} width={20} height={20} />
                    <p className="CustomerSidebar__top__row--text">Bid Management</p>
                </div>
            </div>
            <div className="CustomerSidebar__bottom">
                <div className="CustomerSidebar__bottom--column">
                    <p className="CustomerSidebar__bottom--column__name">{user.name}</p>
                    <p className="CustomerSidebar__bottom--column__email">{user.email}</p>
                </div>
                <Image className="CustomerSidebar__top__row--image" src={'/Images/Customer/logout.png'} width={20} height={20} />
            </div>
        </div>
    )
}