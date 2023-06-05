import { customAlphabet, nanoid } from 'nanoid';
import debounce from "lodash/debounce";
import React, { useState } from "react";
import Client from "./components/Client";
import { Grid, H4, Input, RoomWrapper, Title } from "./style";
import { useParams } from 'react-router-dom';

interface User {
  roomId: string;
  name: string;
}



const Room: React.FC<any> = () => {
  const params = useParams()
  const createUser = (): User => ({
    roomId: params.roomId || '',
    name: customAlphabet('abcdefghijklmn', 6)(),
  });
  const [users, setUsers] = useState<User[]>([createUser()]);
  const [isRemounted, setRemountState] = useState(false);

  const remount = debounce(() => {
    setRemountState(true);
    setTimeout(setRemountState, 50, false);
  }, 300);

  return (
    <RoomWrapper>
      <Grid>
        {users.map((user: User) =>
          isRemounted ? null : (
            <Client
              {...user}
              key={user.roomId}
            />
          )
        )}
      </Grid>
    </RoomWrapper>
  );
};

export default Room;
