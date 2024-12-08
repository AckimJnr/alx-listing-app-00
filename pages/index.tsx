import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the ALX Listing App</h1>
      <Card
        title="Sample Property"
        description="This is a placeholder property description."
        image="/assets/placeholder.jpg"
      />
      <Button label="Book Now" onClick={() => alert('Booking!')} />
    </div>
  );
};

export default Home;
