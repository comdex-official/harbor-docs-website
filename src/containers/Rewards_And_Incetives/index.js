import React from 'react'
import incentiveMatrix from '../../assets/images/Harbor_protol_01.png';
import { BottomNav } from '../../components/common';

const RewardAndIncentive = () => {
    return (
        <div>
            <h3>Rewards and incentives</h3>
            <p>
                Locking Harbor for veHarbor entitles you to earn protocol revenue after crossing the surplus threshold. The protocol generates revenue from the stability fees(interest collected on $CMST), drawdown fees, and liquidation fees. These incentives would be sent to veHarbor lockers in the form of $CMST.
            </p>
            <h3>Incentives you earn for $veHARBOR lockers:</h3>
            <ol>
                <li>
                    Part of the interest and fees the protocol earns with the adoption of $CMST is redistributed to veHarbor holders.                </li>
                <li>
                    The weekly rebase amount of veHarbor is distributed based on the veHarbor to Harbor ratio. The rebase amount in veHarbor is proportionally locked from the time received for the period chosen by the user at the start. In this way, your original position will stay undiluted with increasing emissions.                </li>
                <li>
                    Protocols can incentivize the minting of $CMST through their tokens by providing external incentives to veHarbor holders. The external incentives work similar to the concept of ‘bribing’. External incentives can be added to whitelisted vaults and are distributed only to voters on that vault.                </li>
                <li>
                    Voters can claim rewards after every week, proportional to their voting power.                </li>
                <li>
                    Harbor incentive matrix:
                    <br />
                    <br />
                    <p>
                        <img src={incentiveMatrix} alt="Incentive Matrix" />
                    </p>
                </li>
            </ol>

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