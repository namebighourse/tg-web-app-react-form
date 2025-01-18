import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    writeText: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправка данных на сервер или в Telegram
    try {
      await fetch("http://localhost:5173", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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
          placeholder="&#10046;"
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
          placeholder="&#10048;"
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
      </label>
      <br />
      <button className="send" type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;