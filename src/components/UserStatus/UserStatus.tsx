import styles from './UserStatus.module.scss';
import {LocalGithubUser} from "../../types";

export interface UserStatusProps extends Pick<LocalGithubUser, 'public_repos' | 'following' | 'followers'>{}

export const UserStatus = ({ followers, following, public_repos }: UserStatusProps) => (
  <div className={styles.userStatus}>
      <div className={styles.info}>
          <div className={styles.infoTitle}>Repos</div>
          <div className={styles.infoNumber}>{public_repos}</div>
      </div>
      <div className={styles.info}>
          <div className={styles.infoTitle}>Followers</div>
          <div className={styles.infoNumber}>{followers}</div>
      </div>
      <div className={styles.info}>
          <div className={styles.infoTitle}>Following</div>
          <div className={styles.infoNumber}>{following}</div>
      </div>
  </div>
);
