const { useState, useEffect } = require("react");

const useServices = () =>{
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    
    }, []);
    return [services, setServices];
}
export default useServices;
