export const Profile = ({ star: { name, avatar } }) => {
  return (
    <div>
      {' '}
      <div>
        <p>
          <b>username:</b> {name}
        </p>
        <img src={avatar} alt={name} />
      </div>
    </div>
  );
};
