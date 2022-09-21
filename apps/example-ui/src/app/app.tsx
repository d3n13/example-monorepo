import React, { ComponentProps, useCallback, useState } from 'react';
import { Message } from '@example/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  const makeRequest = useCallback((method: string) => {
    fetch('/api', { method })
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  const create: ComponentProps<'button'>['onClick'] = useCallback(
    () => makeRequest('POST'),
    [makeRequest]
  );
  const read: ComponentProps<'button'>['onClick'] = useCallback(
    () => makeRequest('GET'),
    [makeRequest]
  );
  const update: ComponentProps<'button'>['onClick'] = useCallback(
    () => makeRequest('PUT'),
    [makeRequest]
  );
  const _delete: ComponentProps<'button'>['onClick'] = useCallback(
    () => makeRequest('DELETE'),
    [makeRequest]
  );

  return (
    <>
      <div>
        <button onClick={create}>Create</button>
        <button onClick={read}>Read</button>
        <button onClick={update}>Update</button>
        <button onClick={_delete}>Delete</button>
      </div>
      <div>Response fron API: {m.message}</div>
    </>
  );
};

export default App;
