const Spa = () => {
  const [status, setContext] = React.useState({users:[], current_user:undefined})
  return (
    <HashRouter>
      <div>
        <NavBar />
        <UserContext.Provider value={{status, setContext}}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
};
ReactDOM.render(<Spa />, document.getElementById("root"));
