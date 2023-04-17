import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {UserCard} from "./components/UserCard";
import { defaultUser } from "./mock";
import {useState} from "react";
import {GithubError, GithubUser, LocalGithubUser} from "./types";
import {isGithubUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/extract-local-user";

const BASE_URL = "https://api.github.com/users/";

function App() {
    const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)
    const fetchUser = async (username: string) => {
        const result = await fetch(BASE_URL + username);
        const user = await result.json() as GithubUser | GithubError;

        if (isGithubUser(user)) {
            setUser(extractLocalUser(user));

        } else {
            setUser(null);
        }
    }

    return (
        <Container>
          <Header />
          <Search hasError={!user} onSubmit={fetchUser} />
            {user && (
                <UserCard {...user} />
            )}
        </Container>
  );
}

export default App;
