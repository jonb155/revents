import { Form, Formik } from "formik";
import MyTextInput from "../../app/common/form/MyTextInput";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../app/common/modals/modalReducer";
import { signInUser } from "./authActions";

export default function LoginForm() {
    const dispatch = useDispatch();

  return (
    <ModalWrapper size="mini" header="Sign in to Re-vents">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, {setSubmitting} ) => {
            dispatch(signInUser(values));
            setSubmitting(false);
            dispatch(closeModal());
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <MyTextInput placeholder="Email Address" name="email" />
            <MyTextInput
              placeholder="Password"
              name="password"
              type="password"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              fluid
              size="large"
              color="teal"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
