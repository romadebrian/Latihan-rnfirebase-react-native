import {Component, createContext, useContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = props => {
  const [user, setUser] = useState('loading');
  // const [error, setError] = useState(null);
  console.log('datauser firebase', user);

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(getAuth, setUser);
    // return () => unsubscribe;
  }, []);

  return <AuthContext.Provider value={user} {...props} />;
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  // console.log("test", auth);

  return {auth};
};

const Cosumer = AuthContext.Consumer;
export const DataCurrentUser = Childern => {
  return class ParentCosumer extends Component {
    render() {
      return (
        <Cosumer>
          {value => {
            return <Childern {...this.props} {...value} />;
          }}
        </Cosumer>
      );
    }
  };
};
