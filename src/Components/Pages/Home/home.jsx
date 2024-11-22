import { Card, Flex, Typography, Button,Image } from 'antd';
import ProductData from '../../Data/ProductData';

const {Meta} =Card;

const Home = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
      <Card style={{ height: 260, padding: '20px' }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            Here is your HOME page
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aliquam!
          </Typography.Text>
        </Flex>
        <Flex gap="large">
          <Button type="primary" size="large">
            Explore More
          </Button>
          <Button size="large">
            Contact MK
          </Button>
        </Flex>
      </Flex>
    </Card>
    <Flex align="center" justify="space-between">
        <Typography.Title level={3} strong className="primary--color">
          HOME
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>

      <Flex align="center" gap="large">
        {ProductData.map((plant) => (
          <Card key={plant.id} hoverable className="product-card">
            <Image src={plant.picture} style={{ width: '130px' }} />
            <Meta title={plant.name} style={{ marginTop: '1rem' }} />
          </Card>
        ))}
      </Flex>
      </Flex>
    </div>
  );
};

export default Home;
