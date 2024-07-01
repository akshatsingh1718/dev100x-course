import React from "react";
import {notificationsAtom, totalNotificationSelector } from "../store/atoms/linkedin2";
import { useRecoilValue , useRecoilState} from "recoil";


function AsyncQueriesExample() {

  const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
//   console.log(notificationsAtomValue);


    return (
    <>
    <h1>Async data queries with 3 sec delay</h1>
      <button>Home</button>
      <button>My Networks ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default AsyncQueriesExample;
