'use client';
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

        const res = await fetch("https://78db-2409-40c4-1175-a16f-f8f9-181-3abd-3c46.ngrok-free.app/api/notifications/subscribe", {
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
   <div>
      <h1>Hello World!</h1>
   </div>
  );
}
