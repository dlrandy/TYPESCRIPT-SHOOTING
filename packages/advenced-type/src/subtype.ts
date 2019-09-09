import { userInfo } from "os";

type ExistingUser = {
  id: number;
  name: string;
}
type NewUser = {
  name: string;
}

function deleteUser(User:{id?: number, name: string}) {
  delete User.id
}