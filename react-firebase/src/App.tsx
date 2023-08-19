import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blogs } from './blogs';
import { Home } from './home';
import ProtectedRoute, { ProtectedRouteProps } from './authenticated-route';
import { signInWithPopup, getAuth, GoogleAuthProvider } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './auth';
import { BoxArrowRight, Lock } from 'react-bootstrap-icons';

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  authenticationPath: '/login',
};

export function AppWrapper() {
  return (
      <App></App>
  )
}

function App() {

  const [user] = useAuthState(auth);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider).then((result) => {
    }).catch((error) => {});
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <Container>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {user ? <Nav.Link href="blogs">Blogs</Nav.Link> : null} 
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {
              user ? (
                <Navbar.Text>
                  Signed in as: {user!.displayName} <BoxArrowRight onClick={logout} />
                </Navbar.Text>
              ) : (
                <Lock onClick={login}></Lock>
              )
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='blogs' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Blogs />} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
