import React, { useEffect, useState } from "react";


function Activities(){

    function displayActivities(){
        setLoading(true);
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                setActivity(data.activity);
                setparticipants(data.participants);
                console.log(data);
                setLoading(false)
            });
    }

   

    const [activity, setActivity] = useState([]);
    const [participants, setparticipants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        displayActivities();
       
    }, []);

    if(loading){
        return <p>Loading...</p>
        
    }

   

    return (
        
        
            <div className='ui container'>
            <h1>Done For the Day What iF!!!!</h1>
            
            <h2> {activity}</h2> 
            <h3>with {participants}</h3>
            <button className = "ui button yellow" onClick = {displayActivities}>Give</button>
            </div>
            
     
        
     
    )
}

export default Activities;