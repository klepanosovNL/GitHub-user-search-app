import styles from './UserCard.module.scss';
import {UserStatus} from "../UserStatus";
import {LocalGithubUser} from "../../types";
import {UserTitle} from "../UserTitle";
import {UserInfo} from "../UserInfo";

interface UserCardProps extends LocalGithubUser{ }
export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
      <img src={props.avatar} alt={props.name} className={styles.avatar}/>
      <UserTitle login={props.login} name={props.name} created={props.created} />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
          {props.bio || 'This is profile has no bio'}
      </p>
      <UserStatus followers={props.followers} following={props.following} public_repos={props.public_repos} />
      <UserInfo company={props.company} blog={props.blog} location={props.location} twitter={props.twitter}  />
  </div>
);
