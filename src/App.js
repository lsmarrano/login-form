import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center w-100">
        <img
          className="mb-4 bootstrap-logo"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt="Bootstrap 5"
        ></img>
        <h1 className="mb-3 fs-3 fw-normal">Entrar no site</h1>
        <Form.Group className="mb-3" controlId="login-email">
          <Form.Control
            className="position-relative"
            type="email"
            size="lg"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="login-senha">
          <Form.Control
            className="position-relative"
            type="password"
            size="lg"
            placeholder="Senha"
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-3"
          controlId="lembrar-me"
        >
          <Form.Check label="Lembrar-me" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg">
            Entrar
          </Button>
        </div>
        <p className="mt-5 text-muted">&copy; Luiz Marrano 2022</p>
      </Form>
    </Container>
  );
}

export default App;
