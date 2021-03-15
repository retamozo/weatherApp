import { AllowedCity, Options } from "@/types";
import React, {
  FunctionComponent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListContainer,
  ListItem,
} from "./styles";

export const Select: FunctionComponent<{
  handleChange: (value: string) => void;
  options: Options<string>;
  isError: boolean;
}> = memo(({ handleChange, options, isError }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].title,
  );

  const dropwdownRef = useRef<HTMLUListElement>(null);

  const handleOption = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    handleChange(value);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLElement>) => {
    if (isError) return;
    e.preventDefault();
    if (!isOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    setIsOpen(!isOpen);
  };

  const handleClick = useCallback((e) => {
    if (dropwdownRef.current && !dropwdownRef.current.contains(e.target)) {
      document.removeEventListener("mousedown", handleClick);
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  return (
    <DropdownContainer>
      <DropdownHeader disabled={isError} onClick={toggleDropdown}>
        {selectedOption}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList ref={dropwdownRef}>
            {options.map(({ value, title }, i) => (
              <ListItem onClick={handleOption(value)} key={i + value}>
                {title}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
});
