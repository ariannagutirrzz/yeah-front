import { useQuery } from "@tanstack/react-query";
import { getDeposits } from "../api/deposits";
import { Title, Text, Stack, Table } from "@mantine/core";

export default function Deposits() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["deposits"],
    queryFn: getDeposits,
  });
//   console.log(data);
//   console.log(JSON.stringify(data, null, 2));

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <Stack align="center">
        <Title order={1}>Deposits</Title>
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Location</Table.Th>
            </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {data?.map((deposit, index) => (
                <Table.Tr key={deposit.id}>
                  <Table.Td>{index+1}</Table.Td>
                  <Table.Td>{deposit.description}</Table.Td>
                  <Table.Td>{deposit.location}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
        </Table>
      </Stack>
    </>
  );
}
