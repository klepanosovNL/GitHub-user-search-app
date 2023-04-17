import styles from './InfoItem.module.scss';
import {ReactNode} from "react";

export interface InfoItemProps {
    icon: ReactNode,
    text?: string | null,
    isLink?: boolean
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
    const currentText = text || 'Not available';
    let currentHref: string = '';

    if (isLink) {
        currentHref = text && text.startsWith('http') ? text : `https://${text}`
    }

    return (
        <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
            {icon}
            <div>
                {isLink && text ? (
                    <a href={currentHref}
                       target="_blank"
                       ref="noreferrer"
                       className={styles.link} rel="noreferrer">{currentText}</a>
                ) : currentText}
            </div>
        </div>
    );
}
