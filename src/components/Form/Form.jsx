import { useState, useEffect } from "react";
import FormValidate from "../../utils/FormValidate";

const Form = () => {
  let initialFormState = {
    tarea: "",
    descripcion: "",
    duracion: "",
    prioridad: "",
    categoria: "",
    estado: "",
  };

  let [form, setForm] = useState(initialFormState);

  let [errors, setErrors] = useState({
    tarea: "",
    duracion: "",
    estado: "",
  });

  let [arrayTareas, setArrayTareas] = useState([]);

  let handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setForm({ ...form, [property]: value });

    const newErrors = FormValidate(form);
    setErrors(newErrors);
  };

  let submitHandler = (event) => {
    event.preventDefault();

    if (form.tarea === "") {
      alert("No te olvides de agregar una tarea");
    } else if (errors.tarea !== "") {
      alert(errors.tarea);
    } else {
      setArrayTareas([...arrayTareas, form]);
      setForm(initialFormState);

      alert("Agregaste una tarea a la lista");
    }
    setErrors({ ...errors, tarea: "" });
  };

  useEffect(() => {
    console.log("Array de tareas actualizado", arrayTareas);
  }, [arrayTareas]);

  return (
    <div>
      <form on onSubmit={submitHandler}>
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
          <span>{errors.tarea}</span>
        </div>
        <div>
          <label htmlFor="">DESCRIPCIÓN</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="4"
            cols="50"
            placeholder="Describe brevemente la tarea"
            autoComplete="off"
            value={form.descripcion}
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
            value={form.duracion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">PRIORIDAD</label>
          <select
            id="prioridad"
            name="prioridad"
            value={form.prioridad}
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
            value={form.categoria}
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
            value={form.estado}
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
