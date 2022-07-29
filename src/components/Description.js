const Description = ({info, i}) => {
    return (
        <li className="list-group-item" key={i}>
            <p className="fs-5 text mb-1">{info.Display_Name}</p>
            <p className="mb-1">
                Portion Size: {info.Portion_Default} {info.Portion_Display_Name} <span className="fs-5 bold">|</span> {(parseFloat(info.Calories)).toFixed(2)} calories
            </p>
        </li>
    )
}
export default Description