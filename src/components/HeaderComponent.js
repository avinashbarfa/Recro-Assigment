
const HeaderComponent = ({ title}) => {

    return (
        <div className={"header"}>
            <h2>{title ? title : "App"}</h2>
        </div>
    )
}

export default HeaderComponent;
