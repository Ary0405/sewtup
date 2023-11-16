import './DashHeader.scss'

export default function DashHeader({
    headerTitles = [],
    isGreen = false,
    style,
    useClass = false,
    className,
    isTitle = true,
}) {
    const compStyle = {
        gridTemplateColumns: `repeat(${headerTitles.length}, 1fr)`,
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
        >
            {headerTitles.map((title, index) => (
                <span key={index} className="DashHeaderWrapper__title">
                    {title}
                </span>
            ))}
        </div>
    )
}