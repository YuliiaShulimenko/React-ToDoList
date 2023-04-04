import React, { useState } from "react";
import s from "./Menu.module.css";

const Menu = ({ addTask }) => {
  const [day, setDay] = useState("");
  const [importance, setImportance] = useState("");
  const [description, setDescription] = useState("");

  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const importanceLevels = ["Важно", "Не важно"];

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(day, importance, description);
    setDay("");
    setImportance("");
    setDescription("");
  };


  return (
    <div className={s.div_form}>

      <form onSubmit={handleSubmit}>

        <div className={s.input_select}>
        <div className={s.form_select}>
        <div className={s.form_day}>

          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Выбирите день</option>

            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}

          </select>
        </div>

         <div className={s.importance}>
          <select value={importance}
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value="">Выбирите важность</option>
            {importanceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        </div>
       
        <input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </div>

        <button className={s.btn_form} type="submit">
          Добавить
        </button>

      </form>
    </div>
  );
};
export default Menu;
