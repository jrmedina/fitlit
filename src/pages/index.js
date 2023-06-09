import Head from "next/head";
import styles from "@/styles/Home.module.css";
import UserDashboard from "./_userDashboard";
import { useEffect } from "react";
import { getData } from "../../utils/fetchCalls";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUsers } from "../../redux/actions/userAction";
import {
  setActivity,
  setHydration,
  setSleep,
} from "../../redux/actions/dataAction";
import Hydration from "./_hydration";


export default function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const selectedUser = useSelector((state) => state.user);

  useEffect(() => {
    getData().then((data) => {
      dispatch(setHydration(data[2].hydrationData));
      dispatch(setUsers(data[0].users));
      dispatch(setUser(data[0].users[18]));
      dispatch(setSleep(data[1].sleepData));
      dispatch(setActivity(data[3].activityData));
    });
  }, []);

  return (
    <>
      <Head>
        <title>FitLit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <UserDashboard />
      </main>
    </>
  );
}
