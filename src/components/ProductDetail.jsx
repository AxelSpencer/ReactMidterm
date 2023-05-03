import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import Button from './Button';

function ProductDetails() {
    const navigate = useNavigate();

    const back = () => {
        navigate('../products');
    };

    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`products/${id}`);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Box size="large" bgColor = "#303030">
                <Image size="m" id={product.image} alt={product.title} />
                <div>
                    <Text size = "l" color = "white"><b>{product.title}</b></Text>
                    <Text size = "m" color = "white">{product.category}</Text>
                    <Text size = "m" color = "white">{product.description}</Text>
                    <Button onClick={() => back()}>Back</Button>
                </div>
            </Box>
        </div>
    );
}

export default ProductDetails;
