import { Input, Button, FormControl } from '@chakra-ui/react';
import { payPayment } from '@/operations/orders.fetch';
import { useState } from 'react';

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
    props: { user: user, orderId: orderId, value: value }
  }

}


function pay({ user, orderId, value }) {

  const [transaction, setTransaction] = useState("");
  const [imageURL, setImageURL] = useState("");

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

    if(response.status === 200){
      alert("Payment successful");
      window.location.href = "/";
    }
    else{
      alert("Payment failed");
    }
  }

  return (
    <div>
      <h1>Pay</h1>
      <h2>Order ID: {orderId}</h2>
      <h2>Amount: {value}</h2>
      <FormControl>
        <Input placeholder="Transaction ID" onChange={(e) => setTransaction(e.target.value)} required />
        <Input placeholder="Image URL" onChange={(e) => setImageURL(e.target.value)} required />
        <Button onClick={handlePay}>Pay</Button>
      </FormControl>
    </div>
  )
}

export default pay