import { SignIn } from "@clerk/nextjs";
import classes from "./signin.module.css";

export default function Page() {
  return (
    <div className={classes.container}>
      <SignIn />
    </div>
  );
}
