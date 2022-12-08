import React from 'react'
import incentiveMatrix from '../../assets/images/Harbor_protol_01.png';
import { BottomNav } from '../../components/common';
import './index.less'
const RewardAndIncentive = () => {
    return (
        <div>
            <h3>Incentives for veHarbor holders:</h3>
            <ol>
                <li>
                    The weekly rebase amount of veHarbor is distributed based on the veHarbor to Harbor ratio. The rebase amount in veHarbor is proportionally locked from the time received for the period chosen by the user at the start. In this way, your original position will stay undiluted with increasing emissions.
                </li>
                <li>
                    Protocols can incentivize the minting of $CMST through their tokens by providing external incentives to veHarbor holders. The external incentives work similarly to the concept of ‘bribing’. External incentives can be added to whitelisted vaults and are distributed only to voters on that vault.
                </li>
                <li>
                    Voters can claim rewards after every week, proportional to their voting power.
                </li>
            </ol>
            <h3>Harbor Incentive Matrix:</h3>
            <br />
            <p>
                <img src={incentiveMatrix} alt="Incentive Matrix" className='reward-incentive-matrix-image' />
            </p>
            <BottomNav
                preNavLink="vault-voting"
                prevNavText="Vault voting"
                nextNavLink="use-cases"
                nextNavText="Use Cases"
            />
        </div>
    )
}

export default RewardAndIncentive