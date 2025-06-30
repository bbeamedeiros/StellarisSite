import React, { useState } from 'react';

const [form, setForm] = useState({
  evento: '',
  nota: '',
});

{/*muda o campo quando o usuario preenche o campo*/}
function handleChange(e) {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
}

{/*evita que a pag recarregue*/}
function handleSubmit(e) {
  e.preventDefault();
}


