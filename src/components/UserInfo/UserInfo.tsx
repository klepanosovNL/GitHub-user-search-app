import { ReactComponent as IconCompany } from "../../assets/icon-company.svg";
import { ReactComponent as IconBlog } from "../../assets/icon-website.svg";
import { ReactComponent as IconLocation} from "../../assets/icon-location.svg";
import { ReactComponent as IconTwitter} from "../../assets/icon-twitter.svg";
import styles from './UserInfo.module.scss';
import {LocalGithubUser} from "../../types";
import {InfoItem, InfoItemProps} from "../InfoItem";

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'>{}

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <IconCompany />,
            text: company
        },
        {
            icon: <IconBlog />,
            text: blog
        },
        {
            icon: <IconLocation />,
            text: location
        },
        {
            icon: <IconTwitter />,
            text: twitter
        },
    ]

    return (
        <div className={styles.userInfo}>
            {items.map((element, index) => <InfoItem {...element} key={index} />)}
        </div>
    );
}
