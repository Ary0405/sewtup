import { fetchAllPayments } from "@/services/payments.services";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import { acceptUserPayment } from "@/operations/bids.fetch";

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

  const paymentsData = payments.map((payment) => {
    return {
      id: payment.id,
      imageURL: payment.imageURL,
      amount: payment.amount,
      paymentDate: JSON.stringify(payment.date),
      transaction: payment.transaction,
      status: payment.status,
      orderId: payment.orderId
    };
  });

  return {
    props: { user, payments: paymentsData },
  }
}

function dashboard({ user, payments }) {

  const handleAcceptPayment = async (id, orderId) => {
    const response = await acceptUserPayment({ id, orderId });
    
    if (response.status === 200) {
      alert("Payment accepted");
      window.location.reload();
    }
    else {
      console.log(response);
      alert("Error accepting payment");
    }
  }

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Payments</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Transaction image</Th>
                    <Th>Amount</Th>
                    <Th>Payment Date</Th>
                    <Th>Transaction Id</Th>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {payments.map((payment) => (
                    <Tr key={payment.id}>
                      <Td><Image src={payment.imageURL} width={60} /></Td>
                      <Td>{payment.amount}</Td>
                      <Td>{new Date(JSON.parse(payment.paymentDate)).toDateString()}</Td>
                      <Td>{payment.transaction}</Td>
                      <Td>{payment.status}</Td>
                      <Td>
                        {
                          payment.status === 'PENDING' ?
                            <Button onClick={() => handleAcceptPayment(payment.id, payment.orderId)}>Accept</Button>
                            : null
                        }
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )

}

export default dashboard