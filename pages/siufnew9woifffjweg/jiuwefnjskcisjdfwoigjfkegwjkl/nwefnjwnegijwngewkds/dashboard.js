import { fetchAllPayments } from "@/services/payments.services";
import { useState } from "react";
import { Input, Button, FormControl, Modal, ModalOverlay, ModalContent, CloseButton } from '@chakra-ui/react';


export async function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  }

  const user = context.req.session.user;
  if (user.role !== 'ADMIN') {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const payments = await fetchAllPayments();

  return {
    props: { user, payments }
  }
}
function dashboard({ user, payments }) {


  return (
    <div>dashboard</div>
  )

}

export default dashboard