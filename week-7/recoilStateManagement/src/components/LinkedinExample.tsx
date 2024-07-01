import React from "react";
import { jobsAtom, networkAtom, messagingAtom, notificationAtom, totalNotificationSelector } from "../store/atoms/linkedin";
import { useRecoilValue } from "recoil";


function LinkedinExample() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationNotificationCount = useRecoilValue(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector);

    return (
    <>
      <button>Home</button>
      <button>My Networks ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagingNotificationCount})</button>
      <button>Notifications ({notificationNotificationCount})</button>
      <button>Me ({totalNotification})</button>
    </>
  );
}

export default LinkedinExample;
