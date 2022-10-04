import React from 'react'
import incentiveMatrix from '../../assets/images/Harbor_protol_01.png';
import { BottomNav } from '../../components/common';

const RewardAndIncentive = () => {
    return (
        <div>
            <h3>Rewards and incentives</h3>
            <p>
                Locking Harbor for $veHARBOR entitles you to earn protocol revenue that is earned from the fees collected from interests from borrowers, draw down fees and also liquidation fees that is earned from $CMST borrowers after the surplus threshold is crossed.
            </p>
            <p>
                These incentives would be sent to $veHARBOR lockers in the form of Harbor tokens, that is all the fees accumulated will be used to buy Harbor from market and distribute that Harbor to $veHARBOR lockers. All fees and protocol revenue would be sent in the form of Harbor tokens.
            </p>
            <h3>Incentives you earn for $veHARBOR lockers:</h3>
            <ol>
                <li>
                    Part of the interest and fees that a protocol earns with adoption of $CMST is redistributed to $veHARBOR lockers.
                </li>
                <li>
                    Weekly rebase amount of $veHARBOR is distributed based on the $veHARBOR to Harbor ratio, in this way your original position will stay undiluted with increasing emissions.This rebase amount in the form of $veHARBOR is proportionally locked for from the time received for the lock period chosen by user at time of locking.
                </li>
                <li>
                    Protocols can incentivise minting of CMST with their token and also earn a larger amount of Harbor emissions for their tokens by incentivizing the $veHARBOR lockers to vote for their vaults. The external incentives work similar to the concept of ‘bribing’. Bribes can be added to whitelisted vaults and are distributed only to voters on that vault, proportionally to their share of vault votes.
                </li>
                <li>
                    These rewards are available for claim after every week and are proportional to the voting power cast by a voter.
                </li>
                <li>
                    Harbor incentive matrix:
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