import Image from "next/image";
import styled from "styled-components";

import aeropay_icon from "../../../assets/icons/aeropay-3.svg";
import product_image from "../../../assets/product.png";
import {Colors, Shadows} from "../../../styles/Theme";
import {Icon} from "../layout/AeroPayIcon.styled";
import {ButtonCTA} from "../layout/Button/ButtonCTA.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {TextL2Default} from "../layout/Text/TextL2Default.styled";

const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 348px;
  height: 506px;

  gap: 16px;

  padding: 0px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 348px;
  height: 431px;

  padding: 0px;

  background-color: white;

  filter: drop-shadow(${Shadows.Elevation1.Default});
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 16px 24px;

  width: 100%;

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 0px 0px 16px 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 16px 16px 0px 0px;
`;

interface Props {
  name: string;
  description: string;
  image: string;
}

const Product: React.FC<Props> = ({name, description, image}) => {
  return (
    <ProductWrapper>
      <ProductCard>
        <Center>
          <ImageWrapper>
            <Image
              alt={"product image"}
              height={204}
              objectFit={"cover"}
              src={product_image.src}
              width={280}
            />
          </ImageWrapper>
        </Center>
        <ProductDetail>
          <TextDefault color="900">Product name</TextDefault>
          <TextL2Default variant="AllCaps">Product type</TextL2Default>
        </ProductDetail>
      </ProductCard>
      <ButtonCTA h="59px" w="348px">
        <span>
          Redeem for <Icon src={aeropay_icon.src} valign="middle" variant="Mobile" /> 12.500
        </span>
      </ButtonCTA>
    </ProductWrapper>
  );
};

export default Product;
