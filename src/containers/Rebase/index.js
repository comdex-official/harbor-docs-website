import React from 'react'
import { BottomNav } from '../../components/common'

const Rebase = () => {
    return (
        <>
            <div>
                <h3>Rebase</h3>
                <p>
                    veHarbor holders receive a weekly rebase amount, which prevents token dilution. The veHarbor holders receive veHarbor as rebase.
                </p>
                <p>
                    The weekly rebase amount is calculated with the following formula:
                    Weekly rebase = Pending rewards*  emission rate* veHarbor locked ratio
                    veHarbor locked ratio= Total veHarbor supply/(circulating harbor + total veHarbor supply).
                </p>
                <p>
                    The following simulations are based on certain assumptions of veHarbor/Harbor supply and not actual numbers:
                </p>

                <p>
                    <a href="https://docs.google.com/spreadsheets/d/1sfdoOO2Yeb6UB8a3lrBQsyw3dP1iYcCj3nBsHH4E3C0/edit?usp=sharing  ">https://docs.google.com/spreadsheets/d/1sfdoOO2Yeb6UB8a3lrBQsyw3dP1iYcCj3nBsHH4E3C0/edit?usp=sharing </a>
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
                    preNavLink="emissions"
                    prevNavText="Emissions"
                    nextNavLink="vault-voting"
                    nextNavText="Voting"
                />
            </div>
        </>
    )
}

export default Rebase;