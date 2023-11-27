import React, { useState ,useEffect} from 'react';

export default function Form() {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [user, setUser] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [data,setdata]=useState([])

  function getdata(e) {
    e.preventDefault();
    if ( nom && prenom) {
      const newuser = {  nom, prenom };
      setUser([...user, newuser]);
  
      setNom('');
      setPrenom('');
    }
  }


  function deletedata(userid) {
    const filterdata = user.filter((u) => u.nom !== userid);
    setUser(filterdata);
  }


function editUser(userid) {
  setEditUserId(userid);
  const currentUser = user.find((u) => u.nom === userid);
  if (currentUser) {
   
    setNom(currentUser.nom);
    setPrenom(currentUser.prenom);
  }
}

  function updateUser(e) {
    e.preventDefault()
    const updatedUsers = user.map((u) =>
      u.nom === editUserId ? {  nom, prenom } : u
    );
    setUser(updatedUsers);
  
    setNom('');
    setPrenom('');
    setEditUserId(null);
  }
useEffect(()=>{
  
  fetch("https://api.quotable.io/random")
  .then((response)=>response.json())
  .then((jsondata)=>{setdata(jsondata)})
  // console.log(data);
  
},[])
  return (
   <>
    <h1 style={{fontStyle:"oblique",textAlign:"center" ,paddingTop:"20px"}}>The quote of the day is:</h1>
    <p style={{textAlign:"center" ,color:"#fd2c81",display:"flex",justifyContent:"center",alignItems:"center",fontStyle:"bold", fontSize:"20px"}}>{data.content}</p>
  
    <h1 style={{ color: 'purple', textAlign: 'center', fontStyle: "revert", fontSize: '30px'}}>
         To-Do-List
      </h1>
      
    <div style={{border:"1px solid purple",marginTop:"20px",marginTop:"40px",display:"flex",borderWidth:"40px" ,textAlign:"center" ,alignItems:"center", alignContent:"center",justifyContent:"center",padding:"20px"}}>
      <div>
    
      
      
      <h1 style={{ color: 'purple', textAlign: 'center', fontStyle: 'oblique', fontSize: '25px'}}>
      Create your own to-do list
      </h1>
      
  

        <form style={{ color: 'black', textAlign: 'center' }}  class="form-group">
         
        
         le nom de la Tâche : <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}   class="form-control"/> <br />
      
          Jour de la Tâche: <input type="datetime-local" value={prenom} onChange={(e) => setPrenom(e.target.value)}  class="form-control"/>{' '}
       
          <br />
          {editUserId === null ? (
            <button onClick={getdata} style={{ color: 'black', backgroundColor: '#FFBCD9', transition: '2s', cursor: 'pointer', borderRadius:"30px", borderColor:"#FFBCD9",fontStyle:"revert"}}>
              Ajouter une Tâche &#128218;
            </button> 
          ) : (
            <button onClick={updateUser} style={{ color: 'black', backgroundColor: '#FFBCD9', transition: '2s', cursor: 'pointer', borderRadius:"30px" ,fontStyle:"revert",borderColor:"#FFBCD9"}}>
              Mettre à jour la Tâche &#9851;
            </button>
          )}
        </form>
     
       
        <h5 style={{ color: 'purple', textAlign: 'center', fontStyle:"oblique",fontSize:"20px"}}>  Liste des Tâches:</h5>
          
            {user.map((u) => (
           
                <table border="1px" style={{width:"100%",marginRight:"20px" ,borderColor:"gray"}}>
                    
                  <tr> <td colSpan={20} style={{color:"pink" ,fontSize:"20px",fontStyle: 'oblique'}}>Tâche Name :  &#128640;</td></tr> <br/>
                     <tr>
                    <td key={u.nom} style={{fontSize:"19px"}}> 
              
                          { "Tâche Name: " + u.nom+" "}
                          {' '+" pour le " + u.prenom}
                        </td>    
                       
                    </tr>
               <br/>
                <button onClick={() => deletedata(u.nom)} style={{ color: 'black', backgroundColor: '#5F9EA0 ',borderColor:"#5F9EA0", transition: '2s', cursor: 'pointer', borderRadius:"30px",marginRight:"15px"}}>
                  Tâche Done &#10004;
                </button>
                
                <button onClick={() => editUser(u.nom)} style={{ color: 'black', backgroundColor: '#BDFFBF',borderColor:"#BDFFBF", transition: '2s', cursor: 'pointer'  ,borderRadius:"30px"}}>
                  Modifier la Tâche &#9997;
                </button>
             
                </table>
             
             
            ))}
          
   
      </div>
    </div>
    </>
  );
}
