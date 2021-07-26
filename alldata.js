const AllData = () => {
  const [show, setShow] = React.useState(false);
  const [amount, setAmount] = React.useState(0.0);
  const [balance, setBalance] = React.useState(0.0);
  const { status, setContext } = React.useContext(UserContext);
  return (
      <>
      {status.users.map((user) => {
          return(
        <Card
          bgcolor="primary"
          header={user.name}
          status=""
          body={
            <>
              email:{user.email}
              <br />
              password:{user.password}
            </>
          }
        ></Card>)
      })}
    </>
  );
};
