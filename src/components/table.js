import React from 'react'

const table = () => {
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
    </div>
  )
}

export default table
