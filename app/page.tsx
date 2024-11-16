'use client';
import { Container } from "@chakra-ui/react";
import Header from "./header/component";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        const register = await navigator.serviceWorker.register("/sw.js");

        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: "BGtgqmGcnKQrrQYZgbHuOeB49xmRw0A4N2PBcfryo4qsqLKUiUZlLBbubZ4ioyJ7Jw_GEjW3TxBGRv-2kXrN1Qs",
        });

        console.log(subscription);

        const res = await fetch("http://localhost:8080/api/notifications/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "content-type": "application/json",
          },
        });

        const data = await res.json();
        console.log(data);
      };
      handleServiceWorker();
    }
  }, []);
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}
