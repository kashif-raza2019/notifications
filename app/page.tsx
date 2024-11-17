'use client';
import { useEffect } from "react";
import {SERVER_HOST_URL, VAPID_PUBLIC_KEY} from './imports';

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        const register = await navigator.serviceWorker.register("/sw.js");

        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: VAPID_PUBLIC_KEY,
        });

        console.log(subscription);

        const res = await fetch(`${SERVER_HOST_URL}api/notifications/subscribe`, {
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
