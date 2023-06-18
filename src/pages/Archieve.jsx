import { useItems } from "../context/ItemContext"

export default function Archieve(){
    const { archieveData, deleteHandler } = useItems();

    return <>
    <div className="dis-all-habit">
      {archieveData?.map((habit) => (
        <div className="habit-box">
          <div className="logos">
            <h3>{habit.name}</h3>
            <span>
            <img width="20" height="20" src="https://img.icons8.com/material-rounded/96/edit--v1.png" alt="edit--v1"/>
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/90/trash--v1.png" alt="trash--v1" onClick={()=>deleteHandler(habit.id)}/>
            </span>
          </div>
          <p>{habit.repeat}</p>
          <p>{habit.goal}</p>
          <p>{habit.timeOfDay}</p>
          <p>{habit.startDate}</p>
        </div>
      ))}
    </div>
  </>
}