import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../../ui';

import { 
  ProductCardWrapper,
  ProductImageWrapper,
  ProductContent,
  ProductTitle,
  ProductType
} from './styled'

const ProductCard = ({ product }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [myPoints, setMyPoints] = useState(2200);

  const { name, category, img, cost } = product;
  const { url, hdUrl } = img;

  useEffect(() => {
    if(cost > myPoints) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [myPoints, cost]);

  return (
    <div>
      <ProductCardWrapper>
        <ProductImageWrapper>
        { img ? (
            <Image
              src={hdUrl}
              alt={name}
              width={4}
              height={3}
              layout='responsive'
              objectFit='contain'
            />
          ) : (
            <Image
              src={hdUrl}
              alt={name}
              width={100}
              height={100}
              layout='responsive'
              objectFit='contain'
            />
          )
        }
        </ProductImageWrapper>
        <ProductContent>
          <ProductTitle>{name}</ProductTitle>
          <ProductType>{category}</ProductType>
        </ProductContent>
      </ProductCardWrapper>
      <Button 
        fluid={true}
        disabled={isDisabled}
      >
        {
          cost > myPoints ? (
            <>You need {cost}</>
          ) : (
            <>Redeem for {cost}</>
          )
        }
      </Button>
    </div>
  );
};

export default ProductCard;
