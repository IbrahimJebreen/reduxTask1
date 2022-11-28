import React from 'react';
import { connect } from 'react-redux'
function Home(props) {

    console.log(props.accounts);
    return (
        <div>
            <center>
                <table border='1'>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            customerName
                        </th>
                        <th>
                            accountNumber
                        </th>
                        <th>
                            accountType
                        </th>
                    </tr>
                    {props.accounts.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.customerName}</td>
                                <td>{user.accountNumber}</td>
                                <td>{user.accountType}</td>
                            </tr>
                        )
                    })}
                </table>
            </center>
        </div>
    );
}

const readStateFromStoreAndPassItToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(readStateFromStoreAndPassItToProps)(Home);