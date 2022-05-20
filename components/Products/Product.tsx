import Image from "next/image";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {mutate} from "swr";

import aeropay_icon from "../../assets/icons/aeropay-3.svg";
import {Colors, Shadows} from "../../styles/Theme";
import {Icon} from "../layout/AeroPayIcon.styled";
import {ButtonCTA} from "../layout/Button/ButtonCTA.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {TextL2Default} from "../layout/Text/TextL2Default.styled";
import {device} from "../media/media";
import {useMedia} from "../layout/hooks";
import {useUser} from "../User/context";
import {PROD_URL} from "../../constants";
import {ErrorToast, SuccessToast} from "../Toast/Toast";

import {Images} from "./types";
import api from "./api";

const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 311.67px;
  height: 506px;

  @media ${device.desktop} {
    width: 348px;
  }

  @media ${device.mobileS} {
    width: 335px;
  }

  gap: 16px;

  padding: 0px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
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
  productId: string;
  name: string;
  category: string;
  price: number;
  images: Images;
}

const Product: React.FC<Props> = ({productId, name, category, images, price}) => {
  const [isProcessing, setProcessing] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const isMobileS = useMedia(["(max-width: 620px)"], [true]);
  const {user} = useUser();

  useEffect(() => {
    const isButtonDisabled = user?.points < price;

    setDisabled(isButtonDisabled);
  }, [user?.points, price]);

  const buttonVariant = isDisabled ? "Disabled" : isProcessing ? "Processing" : "";
  const iconVariant = isMobileS ? "Small" : "Mobile";

  const handleRedeem = async () => {
    setProcessing(true);
    const response = await api.redeemProduct(productId);

    mutate(`${PROD_URL}user/me`);

    setProcessing(false);

    if (response) {
      SuccessToast(name, " redeemed successfully", isMobileS);

      return;
    } else {
      ErrorToast(isMobileS);

      return;
    }
  };

  return (
    <ProductWrapper>
      <ProductCard>
        <Center>
          <ImageWrapper>
            <Image
              alt={"product image"}
              height={204}
              loading="lazy"
              objectFit={"cover"}
              src={images.hdUrl}
              width={280}
            />
          </ImageWrapper>
        </Center>
        <ProductDetail>
          <TextDefault color="900">{name}</TextDefault>
          <TextL2Default variant="AllCaps">{category}</TextL2Default>
        </ProductDetail>
      </ProductCard>
      <ButtonCTA
        borderRadius="16px"
        h="59px"
        variant={buttonVariant}
        w="100%"
        onClick={handleRedeem}
      >
        {isDisabled ? (
          <span>
            You need{" "}
            <Icon isDisabled="true" src={aeropay_icon.src} valign="middle" variant={iconVariant} />{" "}
            {user ? price - user.points : 0}
          </span>
        ) : isProcessing ? (
          "Processing..."
        ) : (
          <span>
            Redeem for <Icon src={aeropay_icon.src} valign="middle" variant={iconVariant} /> {price}
          </span>
        )}
      </ButtonCTA>
    </ProductWrapper>
  );
};

export default Product;
