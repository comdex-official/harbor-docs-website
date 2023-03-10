import React from 'react'
import { BottomNav } from '../../components/common'

const Emissions = () => {
    return (
        <>
            <div>
                <h3>Emissions</h3>
                <p>
                    In order to encourage $CMST adoption, 50% of the total supply will be distributed to users in the form of emissions over roughly six years.
                </p>
                <p>
                    Emissions will start at 1% of the total 500M allocated, which makes it 5M for the first week. For the subsequent week, the remaining 495M (500M - 5M emissions from the previous week) will be used, and 1% of 495M will be emitted, which makes the following week's emissions 4,950,000.
                </p>
                <p>
                    The amount of $HARBOR tokens locked compared to the circulating supply directly impacts the emissions and reward distribution rate. However, regardless of the quantity of $HARBOR locked up, the long-term outlook is for emissions to decrease.
                    <ul>
                        <li>
                            $HARBOR token emission velocity is dynamic and is based on the percentage of the total supply locked in veHARBOR.
                        </li>
                        <li>
                            The more significant the proportion of $HARBOR tokens locked in veHARBOR, the less intensive the distribution of emissions to $CMST borrowers.
                        </li>
                    </ul>
                </p>
                <p>
                    5% of the actual emissions distributed each week, depending on the veHarbor/Harbor ratio, will be sent to the team address to finance ongoing costs and all upcoming development activities.
                </p>

                
                <BottomNav
                    preNavLink="harbor-protocol"
                    prevNavText="Introducing Harbor"
                    nextNavLink="rebase"
                    nextNavText="Rebase"
                />
            </div>
        </>
    )
}

export default Emissions