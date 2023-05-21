import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `ToysPlanet-${title}`;
    },[title])
};

export default useTitle;