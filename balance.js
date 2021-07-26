const Balance = () => {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h3>Balance</h3>
      {JSON.stringify(ctx.users)}
    </>
  );
};
