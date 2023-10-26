import { Profile } from './Profile';

export const StarList = ({ stars }) => {
  return (
    <ul>
      {stars.map(star => {
        return (
          <li key={star.id}>
            <Profile star={star} />
          </li>
        );
      })}
    </ul>
  );
};
