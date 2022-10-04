import React from 'react'
import { BottomNav } from '../../components/common'

const Emissions = () => {
    return (
        <>
            <div>
                <h3>Emissions</h3>
                <p>
                    In order to encourage $CMST adoption, 70% of the total supply will be handed to users in the form of various incentives. These 700 million tokens would be distributed over the course of roughly six years.
                </p>
                <p>
                    Emissions will start at 2% of the total 700M allocated that make it 14M for the first week. For the subsequent week the remaining 686M (700M - 14M emissions from previous week) will be used and 2% of 686M will be emitted which makes the next week's emissions to 13,720,000.
                </p>
                <p>
                    The amount of $HARBOR tokens locked in comparison to the circulating supply has a direct impact on the rate of emissions and reward distribution. However, regardless of the quantity of $HARBOR locked up, the long-term outlook is for emissions to decrease in the future.
                    <ul>
                        <li>
                            $HARBOR token emission velocity is dynamic and is based on the percentage of the total supply that is locked in $veHARBOR.
                        </li>
                        <li>
                            The bigger the proportion of $HARBOR tokens locked in $veHARBOR, the less intensive the distribution of emissions to $CMST borrowers.
                        </li>
                    </ul>
                </p>
                <p>
                    $veHARBOR holders receive a rebase proportional to the weekly emissions to borrowers and the ratio of $veHARBOR to $HARBOR supply.
                </p>
                <p>
                    The weekly rebase amount is calculated with the following formula: ,<br />
                    <b>Weekly rebase </b> = Pending rewards *  emission rate * $veHARBOR locked ratio
                </p>
                <p>
                    <b>$veHARBOR locked ratio</b> = Total $veHARBOR supply / (circulating harbor + total $veHARBOR supply)
                </p>
                <p>
                    The amount of $HARBOR locked as $veHARBOR and the inflation rate of $HARBOR emissions have an inverse relationship. For instance, if only 0% of the $HARBOR is locked, all emissions will go to the vault owners, but if 100% of the $HARBOR is locked, emissions will completely go to $veHARBOR lockers.
                </p>
                <p>
                    This ve(3,3) feature provides a general incentive for all users to lock as many $HARBOR tokens as possible so that the result is reduced circulating supply, reduced emissions, and consequently, fewer $HARBOR tokens available on the market.
                </p>
                <p>
                    Due to the declining inflation design, annual inflation relative to the total supply will be lower in the long run than it is currently, regardless of the $HARBOR's future circulation supply and locking ratio.
                </p>

                <BottomNav
                    preNavLink="harbor-protocol"
                    prevNavText="Introducing Harbor"
                    nextNavLink="vault-voting"
                    nextNavText="Vault voting"
                />
            </div>
        </>
    )
}

export default Emissions