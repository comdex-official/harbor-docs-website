import React from 'react'
import { BottomNav } from '../../components/common'

const Emissions = () => {
    return (
        <>
            <div>
                <h3>Emissions</h3>
                <p>
                    In order to encourage $CMST adoption, 50% of the total supply will be distributed to users in the form of emissions over roughly six years.                </p>
                <p>
                    Emissions will start at 1% of the total 500M allocated, which makes it 5M for the first week. For the subsequent week, the remaining 545M (550M - 5M emissions from the previous week) will be used, and 1% of 545M will be emitted, which makes the following week's emissions 4,950,000.
                </p>
                <p>
                    The amount of $HARBOR tokens locked compared to the circulating supply directly impacts the rate of emissions and reward distribution. However, regardless of the quantity of $HARBOR locked up, the long-term outlook is for emissions to decrease.                    <ul>
                        <li>
                            $HARBOR token emission velocity is dynamic and is based on the percentage of the total supply locked in veHARBOR.                        </li>
                        <li>
                            The more significant the proportion of $HARBOR tokens locked in veHARBOR, the less intensive the distribution of emissions to $CMST borrowers.                        </li>
                    </ul>
                </p>
                <p>
                    veHarbor holders receive a weekly rebase amount, which prevents token dilution. The veHarbor holders receive veHarbor as rebase.                </p>
                <p>
                    The weekly rebase amount is calculated with the following formula:
                    <b>Weekly rebase </b> = Pending rewards *  emission rate * $veHARBOR locked ratio
                </p>
                <p>
                    <b>$veHARBOR locked ratio</b> = Total $veHARBOR supply / (circulating harbor + total $veHARBOR supply)
                </p>
                <p>
                    These simulations are based on certain assumptions of veHarbor/Harbor supply and not actual numbers:
                </p>
                <p>
                    <a href="https://docs.google.com/spreadsheets/d/1sfdoOO2Yeb6UB8a3lrBQsyw3dP1iYcCj3nBsHH4E3C0/edit?usp=sharing ">https://docs.google.com/spreadsheets/d/1sfdoOO2Yeb6UB8a3lrBQsyw3dP1iYcCj3nBsHH4E3C0/edit?usp=sharing </a>
                </p>

                <p>
                    The amount of $HARBOR locked as veHARBOR and the inflation rate of $HARBOR emissions have an inverse relationship. For instance, if only 0% of the $HARBOR is locked, all emissions will go to the vault owners, but if 100% of the $HARBOR is locked, emissions will entirely go to veHarbor lockers.
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
                    nextNavText="Voting"
                />
            </div>
        </>
    )
}

export default Emissions