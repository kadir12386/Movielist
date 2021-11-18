function Msg({ name, pic }) {
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
