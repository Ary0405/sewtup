import './DashRow.scss'

export default function DashRow({
    data = [],
    isGreen = true,
    style,
    useClass = false,
    className,
    isTitle = true,
}) {
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
        >
            {data.map((title, index) => (
                <span key={index} className="DashHeaderWrapper__title">
                    {title}
                </span>
            ))}
        </div>
    )
}