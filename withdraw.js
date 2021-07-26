const Withdraw = () => {
  const [show, setShow] = React.useState(false);
  const [show_overdraft, setShowOverdraft] = React.useState(false)
  const [amount, setAmount] = React.useState(0.0);
  const [balance, setBalance] = React.useState(0.0);
  const { status, setContext } = React.useContext(UserContext);
  React.useEffect(() => {
    console.log("Rendering ...", status);
    console.log(
      "Current user balance:",
      status.current_user !== undefined
        ? status.current_user.balance
        : "Not defined"
    );
    setShow(status.current_user !== undefined);
    setBalance(
      status.current_user !== undefined ? status.current_user.balance : null
    );
  });
  const handleWithdraw = () => {
    console.log("amount: ", amount);
    console.log("amount as float: ", parseInt(amount));
    console.log("user object: ", status.current_user);
    console.log(
      "user object balance as float: ",
      parseFloat(status.current_user.balance),
      typeof status.current_user.balance
    );

    let newBalance =
      parseFloat(status.current_user.balance) - parseFloat(amount);
    if(newBalance<0){
        setShowOverdraft(true)
        return
    }
    console.log("new balance: ", newBalance);
    setAmount(0.0);
    setBalance(newBalance);

    let newUsers = status.users.map((user) => {
      if (user.name == status.current_user.name) {
        user.balance = newBalance;
      }
      return user;
    });

    console.log(newUsers);
    setContext({
      users: newUsers,
      current_user: getUserObject(status.current_user.name, newUsers),
    });
    console.log(status);
    setShowOverdraft(false)
  };
  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={""}
      body={
        show ? (
          <>
            Balance :$
            {balance}
            <br />
            Withdraw Amount:
            <input
              type="input"
              className="form-control"
              id="amount"
              placeholder="Amount to withdraw"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn-primary"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
            {show_overdraft ? <div className="text-danger">*The amount ${amount} cannot be withdrawn</div>: <></>}
          </>
        ) : (
          <>
            <h3>Must login to show this page</h3>
          </>
        )
      }
    ></Card>
  );
};
