import "./InputHabit.css"
import { useItems } from "../context/ItemContext";

export default function InputHabit() {
    const { showForm, setShowForm,  formData, setForm, submitHandler } = useItems()

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <div className="input-habit-form" style={{display: showForm ? "block" : "none"}}> 
        <h2>Add Habit Form</h2>
      <input type="text" name="name" placeholder="Name..." onChange={handleChange} className="form-name" />
      <label htmlFor="repeat">
        <select id="repeat" name="repeat">
          <option>Daily</option>
          <option>Once a week</option>
          <option>Twice a week</option>
          <option>Thrice a week</option>
        </select>
      </label>
      <label htmlFor="startDate">
        <select id="startDate" name="startDate" onChange={handleChange}>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>Day after tommorow</option>
          <option>Next week</option>
        </select>
      </label>
      <label htmlFor="timeOfDat">
        <select id="timeOfDay" name="timeOfDay" onChange={handleChange}>
          <option>Anytime</option>
          <option>Morning</option>
          <option>Evening</option>
          <option>Afternoon</option>
          <option>Night</option>
        </select>
      </label>
      <label htmlFor="goal">
        <select id="goal" name="goal" onChange={handleChange}>
          <option>Once a day</option>
          <option>Twice a day</option>
          <option>Thrice a day</option>
        </select>
      </label>
      <div className="form-btn">
      <button onClick={submitHandler}>Add habit</button>
      <button onClick={()=>setShowForm(false)}>Cancel</button></div>
    </div>
  );
}
