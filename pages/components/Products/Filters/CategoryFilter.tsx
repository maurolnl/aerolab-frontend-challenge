import React from "react";
import styled from "styled-components";
import Select, {components} from "react-select";

import {Colors, TextStyles} from "../../../../styles/Theme";
import {TextDefault} from "../../layout/Text/TextDefault.styled";
import select_icon from "../../../../assets/icons/selector_icon.svg";
import {SelectIcon} from "../../layout/SelectorIcon.styled";

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SelectIcon src={select_icon.src} />
      </components.DropdownIndicator>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;

const CategoryFilter = () => {
  const options = [
    {value: "all_products", label: "All Products"},
    {value: "gaming", label: "Gaming"},
    {value: "audio", label: "Audio"},
    {value: "smart_home", label: "Smart Home"},
    {value: "monitors_tv", label: "Monitors & TV"},
  ];

  interface Props {
    isFocused: boolean;
    isSelected: boolean;
  }

  const customStyles = {
    menu: () => ({
      color: `${Colors.Neutral[600]}`,
    }),
    option: (provided: any, state: Props) => ({
      ...provided,
      color: `${Colors.Neutral[600]}`,
      paddingLeft: 24,
      paddingTop: 12,
      paddingBottom: 12,
      fontSize: `${TextStyles.Texts.L1.Default.FontSize}`,
      fontWeight: `${TextStyles.Texts.L1.Default.FontWeight}`,
      backgroundColor: state.isFocused || state.isSelected ? `${Colors.Neutral[100]}` : "white",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 256,
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "16px",
      color: `${Colors.Neutral[600]}`,
      border: "1px solid",
      borderColor: `${Colors.Neutral[300]}`,
      padding: "16px 4px 16px 24px",
      fontFamily: `${TextStyles.Texts.L1.Default.FontFamily}`,
      fontSize: `${TextStyles.Texts.L1.Default.FontSize}`,
      fontWeight: `${TextStyles.Texts.L1.Default.FontWeight}`,
      lineHeight: `${TextStyles.Texts.L1.Default.LineHeight}`,
      letterSpacing: `${TextStyles.Texts.L1.Default.LetterSpacing}`,
      fontVariant: `${TextStyles.Texts.L1.Default.FontVariant}`,
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const color = `${Colors.Neutral[600]}`;

      return {...provided, opacity, transition, color};
    },
  };

  return (
    <Wrapper>
      <TextDefault>Filter by: </TextDefault>
      <Select
        components={{DropdownIndicator, IndicatorSeparator: () => null}}
        isSearchable={false}
        options={options}
        placeholder="All Products"
        styles={customStyles}
      />
    </Wrapper>
  );
};

export default CategoryFilter;
