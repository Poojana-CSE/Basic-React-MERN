import React from 'react'

const table = (props) => {
    const {Items} = props;
  return (
    <div>
        <table className='tablename'>
            <tr>
            <th>Team Name</th>
            <th>Team Lead</th>
            </tr>
            <tr>
                <td>CSK</td>
                <td>MS Dhoni</td>
            </tr>
            <tr>
                <td>RCB</td>
                <td>Virat Kohli</td>
            </tr>
            <tr>
                <td>MI</td>
                <td>Rohit Sharma</td>
            </tr> 
        </table>
        <table className='IPLTeams'>
        <tr>
            <th>Team_Name</th>
            <th>Team_Lead</th>
            </tr>
            <tr>
                <td>{props.Team_Name}</td>
                <td>{props.Team_Lead}</td>
            </tr>
            {/* <tr>
                <td>{props.Team_Name}</td>
                <td>{props.Team_Lead}</td>
            </tr> */}
        </table>
        <ul>
        {Items.map((item) => (
          // <li key={item.id}>{item.Name}</li>
          <li>{item.id} - {item.Name}</li>
        ))}
      </ul>
    </div>
  )
}

export default table
