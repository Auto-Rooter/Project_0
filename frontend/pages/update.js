import { useRouter } from 'next/router';
import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage() {
  const router = useRouter();

  return (
    <div>
      <UpdateProduct id={router.query.id} />
    </div>
  );
}
