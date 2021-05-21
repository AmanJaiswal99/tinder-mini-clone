import React,{useEffect, useState} from 'react'
import '../css/date_card.css'
import TinderCard from 'react-tinder-card'
import axios from '../axios';



function Cards() {

    const[people,setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/date/cards')
            setPeople(req.data)
        }
        fetchData()
        
    }, [])
    console.log(people)

    const swiped = (direction, nameToDelete)=>{
        console.log("removing:" + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
         console.log(name + " left the screen")
    }
    
    return (
        <div className='date_card'>
            <div className="tinderCards_cardContainer">
            {people.map(person=>{
                return(
            <TinderCard 
            className='swipe'
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(item)=> swiped(item,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}>

                <div style={{backgroundImage: `url(${person.imgUrl})`}}
                className='card'>
                    <h3>{person.name}</h3>
                </div>
                
            </TinderCard>
                )
            })}
            </div>
           
        </div>
    )
}

export default Cards
