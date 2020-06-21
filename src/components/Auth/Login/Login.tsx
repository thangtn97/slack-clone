import React from "react";
import Input from "../../UI/Input/Input";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  return (
    <form className={styles.Login}>
      <Input
        elementType="input"
        elementConfig={{ type: "text", placeholder: "Your email" }}
        value=""
        invalid={false}
        label="Your email"
        shouldValidate={false}
      />
      <Input
        elementType="input"
        elementConfig={{ type: "password", placeholder: "Your password" }}
        value=""
        invalid={false}
        label="Your password"
        shouldValidate={false}
      />
    </form>
  );
};

export default Login;
