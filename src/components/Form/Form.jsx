import { useState } from "react";

const Form = () => {
  let [form, setForm] = useState({
    tarea: "",
    descripcion: "",
    duracion: "",
    prioridad: "",
    categoria: "",
    estado: "",
  });

  let handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    setForm({ ...form, [property]: value });
  };
  let submitHandler = (event) => {
    event.preventDefault();
    alert("Agregaste una tarea a la lista");
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="">TAREA</label>
          <input
            id="tarea"
            type="text"
            name="tarea"
            placeholder="Ingresá una tarea"
            autoComplete="off"
            value={form.tarea}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">DESCRIPCIÓN</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="4"
            cols="50"
            placeholder="Describí brevemente la tarea"
            autoComplete="off"
            value={form.tarea}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">DURACIÓN</label>
          <input
            id="duracion"
            type="time"
            name="duracion"
            placeholder="Ingresá la duración"
            autoComplete="off"
            value={form.tarea}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">PRIORIDAD</label>
          <select
            id="prioridad"
            name="prioridad"
            value={form.tarea}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="urgente">Urgente</option>
            <option value="opcion2">Media</option>
            <option value="opcion3">Sin apuro</option>
          </select>
        </div>
        <div>
          <label for="categorias">CATEGORÍA</label>
          <select
            id="categoria"
            name="categoria"
            value={form.tarea}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="casa">Casa</option>
            <option value="facultad">Facultad</option>
            <option value="trabajo">Trabajo</option>
            <option value="salud">Salud</option>
            <option value="hobies">Hobies</option>
          </select>
        </div>
        <div>
          <label for="estados">ESTADO</label>
          <select
            id="estado"
            name="estado"
            value={form.tarea}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En Proceso</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Form;
