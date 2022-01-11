import { useLocation } from 'react-router-dom'


function ViewPlayer(props) {
    const location = useLocation()
    const { from } = location.state

    return(
        <>
            <div className="card border zoom m-5" style={{"width":" 30rem","height":"20rem","margin":"auto" }}>   
                <div className="card-body">
                    <h5 className="card-title">Id : {from.id}</h5>
                    <h5 className="card-title">First Name : {from.firstName}</h5>
                    <h5 className="card-text">Last Name : {from.lastName}</h5>
                    <h5 className="card-text">Contact No : {from.contactNo}</h5>
                    <h5 className="card-text">Campaign Name : {from.campaignName}</h5>
                </div>
            </div>
        </>
    )
}

export default ViewPlayer