import App from "./App";

function Submit(e,props ) {
    
e.preventDefault()
  
    const tableData = (
      <>
       <h1>Table de Data</h1>
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>prenom</th>
      <th>email</th>
      <th>date-naissance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.name}</td>
      <td>{props.prenom}</td>
      <td>{props.email}</td>
      <td>{props.dateNaissance}</td>
    </tr>
  </tbody>
</table>

      </>
    );
  
  
    return tableData;
  }
export default Submit  