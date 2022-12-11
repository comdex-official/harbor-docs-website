import React from 'react'
import { BottomNav } from '../../components/common'

const VaultVoting = () => {
    return (
        <div>
            <h3>Voting</h3>
            <p>
                Voting for emissions is where users vote to determine the distribution of the weekly Harbor incentives across the different vaults. Users with veHarbor can participate in these votes. Votes are reset to zero each week, and the voting cycle starts again.
            </p>
            <p>
                Holders of veHarbor vote on their chosen vaults to determine which vaults receive emissions during a particular week. Harbor emissions will be allocated in line with the total number of votes each vault receives. In return, voters receive 100% of the fees and external incentives gathered through the vaults.
            </p>


            <BottomNav
                preNavLink="rebase"
                prevNavText=" Rebase"
                nextNavLink="reward-incentive"
                nextNavText="Rewards and incentives"
            />
        </div>
    )
}

export default VaultVoting