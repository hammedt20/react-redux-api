import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer ({ fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Covid 19 results</h2>
            <div>
                {userData && userData.users && userData.users.map(user => <p>{user.state}</p>,  <p>{user.id}</p>,  <p>{user.confirmedCases}</p>,  <p>{user.casesOnAdmission}</p>,  <p>{user.discharged}</p>)}
            </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDiaspatchToProps = dispatch =>{
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDiaspatchToProps)(UserContainer)