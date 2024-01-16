import React, { useState, useContext } from "react";
import Link from "next/link";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

//INTERNAL IMPORT/
import { VotingContext } from "../../context/Voter";
import Style from "./NavBar.module.css";

const NavBar = () => {
  const { connectWallet, error, currentAccount } = useContext(VotingContext);
  const [openNav, setOpenNav] = useState(true);

  const openNavigation = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={Style.navbar}>
      {error === "" ? (
        ""
      ) : (
        <div className={Style.message__Box}>
          <div style={Style.message}>
            <p>{error}</p>
          </div>
        </div>
      )}

      <div className={Style.navbar_box}>
        <div className={Style.connect}>
          {currentAccount ? (
            <div>
              <div className={Style.connect_flex}>
                <button onClick={openNavigation}>
                  {currentAccount.slice(0, 10)}..
                </button>
                {currentAccount && (
                  <span>
                    {openNav ? (
                      <AiFillUnlock onClick={openNavigation} />
                    ) : (
                      <AiFillLock onClick={openNavigation} />
                    )}
                  </span>
                )}
              </div>

              {openNav && (
                <div className={Style.navigation}>
                  <p>
                    <Link href={{ pathname: "/" }}>Home</Link>
                  </p>

                  <p>
                    <Link href={{ pathname: "candidate-regisration" }}>
                      Candidate Registration
                    </Link>
                  </p>
                  <p>
                    <Link href={{ pathname: "allowed-voters" }}>
                      Voter Registration
                    </Link>
                  </p>

                  <p>
                    <Link href={{ pathname: "voterList" }}>Voter List</Link>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button onClick={connectWallet}>Connect Wallet</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

