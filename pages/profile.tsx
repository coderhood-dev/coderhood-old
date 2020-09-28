import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('User: ', user);
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, []);
  return (
    <div>
      {user && <h1>Welcome, {user.username}</h1>}
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Profile);
