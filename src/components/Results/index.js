import React from "react";
function Results(props) {
  return (
    <table className="list-group">
      <tbody>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col" onClick={props.sortByName}>
            Name
          </th>
          <th scope="col" onClick={props.sortByPhone}>
            Phone
          </th>
          <th scope="col" onClick={props.sortByEmail}>
            Email
          </th>
          <th scope="col" onClick={props.sortByDOB}>
            DOB
          </th>
        </tr>
        {props.results &&
          props.results.map((result, index) =>
            result.name.first.toLowerCase().includes(props.search) ? (
              <tr className="table-row" key={index}>
                <td>
                  <img
                    alt={result.name.first}
                    className="img-fluid"
                    src={result.picture.thumbnail}
                  />
                </td>
                <td>
                  {result.name.first} {result.name.last}
                </td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.dob.date}</td>
              </tr>
            ) : result.name.last.toLowerCase().includes(props.search) ? (
              <tr className="table-row" key={index}>
                <td>
                  <img
                    alt={result.name.first}
                    className="img-fluid"
                    src={result.picture.thumbnail}
                  />
                </td>
                <td>
                  {result.name.first} {result.name.last}
                </td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.dob.date}</td>
              </tr>
            ) : null
          )}
      </tbody>
    </table>
  );
}
export default Results;
