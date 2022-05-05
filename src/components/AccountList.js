import React from 'react'
import AccountCard from "./AccountCard";

const AccountList = (props) => {
    console.log(props);
  
   
    const renderContactList = props.accounts.map((account) => {
      return (
        <AccountCard
        account={account}
          
        />
      );
    });
    return <div className="ui celled list">{renderContactList}</div>;
  };

export default AccountList;

