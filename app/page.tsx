import styles from "./page.module.css";
import Link from "next/link";
import { Container } from "@chakra-ui/react";
import Header from "./header/component";


export default function Home() {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}
