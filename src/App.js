import React from 'react';
import { NavLink, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';

const { 
  REACT_APP_CREATEREACTAPP_HOST: createreactappHost,
  REACT_APP_CREATEREACTAPP2_HOST: createreactapp2Host,
  REACT_APP_CREATEREACTAPP3_HOST: createreactapp3Host,
  REACT_APP_CREATEREACTAPP4_HOST: createreactapp4Host
} = process.env;

const CreateReactApp = ({ history }) => {
  return (<MicroFrontend
    history={history}
    host={createreactappHost}
    name="createreactapp"
  />);
};

const CreateReactApp2 = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactapp2Host}
    name="createreactapp2"
  />
);

const CreateReactApp3 = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactapp3Host}
    name="createreactapp3"
  />
);

const CreateReactApp4 = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactapp4Host}
    name="createreactapp4"
  />
);

const Home = () => (
  <>
    <p>
      What is a micro front-ends approach? The term micro front-ends first came
      up in the ThoughtWorks Technology Radar in November 2016. It extends the
      concepts of microservices to front-end development.
    </p>
    <p>
      The approach is to split the browser-based code into micro front-ends by
      breaking down application features. By making smaller and feature-centered
      codebases, we achieve the software development goal of decoupling.
    </p>
    <p>
      Although the codebases are decoupled, the user experiences are coherent.
      In addition, each codebase can be implemented, upgraded, updated, and
      deployed independently.
    </p>
    <p>
      Here is the paradise of micro front-ends. JavaScript applications,
      regardless of frameworks and versions, are launched by a container. These
      applications, legacy and new, work together seamlessly, and act like one
      application.
    </p>
  </>
);

const App = props => {
  return (
    <BrowserRouter>
      <h1>
        This is an example of micro frontend. 
      </h1>
      <p>
        I am an App Container. <br/>
        In the links below, Home is a component bundled with the App Container.
        We have three Micro Frontends: Create React App, Create React App2, and Create React App3.
      </p>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <Link to="/app1">
            Micro Frontend: Create React App
          </Link>
        </li>
        <li>
          <NavLink to="/createreactapp2">
            Micro Frontend: Create React App 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/createreactapp3">
            Micro Frontend: Create React App 3
          </NavLink>
        </li>
        <li>
            <NavLink to="/createreactapp4">
                Micro Frontend: Create React App 4
            </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/app1" component={CreateReactApp} />  //path here has to be exactly same as root path (with prefix) on micro frontend app
        {/* <Route path="/app1" render={() => <CreateReactApp />} /> */}
        <Route path="/createreactapp2" render={() => <CreateReactApp2 />} />
        <Route path="/createreactapp3" render={() => <CreateReactApp3 />} />
        <Route path="/createreactapp4" render={() => <CreateReactApp4 />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
