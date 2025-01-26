import { Title, Text, Button, Stack } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Stack align="center">
        <Title order={1}>Home</Title>
        <Text>Welcome to the Home page. </Text>
        <Text>This is an Inventory System.</Text>
        <Button>Click me</Button>
      </Stack>
    </>
  );
}
