import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  // Use effect to moitor the data and variables
  useEffect(() => {
    // when the changes happend
    setInputs(initial);
  }, [initialValues]);

  //   {
  //       name: 'product 1',
  //       description: 'nice product desc',
  //       price: 1000
  //   }

  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankForm = Object.entries(inputs).map(([key, value]) => [key, '']);
    setInputs(Object.fromEntries(blankForm));
  }

  return { inputs, handleChange, resetForm, clearForm };
}
