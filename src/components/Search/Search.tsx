import {useState} from 'react';
import styles from './Search.module.css';
import search from './search.svg';
import budova from './budova.svg';
import kniznica from './kniznica.svg';
import miestnost from './miestnost.svg';

interface Props {
    onClick: Function;
}

const options = [
    {
        name: "L9 - HLAVNÁ BUDOVA",
        icon: budova
    },
    {
        name: "BN32",
        icon: budova
    },
    {
        name: "L9-A138",
        icon: miestnost
    },
    {
        name: "N7 - UNIVERZITNÁ KNIŽNICA",
        icon: kniznica
    },
    {
        name: "L9-A512",
        icon: miestnost
    },
    {
        name: "L9-B532",
        icon: miestnost
    }
];

const Search = (props: Props) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<{name: string, icon: string}[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        // Filter options based on input
        const filtered = options.filter(option =>
            option.name.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredOptions(filtered);
        setShowDropdown(true);
    };

    const handleFocus = () => {
        // Show dropdown when input is focused
        setFilteredOptions(options);
        setShowDropdown(true);
    };

    const handleOptionClick = (option: string) => {
        // Set input value when an option is clicked
        setInputValue(option);
        props.onClick();
        setShowDropdown(false);
    };

    return (
        <div className={styles.search}>
            <img className={styles.searchIcon} alt="" src={search} />
            <input className={styles.placeholderText}
                   value={inputValue}
                   onChange={handleInputChange}
                   onFocus={handleFocus}
                   onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                   placeholder={"Hľadaj priestor"}
            />
            <div className={styles.borderBottom} />
            {showDropdown && filteredOptions.length > 0 && (
                <div className={styles.optionContainer}>
                    {
                        // @ts-ignore
                        filteredOptions.map((option, index) => (
                        <div
                            className={styles.option}
                            onClick={() => handleOptionClick(option.name)}
                        >
                            <img src={option.icon} alt=''/>
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>);
};

export default Search;
