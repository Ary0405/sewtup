import './CustomerProjects.scss'
import { Table, Th, Td, Tr, Thead, Tbody } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function CustomerProjects({ userData }) {

    const router = useRouter();

    return (
        <div className="CustomerProjects">
            <div className='CustomerProjects__header'>
                My Orders
            </div>
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>Project Name</Th>
                        <Th>Description</Th>
                        <Th>Status</Th>
                        <Th>Estimated Price</Th>
                        <Th>Price</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        userData.map((project, index) => (
                            <Tr key={index} onClick={() => router.push(`/customer/project/${project.id}`)} style={{ cursor: 'pointer' }} >
                                <Td>{project.title}</Td>
                                <Td>{project.description}</Td>
                                <Td>{project.status}</Td>
                                <Td>{project.minBudget}</Td>
                                <Td>{project.finalPrice}</Td>
                                <Td>View Details</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </div>
    )
}