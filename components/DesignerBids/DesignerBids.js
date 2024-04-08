import './DesignerBids.scss'
import { Table, Th, Td, Tr, Thead, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function DesignerBids({ userBids }) {

    const router = useRouter();

    return (
        <div>
            <div className='DesignerBids__header'>
                My Bids
            </div>
            <Table variant="striped">
                <Thead>
                    <Th>Project Name</Th>
                    <Th>Amount</Th>
                    <Th>Days</Th>
                    <Th>Proposal</Th>
                    <Th>Status</Th>
                </Thead>
                <Tbody>
                    {
                        userBids.map((bid, index) => (
                            <Tr key={index} onClick={() => router.push(`/customer/project/${bid.Order.id}`)} style={{ cursor: 'pointer' }} >
                                <Td>{bid.Order.title}</Td>
                                <Td>{bid.amount}</Td>
                                <Td>{bid.days}</Td>
                                <Td>{bid.proposal}</Td>
                                <Td>{bid.status}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default DesignerBids