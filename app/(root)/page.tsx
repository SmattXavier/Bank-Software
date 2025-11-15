import React from 'react'
import HeaderBox from "@/components/headerbox";
import TotalBalanceBox from "@/components/totalBalanceBox";
import RightSideBar from "@/components/rightSideBar";

const loggedIn = {
    firstName: 'Johnson',
    lastName: 'James',
    email: 'jjames235@gmail.com',
}

const Home = () => {
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox type='greeting'
                               title='Welcome'
                               user={loggedIn?.firstName || 'Guest'}
                               subtext='Access and manage all your accounts in one place successfully'>
                    </HeaderBox>
                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.78 }>

                    </TotalBalanceBox>
                </header>

                Recent transactions.


            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 125.70},{currentBalance: 500.79}]}
            />
         </section>
    )
}
export default Home
