import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    console.log("started");
    window.addEventListener("online", () => {
      setIsOnline(true);
      console.log("Online");
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
      console.log("offline");
    });
  }, []);

  return { isOnline };
};

const UserOnline = () => {
  const { isOnline } = useOnline();

  return (
    <>{isOnline ? <h1>User is online 🟢</h1> : <h1>User is offline 🔴</h1>}</>
  );
};

export default UserOnline;
