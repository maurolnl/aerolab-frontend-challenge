import React from "react";
import styled from "styled-components";
import Select, {components} from "react-select";

import {Colors, TextStyles} from "../../../styles/Theme";
import {TextDefault} from "../../layout/Text/TextDefault.styled";
import select_icon from "../../../assets/icons/selector_icon.svg";
import {SelectIcon} from "../../layout/SelectorIcon.styled";
import {useMedia} from "../../layout/hooks";
import ClientOnly from "../../ClientOnly";
import {device} from "../../media/media";

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

  @media ${device.mobileS} {
    width: 100%;
  }
`;

const CategoryFilter = () => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const isMobile = useMedia(["(max-width: 1023px)"], [true]);
  const isMobileS = useMedia(["(max-width: 620px)"], [true]);

  const width = isMobileS ? "100%" : "256px";

  const fontSize = !isMobile
    ? TextStyles.Texts.L1.Default.FontSize
    : TextStyles.Texts.Mobile.L1.Default.FontSize;

  const fontWeight = !isMobile
    ? TextStyles.Texts.L1.Default.FontWeight
    : TextStyles.Texts.Mobile.L1.Default.FontWeight;

  const lineheight = !isMobile
    ? TextStyles.Texts.L1.Default.LineHeight
    : TextStyles.Texts.Mobile.L1.Default.LineHeight;

  const letterSpacing = !isMobile
    ? TextStyles.Texts.L1.Default.LetterSpacing
    : TextStyles.Texts.Mobile.L1.Default.LetterSpacing;

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
    menu: (provided: any) => ({
      ...provided,
      color: `${Colors.Neutral[600]}`,
      width: width,
    }),
    option: (provided: any, state: Props) => ({
      ...provided,
      color: `${Colors.Neutral[600]}`,
      paddingLeft: 24,
      paddingTop: 12,
      paddingBottom: 12,
      fontSize: `${fontSize}`,
      fontWeight: `${fontWeight}`,
      cursor: "pointer",
      backgroundColor: state.isFocused || state.isSelected ? `${Colors.Neutral[100]}` : "white",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: width,
      height: "59px",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "16px",
      color: `${Colors.Neutral[600]}`,
      cursor: "pointer",
      border: "1px solid",
      paddingLeft: "14px",
      paddingRight: "6px",
      borderColor: `${Colors.Neutral[300]}`,
      fontFamily: `${TextStyles.Texts.L1.Default.FontFamily}`,
      fontSize: `${fontSize}`,
      fontWeight: `${fontWeight}`,
      lineHeight: `${lineheight}`,
      letterSpacing: `${letterSpacing}`,
      fontVariant: `${TextStyles.Texts.L1.Default.FontVariant}`,
    }),
    container: (provided: any) => ({
      ...provided,
      width: width,
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
      <ClientOnly>
        <TextDefault display={isDesktop ? "" : "none"}>Filter by: </TextDefault>
        <Select
          components={{DropdownIndicator, IndicatorSeparator: () => null}}
          isSearchable={false}
          options={options}
          placeholder="All Products"
          styles={customStyles}
        />
      </ClientOnly>
    </Wrapper>
  );
};

export default CategoryFilter;
