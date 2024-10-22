let FormValidate = (form) => {
  let errors = {};

  errors.tarea =
    form.tarea.length < 5 ? "La tarea debe tener al menos 5 caracteres" : "";

  return errors;
};

export default FormValidate;
