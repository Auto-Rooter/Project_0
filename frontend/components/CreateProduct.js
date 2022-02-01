import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  // const [name, setName] = useState('Wes'); // this is a reactive state
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'product name',
    price: 1234,
    description: 'price desc',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault(); // prevent from sending info to the server directly and putting the info in the URL
        console.log(`Inputs: ${inputs}`);
      }}
    >
      <fieldset aria-busy>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
