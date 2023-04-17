import {ReactComponent as IconSearch} from "../../assets/icon-search.svg";
import styles from './Search.module.scss';
import React from "react";
import {Button} from "../Button";

interface SearchProps {
    hasError: boolean,
    onSubmit: (text: string) => void,
}

type FormFields = {
    username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit}: SearchProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
        event.preventDefault();

        const text = event.currentTarget.username.value;

        if (text.trim()) {
            onSubmit(text);
            event.currentTarget.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="false">
            <div className={styles.search}>
                <label htmlFor="search" className={styles.label}>
                    <IconSearch />
                </label>
                <input
                    type="text"
                    className={styles.textField}
                    id="search"
                    placeholder="Search Github username..."
                    name="username"
                />
                {hasError && (
                    <div className={styles.error}>
                        No results
                    </div>
                )}
                <Button>Search</Button>
            </div>
        </form>
    );
};
