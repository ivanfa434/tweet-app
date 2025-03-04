"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/user";
import Link from "next/link";

export default function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("tweet-storage");
  };

  return (
    <div>
      <h1>Homepage</h1>
      {!user.email && <Link href="/login">Please login to continue</Link>}
      {!!user.email && <p>Welcome, {user.firstName}</p>}
      {!!user.email && (
        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
}
