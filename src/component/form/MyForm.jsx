import React, { useState } from "react";
import axios from 'axios'

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    writeText: "",
    data: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправка данных на сервер или в Telegram
    try {
      await axios.post("https://tg-web-app-bot-2gml.onrender.com/send-message",formData);
        alert("Форма отправлена!");
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (

    <form  className="formWeb  formName" onSubmit={handleSubmit}>
      <label>
      <p className="formTitle"> Имя:</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="&#10047;"
        />
      </label >
      <br />
      <label>
        <p className="formTitle">Компания:</p> 
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          placeholder="&#10047;"
        />
      </label>
      <br />
      <label>
      <p className="formTitle"> Ваше сообщение: </p>
        <input
          type="text"
          name="writeText"
          value={formData.writeText}
          onChange={handleChange}
          required
          placeholder="&#10047;"
        />
        <br />
      <p className="formTitle">Выберите дату: </p>
        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
          placeholder="&#10047;"
        />
      </label>
      <br />
      <label>
      <p className="formTitle">Выберите время: </p>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          placeholder="&#10047;"
        />
      </label>
      
      
      <br />
      <button className="send" type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;