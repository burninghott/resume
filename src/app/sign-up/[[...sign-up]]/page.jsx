import { SignUp } from "@clerk/nextjs";
import classes from "./signup.module.css";

export default function Page() {
  return (
    <div className={classes.container}>
      <SignUp />
    </div>
  );
}
