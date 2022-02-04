/* eslint-disable react/no-children-prop */
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

type SearchBoxProps = {
  placeholder?: string;
  width?: string;
  height?: string;
  onChange: (event) => void;
  value?: string;
  disabled?: boolean,
};
const SearchBox = (props: SearchBoxProps) => {
  const { placeholder = "Search...", width = "150px", height = "38px", onChange, value, disabled } = props;
  return (
    <InputGroup
      width={width}
    >
      <Input
        placeholder={placeholder}
        height={height}
        fontSize="13px"
        onChange={onChange}
        value={value}
        _focus={{
          outline: "none"
        }}
        disabled={disabled}
      />
      <InputRightElement children={<AiOutlineSearch size="19px" />} />
    </InputGroup>
  );
};

export default SearchBox;
