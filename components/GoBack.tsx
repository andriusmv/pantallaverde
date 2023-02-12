import { Button, Container } from "@mantine/core";
import Link from "next/link";
import { ArrowBack } from "tabler-icons-react";

export function GoBack() {

    return (
<Container size={800}>
<Link href="/">
<Button leftIcon={<ArrowBack />} variant="light" color="gray" /></Link>
</Container>

);
}