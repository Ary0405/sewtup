import { Input, Button, FormControl } from '@chakra-ui/react';
import { payPayment } from '@/operations/orders.fetch';
import { useState } from 'react';
import { generate } from "random-words";
import Loading from '@/components/Loading/Loading';
import { supabase } from './projectDescription';
import { Image } from '@chakra-ui/react';

export async function getServerSideProps(context) {
  const user = context.req.session.user;

  if (user === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  }

  const userId = parseInt(context.query.user);

  const orderId = parseInt(context.query.id);
  const value = parseInt(context.query.amount);

  if (isNaN(userId) || isNaN(orderId) || isNaN(value) || !userId || !orderId || !value) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  if (userId !== user.id) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  }


  return {
    props: { orderId: orderId, value: value }
  }

}


function pay({ orderId, value }) {

  const [transaction, setTransaction] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImages = async (file) => {
    const file_path = generate();
    if (file.size > 1024 * 1024 * 3) {
      alert('File is larger than 3MB');
      return;
    }
    await uploadFile(file, file_path);
  }

  const uploadFile = async (file, file_path) => {
    setLoading(true);
    const { data, error } = await supabase.storage.from('payments').upload(file_path, file)
    const res = supabase.storage.from('payments').getPublicUrl(file_path);
    if (error) {
      console.log(error)
    } else {
      setImageURL(res['data'].publicUrl)
    }
    setLoading(false);
  }


  const handlePay = async () => {
    if (transaction === "" || imageURL === "") {
      alert("fill all the fields");
      return;
    }

    const data = {
      transaction: transaction,
      imageURL: imageURL,
      amount: value,
      orderId: orderId
    }

    const response = await payPayment(data);

    if (response.status === 200) {
      alert("Payment successful");
      window.location.href = "/";
    }
    else {
      alert("Payment failed");
    }
  }

  return (
    <div>
      {loading && <Loading />}
      <Image src="/Images/payqr.jpg" alt="payqr" height={400} />
      <h2>Order ID: {orderId}</h2>
      <h2>Amount: {value}</h2>
      <FormControl>
        <Input placeholder="Transaction ID" onChange={(e) => setTransaction(e.target.value)} required />
        <Input type="file" onChange={(e) => uploadImages(e.target.files[0])} />
        <Button onClick={handlePay}>Pay</Button>
      </FormControl>
    </div>
  )
}

export default pay