import './DashRow.scss'
import { useRouter } from 'next/router';

export default function DashRow({
    data = [],
    isGreen = true,
    style,
    useClass = false,
    className,
    isTitle = true,
    index,
}) {

    const router = useRouter();

    const compStyle = {
        gridTemplateColumns: `repeat(${data.length}, 1fr)`,
    };
    
    return (
        <div
            className={`DashHeaderWrapper ${className} 
                ${isGreen ? "DashHeaderWrapper--green" : ""}
                ${isTitle ? "DashHeaderWrapper--title" : ""}
                `}
            style={{
                ...compStyle,
                ...style,
            }}
            onClick={
                () => router.push(`/customer/project/${index}`)
            }
            
        >
            {data.map((title, index) => (
                <span key={index} className="DashHeaderWrapper__title">
                    {title}
                </span>
            ))}
        </div>
    )
}