import { atom, selector } from "recoil";
import axios from "axios";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);
    return (
      networkAtomCount +
      jobsAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: selector({
    key: "notificationsSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      const data = res.data;
      return (
        data.network +
        data.jobs +
        data.messaging +
        data.notifications
      );
    },
  }),
});
