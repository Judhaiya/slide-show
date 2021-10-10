import React,{useState,useEffect} from 'react'

export default function Transaction({item}) {
    const[category,setCategory]=useState(false)
useEffect(() => {
    if(item.category==='Add'){
        setCategory(true)
    }if(item.category==='subtract'){
        setCategory(false)
    }
}, [])
    return (
        <div className="Transaction-item">
            <div className={`expense${category?"green":"red"}`}>
            {item.value}-{item.category}-{item.curTime}
            </div>
        </div>
    )
}
