import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Tour-Guide`
    },[title])
}
export default useTitle;