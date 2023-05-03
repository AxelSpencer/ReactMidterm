import { useFetch } from '../hooks/useFetch';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import Text from './Text';
import Image from './Image';

function Products() {
  const { data: product, loading, error } = useFetch('products');

  console.log(product);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Text size = "l" color = "white"><b>Products</b></Text>
      <>
        {product.map((product) => {
          return(
            <div key={product.id}>
              

                <Link to={`/product-detail/${product.id}`}>
                  <Box size="large" bgColor = "#303030">
                    <Image size="s" id={product.image} alt={product.title} />
                    <div>
                      <Text size = "m" color = "white">{product.title}</Text>
                    </div>
                  </Box>
                </Link>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Products;
