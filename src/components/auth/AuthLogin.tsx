import { useNavigate } from "react-router-dom";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin } from "@interface/store/iLogin";  // Ensure this path is correct

export const AuthLogin = () => {
  const navigate = useNavigate();

  // Setting up the form with react-hook-form and the ILogin interface
  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>();

  // Handling form submission
  const onSubmit: SubmitHandler<ILogin> = (reqObj, event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("______________________");
    console.log(reqObj);
    navigate("/dashboard");
  };

  return (
    <>
      <Container>
        <Row className="container">
          <Col lg={5} md={6} sm={12} className="p-5 bgcolor shadow-lg rounded-lg brdr_redis">
            <Col className="txt_center">
              <h1>Welcome!</h1>
            </Col>
            <Col className="mt-3 padding_lr_10">
            <Form onSubmit={handleSubmit(onSubmit)}>                
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    placeholder="Enter email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  />
                  {errors.email && (
                    <div className="invalid-feedback" style={{ color: "red" }}>
                      {errors.email.message}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    {...register("password", { required: "Password is required" })}
                    type="password"
                    placeholder="Password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  />
                  {errors.password && (
                    <div className="invalid-feedback" style={{ color: "red" }}>
                      {errors.password.message}
                    </div>
                  )}
                </Form.Group>

                <Button className="addbtn mt-3 shadow-lg rounded-lg" variant="warning" type="submit">
                  <strong>Login</strong>
                </Button>
              </Form>
            </Col>

            <Col>
              <p className="mt-4 text-center text-secondary">
                <a href="#" className="a_href">Student Results</a>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthLogin;
