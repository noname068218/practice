import { StarList } from './star';
// import { styled } from 'styled-components';
import { FaBeer } from 'react-icons/fa';

const stars = [
  {
    id: '1',
    name: 'star',
    avatar:
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    name: 'another-star',
    avatar:
      'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const App = () => {
  return (
    <div>
      <h1>
        Top Star <FaBeer />
      </h1>

      <StarList stars={stars} />
    </div>
  );
};
