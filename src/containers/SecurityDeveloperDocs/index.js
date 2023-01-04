import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const SecurityDeveloperDocs = () => {
  return (
    <div id="content-start">
      <h2>Security and Developer Docs</h2>
      <h3>1. Asset Module: x/asset</h3>
      <h4>Abstract</h4>
      <p>The <b>x/asset</b> modules facilitate creating Apps, Assets, Pairs , ExtendedPairVault .</p>
      <h4>Concept</h4>
      <p><b>App:</b> An app needs to be added via governance proposal for a specific protocol.All major functionality is driven at app level , providing an ecosystem from multiple apps to co-exist.</p>
      <p>Asset: An asset to be used in the chain has to be added via governance proposal.An asset is a common entity and can be used globally by any app .i.e the app can control the use of any in their protocol but cannot control/stop other apps to use the same.</p>
      <p><b>Asset:</b> An asset to be used in the chain has to be added via governance proposal. An asset is a common entity and can be used globally by any app .i.e the app can control the use of any in their protocol but cannot control/stop other apps to use the same.</p>
      <p>
        <b>Pair:</b> A pair is an ordered combination of 2 assets where first asset is an asset accepted as deposit by protocol and second asset is the one minted by protocol for the user.
      </p>
      <p><b>ExtendedPair:</b> ExtendedPair as the name suggests is an extension of a pair to be used by a specific app for vault creation containing key params for each Collateral - Borrow asset pair.</p>
      <h4>The x/asset modules </h4>

      <h3>STATE:</h3>
      <pre>
        {`message AppData {
   uint64 id     
   string name      
   string short_name   
   string min_gov_deposit 
   uint64 gov_time_in_seconds 
   repeated MintGenesisToken genesis_token }`}
      </pre>

      <p>AppData:</p>
      <ol type="a">
        <li>id: unique app id</li>
        <li>name: App name</li>
        <li>short_name: App short name</li>
        <li>gov_time_in_seconds : The governance voting time period used by smart contracts managing the governance of the app.</li>
        <li>genesis_token: repeated tokens minted by the protocol via tokenmint module.</li>
      </ol>

      <pre>
        {`message MintGenesisToken {
   uint64 asset_id 
   string genesis_supply 
   bool is_gov_token 
   string recipient 
}
`}
      </pre>

      <p>MintGenesisToken:</p>
      <ol type="a">
        <li>asset_id: Asset Id of the token minted via tokenmint module.</li>
        <li>Genesis_supply: genesis supply for the minted asset_id</li>
        <li>Is_gov_token: Boolean value denoting the asset used as governance token (used by cosmwasm governance contract). Only one governance token can exist for an app.</li>
        <li>recipient : The address eligible to receive genesis token .</li>
      </ol>

      <pre>
        {`message Asset {
 uint64 id      
 string name    
 string denom  
 bool is_on_chain 
 bool is_oracle_price_required }`}
      </pre>

      <p>Asset:</p>
      <ol type="a">
        <li>id: unique asset id</li>
        <li>Name: asset name</li>
        <li>Denom: asset denom</li>
        <li>Decimal: decimal precision used by the asset</li>
        <li>Is_on_chain: Boolean flag denoting if asset is generated/exist on chain (true if asset is on-chain)</li>
        <li>is_oracle_price_required: Boolean flag checking if oracle price fetching is required for the asset (true if required)</li>
      </ol>

      <pre>
        {`message ExtendedPairVault {
   uint64 id 
   uint64 app_id   
   uint64 pair_id      
   string stability_fee       
   string closing_fee          
   string liquidation_penalty  
   string draw_down_fee   
   bool is_vault_active      
   string debt_ceiling       
   string debt_floor        
   bool is_stable_mint_vault 
   string min_cr 
   string pair_name  
   bool asset_out_oracle_price 
   uint64 asset_out_price  
   uint64 min_usd_value_left 
 }
`}
      </pre>

      <p>ExtendedPairVault:</p>
      <ol type="a">
        <li>Id: Unique extended_pair_vault id</li>
        <li>app_id: app_id designated for the extended_pair_vault. Can only be used by this app_id.</li>
        <li>pair_id:base pair_id</li>
        <li>stability_fee: interest charge on debt issued annually (accrued per block)</li>
        <li>closing_fee: fee charged on closing a vault</li>
        <li>liquidation_penalty: Penalty charged of debt if vault is liquidated due to bad collateral ratio</li>
        <li>draw_down_fee:fee charged by protocol of minting the borrowed token.</li>
        <li>Is_vault_active: flag check if vault operations are active for the extended_pair_vault</li>
        <li>debt_ceiling : maximum debt that can be borrowed under the extended_pair_vault.</li>
        <li>debt_floor: Minimum debt that must be borrowed in a vault.</li>
        <li>Is_stable_mint_vault: flag check if vault created under this extended_pair_vault acts as stable mint vault</li>
        <li>min_cr : minimum collateralization ratio to maintain in vault to avoid liquidation</li>
        <li>pair_name : a unique pair name for the extended_pair_vault</li>
        <li>asset_out_oracle_price : boolean flag denoting if asset_out price for the pair to be taken via oracle</li>
        <li>asset_out_price: asset out price if Asset_out_oracle_price is false</li>
        <li>min_usd_value_left: minimum asset </li>
        <li>* Creation of ExtendedPairVault is done through app governance(CosmWasm contracts)</li>
      </ol>

      <pre>
        {`message Pair {
 uint64 id      
 uint64 asset_in      
 uint64 asset_out   
}
`}
      </pre>

      <p>Pair:</p>
      <ol type="a">
        <li>id : unique pair id</li>
        <li>asset_in: asset_in asset id</li>
        <li>asset_out : asset_out asset id</li>
      </ol>

      <h3>2. Vault Module: x/vault</h3>
      <h4>ABSTRACT:</h4>
      <p>
        The Vault module holds the functionality to create / manage the CDP vaults users .The CDP vault creates an asset by locking up another listed asset as collateral.
      </p>
      <p>The prices of assets are tracked from oracles like Band Protocol.</p>
      <p>A liquidation event is triggered when the collateralization ratio of the position falls below the minimum threshold value (Liquidation Ratio) for a cAsset.</p>
      <p>Collateralization Ratio = (Value of collaterals locked up)/(Value of borrowed assets)</p>
      <p>The Module also offers Stable Mint functionality which is a global common vault for all users where the users can deposit / withdraw collateral for a  borrowed asset at 1 : 1 ratio. </p>

      <h4>STATE:</h4>
      <ol type="a">
        <li>
          <p><u>Stores Vault Information</u></p>
          <pre>
            {`message Vault {
 string id 
 uint64 app_id 
 uint64 extended_pair_vault_id       
 string owner
 string amount_in
 string amount_out 
 string interest_accumulated
 string closing_fee_accumulated }`}
          </pre>
          <p><u>Vault:</u></p>
          <ol type="a">
            <li>Id:  Unique vault id </li>
            <li>app_id:  app id under which the vault is created</li>
            <li>extended_pair_vault_id: extended pair vault id corresponding to the vault</li>
            <li>amount_in : amount of collateral token amount in vault</li>
            <li>amount_out: amount of debt issued from the vault</li>
            <li>Interest_accumulated: vault interest accumulated on debt issued</li>
            <li>closing_fee_accumulated: closing fee charged of on closing the vault</li>
          </ol>
        </li>
        <li>
          <p><u>Stores Stable Mint Vault Information</u></p>
          <pre>
            {`message StableMintVault {
 string id 
 string amount_in 
 string amount_out
 uint64 app_id 
 uint64 extended_pair_vault_id }`}
          </pre>
          <p>	StableMintVault</p>
          <ol type="a">
            <li>Id: unique stable mint vault id</li>
            <li>amount_in: total amount in </li>
          </ol>
        </li>
        <li>
          <p>Stores User Vault Mapping for tracking vaults of user in each extended pairs with user address as key</p>
          <pre>{`message UserVaultAssetMapping {
 string owner 
 repeated VaultToAppMapping  user_vault_app }
 
message VaultToAppMapping {
 uint64 app_id = 1;
 repeated ExtendedPairToVaultMapping user_extended_pair_vault }
 
message ExtendedPairToVaultMapping {
 uint64 extended_pair_id 
 string vault_id 
}
`}</pre>
          <p>UserVaultAssetMapping</p>
          <ol type="a">
            <li>Contains owner vaults across different app_id and extended pair(under each app_id)</li>
          </ol>
        </li>
        <li>
          <p><u>Stores App to Extended Pair vault Mapping for tracking vault ids Created in each extended pair with total minted and collateral locked.</u></p>
          <pre>
            {`message AppExtendedPairVaultMapping {
 uint64 app_id 
 uint64 counter = 2;
 repeated ExtendedPairVaultMapping extended_pair_vaults }
 
message ExtendedPairVaultMapping
{
 uint64 extended_pair_id 
 repeated string vault_ids 
 string token_minted_amount
 string collateral_locked_amount}`}
          </pre>
          <p>	AppExtendedPairVaultMapping</p>
          <ol type="a">
            <li>Counter: global vault counter across an app</li>
            <li>Extended_pair_vaults : array of vaults info by extended pair id</li>
          </ol>
        </li>
      </ol>

      <h4>MESSAGES:</h4>
      <ol type="1">
        <li>
          <p><u>Create New Vault</u></p>
          <pre>
            {`message MsgCreateRequest {
 string from   
 uint64 app_id  
 uint64 extended_pair_vault_id 
 string amount_in 
 string amount_out }`}
          </pre>
          <p>MsgCreateRequest:</p>
          <ol type="a">
            <li>Users can create a vault for an app and extended_pair_vault_ id with an initial amount_in (collateral) and amount_out(debt) .</li>
            <li>Collateralization ratio should be greater than min_cr( defined for the extended_pair_vault_id).</li>
            <li>Draw_down fee on the debt is sent to the collector and remaining debt is sent to the vault owner. <br />
              Eg: If amount_out is 1000000 and draw_down_fee (defined in ExtendedPairVault) is 1%
              then 990000 will be given to the vault owner and 10000 will be collected in the collector module.
            </li>
          </ol>
        </li>
        <li>
          <p>Deposit Collateral in Existing CDP</p>
          <pre>
            {`message MsgDepositRequest {
 string from 
 uint64 app_id
 uint64 extended_pair_vault_id 
 string user_vault_id 
 string amount }`}
          </pre>
          <p>MsgDepositRequest</p>
          <ol type="a">
            <li>Vault owners can deposit extra collateral which inturn increases vault collateralization ratio.</li>
            <li>user_vault_id: unique vault_id created using MsgCreateRequest.</li>
          </ol>
        </li>
        <li>
          <p><u>Withdraw Collateral From Existing CDP</u></p>
          <pre>
            {`message MsgWithdrawRequest {
 string from
 uint64 app_id  
 uint64 extended_pair_vault_id 
 string user_vault_id 
 string amount 
}
`}
          </pre>
          <p>MsgWithdrawRequest</p>
          <ol type="a">
            <li>Vault owners can withdraw their collateral from the vault.</li>
            <li>The vault collateralization ratio should be above the min_cr even after the withdrawal request else it is bound to fail.</li>
            <li>amount: collateral asset amount to be withdrawn</li>
          </ol>
        </li>
        <li>
          <p><u>Draw Debt From Existing CDP</u></p>
          <pre>
            {`message MsgDrawRequest {
 string from 
 uint64 app_id 
 uint64 extended_pair_vault_id 
 string user_vault_id 
 string amount 
}
`}
          </pre>
          <p>MsgDrawRequest</p>
          <ol type="a">
            <li>Get more borrowed asset from the vault i.e</li>
            <li>amount: borrowed asset amount to draw</li>
            <li>The vault collateralization ratio should be above the min_cr even after the draw request else it is bound to fail.</li>
          </ol>
        </li>
        <li>
          <p><u>Repay Debt in Existing CDP</u></p>
          <pre>
            {`message MsgRepayRequest {
 string from 
 uint64 app_id 
 uint64 extended_pair_vault_id 
 string user_vault_id 
 string amount }`}
          </pre>
          <p>MsgRepayRequest</p>
          <ol type="a">
            <li>Vault owners can repay their debt which will increase the collateralization ratio.</li>
            <li>amount:  borrowed asset amount to repay</li>
            <li>The difference between amount to be repaid and vault debt must be greater than the debt floor i.e
              <br />
              For example , if debt_floor (defined in extended pair vault) = 2000000
              <div className="pl-4">
                amount _out+stability_fee_accumulated (vault debt) =5000000
                Then maximum of 3000000 amount can only be repaid
              </div>
            </li>
            <li>Amount repaid is then burned.</li>
          </ol>
        </li>
        <li>
          <p><u>Close CDP</u></p>
          <pre>
            {`message MsgCloseRequest {
 string from 
 uint64 app_id  
 uint64 extended_pair_vault_id 
 string user_vault_id }`}
          </pre>
          <p>MsgCloseRequest</p>
          <ol>
            <li>Vault owner can close the vault by paying the entire debt   (amount_out+stability_fee_accumulated+closing_fee_accumulated)</li>
            <li>Collateral is returned to the user on successful vault closure.</li>
            <li>Stability_fee_accumulated+closing_fee_accumulated is sent to the collector module</li>
            <li>amount_out is burned</li>
          </ol>
        </li>
        <li>
          <p><u>Create New Stable Mint Vault</u></p>
          <pre>
            {`message MsgCreateStableMintRequest {
 string from 
 uint64 app_id 
 uint64 extended_pair_vault_id 
 string amount }`}
          </pre>
          <p>MsgCreateStableMintVault</p>
          <ol type="a">
            <li>Can only be created once for an extended_pair_vault_id</li>
            <li>Can only be created id is_stable_mint_vault flag is true in extended_pair_vault</li>
            <li>Asset Borrowed at 1:1 ratio of collateral.</li>
          </ol>
        </li>
        <li>
          <p><u>Deposit in Existing Stable Mint Vault</u></p>
          <pre>
            {`message MsgDepositStableMintRequest {
 string from  
 uint64 app_id   
 uint64 extended_pair_vault_id 
 string amount 
 string stable_vault_id }`}
          </pre>
          <p>MsgDepositStableMintRequest</p>
          <ol type="a">
            <li>Users can deposit the collateral to mint the borrowed asset at 1:1 ratio.</li>
            <li>The draw_down_fee is sent to the collector.</li>
          </ol>
        </li>
        <li>
          <p><u>Withdraw From Existing Stable Mint Vault</u></p>
          <pre>
            {`message MsgWithdrawStableMintRequest {
 string from  
 uint64 app_id  
 uint64 extended_pair_vault_id 
 string amount 
 string stable_vault_id }`}
          </pre>
          <p>MsgWithdrawStableMintRequest</p>
          <ol type="a">
            <li>Users can withdraw their collateral by burning the borrowed asset at 1:1 ratio.</li>
          </ol>
        </li>
      </ol>

      <h3>3. Collector Module: x/collector</h3>
      <h4>ABSTRACT:</h4>
      <p>
        Collector module keeps track of protocol earning via penalty,opening/closing fee etc.Collector keeps track of app earning for each individual asset .Protocol can decide to use the excess fund for rewarding locker depositors or distribute the surplus to veHarbor holders and can also participate in debt auction if protocol is deficit of funds for an asset and app.
      </p>

      <h4>STATE:</h4>

      <ol type="1">
        <li>
          <p><u>Track fee collector from various sources app and asset wise</u></p>
          <pre>
            {`message AppIdToAssetCollectorMapping {
 uint64 app_id 
 repeated AssetIdCollectorMapping asset_collector 
}


message AssetIdCollectorMapping {
 uint64 asset_id 
 CollectorData collector 
}

message CollectorData {
 string collected_stability_fee 
 string collected_closing_fee 
 string collected_opening_fee
 string liquidation_rewards_collected 
}
`}
          </pre>
          <p>AppIdToAssetCollectorMapping</p>
          <ol type="a">
            <li>Keeps track on the different fees collected by protocol(historical data)</li>
            <li>Asset_id in the mapping is also used as collector_asset_id in CollectorLookup below.</li>
          </ol>
        </li>
        <li>
          <p>Track net fee collected in by app and asset wise</p>
          <pre>
            {`message NetFeeCollectedData {
 uint64 app_id 
 repeated AssetIdToFeeCollected assetIdToFeeCollected 
}


message AssetIdToFeeCollected {
 uint64 asset_id 
 string net_fees_collected
}
`}
          </pre>
          <p> Tracks net fee collected by an asset id for an app.</p>
        </li>
        <li>
          <p><u>Stores various params with app and asset wise</u></p>
          <pre>
            {`message CollectorLookup {
 uint64 app_id 
 repeated CollectorLookupTable asset_rate_info }

message CollectorLookupTable {
 uint64 app_id 
 uint64 collector_asset_id 
 uint64 secondary_asset_id 
 uint64 surplus_threshold 
 uint64 debt_threshold 
 string locker_saving_rate 
 uint64 lot_size 
 string bid_factor 
 uint64 debt_lot_size 
}
`}
          </pre>
          <p>CollectorLookupTable:</p>
          <ol type="a">
            <li>collector_asset_id:  The collector asset id </li>
            <li>secondary _asset_id : A secondary asset_id minted through tokenmint module </li>
            <li>surplus_Threshold: the maximum net_fee collected in order to trigger surplus auction(in terms of collector_asset_id)</li>
            <li>debt_threshold: the minimum net_fee collected for collector_asset_id for which a debt auction can be triggered (in terms of collector_asset_id)</li>
            <li>lot_size: the amount of collector_asset_id in auction (in terms of collector_asset_id)</li>
            <li>debt_lot_size: starting amount of secondary_asset_id for debt auction</li>
            <li>State is set via contract governance the wasm bindings</li>
          </ol>
        </li>
        <li>
          <p><u>Set Auction params app and asset wise</u></p>
          <pre>
            {`message CollectorAuctionLookupTable {
 uint64 app_id 
 repeated AssetIdToAuctionLookupTable assetIdToAuctionLookup 
}
`}
          </pre>
          <pre>
            {`message AssetIdToAuctionLookupTable {
 uint64 asset_id 
 bool is_surplus_auction 
 bool is_debt_auction 
 bool is_auction_active
 bool asset_out_oracle_price 
 uint64 asset_out_price 
}
`}
          </pre>
          <p>CollectorAuctionLookupTable:</p>
          <ol type="a">
            <li>asset_id:  The collector_asset_id for which the auction lookup is defined</li>
            <li>is_surplus_auction : boolean flag to check if surplus auction is enabled for the asset_id and app_id</li>
            <li>is_debt_auction: boolean flag to check if debt auction is enabled for the asset_id and app_id</li>
            <li>is_action_active: boolean flag to check if either surplus or debt auction is ongoing or not .</li>
            <li>asset_out_oracle_price: boolean flag to check if price to consider from oracle or not (true if need consider from market oracles)</li>
            <li>asset_out_price: price of asset_id if asset_out_oracle_price is false </li>
            <li>State is set via contract governance the wasm bindings.</li>
          </ol>
        </li>
      </ol>

      <h3>4.  Locker Module: x/locker</h3>
      <h4>ABSTRACT:</h4>
      <p>Locker module enables the user to deposit a whitelisted asset for an app and earn rewards on it . The rewards comes from collector module and is distributed to the locker depositor per block basis for a fixed annual rate (locker_saving_rate , defined in collector lookup for an app_id and asset_id(collector_asset_id))</p>

      <h4>STATE:</h4>

      <ol type="1">
        <li>
          <pre>{`message Locker {
 string locker_id 
 string depositor 
 string returns_accumulated 
 string net_balance 
 uint64 asset_deposit_id
 bool is_locked 
 uint64 app_id
}
`}</pre>
          <p>Locker:</p>
          <ol type="a">
            <li>locker_id: unique locker id for an app</li>
            <li>depositor: locker owner address</li>
            <li>returns_accumulated: total rewards accumulated from collector </li>
            <li>net_balance: total balance in locker (including rewards)</li>
            <li>asset_deposit_id: asset id for with locker deposit is eligible</li>
            <li>is_locked: boolean flag to check </li>
          </ol>
        </li>
        <li>
          <pre>{`message UserLockerAssetMapping {
 string owner 
 repeated LockerToAppMapping  locker_app_mapping
}
 message LockerToAppMapping {
 uint64 app_id = 1;
 repeated AssetToLockerMapping user_asset_locker}
}
message AssetToLockerMapping{
 uint64 asset_id 
 string locker_id
 repeated UserTxData user_data
 }
 
message UserTxData{
 string tx_type 
 string amount 
 string balance 
}
`}</pre>
          <p>UserLockerAssetMapping</p>
          <ol type="a">
            <li>owner: locker owner address</li>
            <li>Keeps track of owner complete locker information across all apps including locker transaction history</li>
          </ol>
        </li>
        <li>
          <pre>
            {`message LockerLookupTable {
 uint64 app_id 
 repeated TokenToLockerMapping lockers 
 uint64 counter = 3;
}
message TokenToLockerMapping {
uint64 asset_id = 1;
repeated string locker_ids
 string deposited_amount 
}
`}
          </pre>
          <p>LockerLookupTable</p>
          <ol type="a">
            <li>Counter: global locker counter for lockers for an app</li>
            <li>deposited_amount: total deposited amount for an asset_id in an app.</li>
            <li>locker_ids: list of locker_ids for an asset_id and app_id</li>
          </ol>
        </li>
        <li>
          <pre>{`message LockerProductAssetMapping {
 uint64 app_id 
 repeated uint64 asset_ids 
}
`}</pre>
          <p>LockerProductAssetMapping: Contains list of asset_id for an app eligible for locker</p>
          <pre>{`message LockedDepositedAmountDataMap
{
 uint64 asset_id 
 string deposited_amount
}
`}</pre>
          <p>LockedDepositAmountDataMap: Total deposited amount for an asset_id</p>
          <pre>
            {`message LockerTotalRewardsByAssetAppWise {
 uint64 app_id 
 uint64 asset_id 
 string total_rewards
}
`}
          </pre>
          <p>LockerTotalRewardsByAssetAppWise: Total rewards distributed to locker owners for an asset_id and app_id</p>
        </li>
      </ol>

      <h3>Messages: </h3>

      <ol type="1">
        <li>
          <p><u>Create Locker for an asset</u></p>
          <pre>{`message MsgCreateLockerRequest{
 string depositor
 string amount 
 uint64 asset_id 
 uint64 app_id 
}
`}</pre>
          <p>MsgCreateLockerRequest: depositor can create a locker for an app_id and asset_id. <br />
            Locker can only be created once for an app_id and asset_id.
          </p>
        </li>
        <li>
          <p><u>Deposit Asset in Locker</u></p>
          <pre>
            {`message MsgDepositAssetRequest {
 string depositor 
 string locker_id 
 string amount 
 uint64 asset_id 
 uint64 app_id 
}
`}
          </pre>
          <p>MsgDepositAssetRequest: depositors can deposit an amount in  a locker for an app_id and asset_id.</p>
          <ol type="a">
            <li>locker_id: unique locker id generated on successful locker creation</li>
          </ol>
        </li>
        <li>
          <p><u>Withdraw Asset  from Locker</u></p>
          <pre>
            {` message MsgWithdrawAssetRequest {
string depositor
 string locker_id 
 string amount
 uint64 asset_id
 uint64 app_id
}
`}
          </pre>
          <p>MsgWithdrawAssetRequest: depositors can withdraw an amount from a locker for an app_id and asset_id.</p>
          <ol type="a">
            <li>locker_id: unique locker id generated on successful locker creation</li>
          </ol>
        </li>
      </ol>

      <h3>Tokenmint Module: x/tokenmint</h3>
      <h4>Abstract:</h4>
      <p>Tokenmint module lets apps create their own tokens with a genesis supply . An app that wished to create their own governance token can create the same via this module.Only one covernance token can exist for an app whereas multiple non governance token can exist for a app. Tokenmint is solely  responsible for minting and burning these tokens .</p>
      <h4>STATE:</h4>

      <ol type="1">
        <li>
          <p><u>Stores Minted token data app and asset wise</u></p>
          <pre>{`message TokenMint{
 uint64 app_id 
 repeated MintedTokens minted_tokens }
 
message MintedTokens{
   uint64 asset_id 
   string genesis_supply 
 string current_supply
}
`}</pre>
          <p>TokenMint: Keeps track of genesis and current supply of token minted through an app.</p>
        </li>
      </ol>

      <h4>MESSAGE:</h4>
      <ol type="1">
        <li>
          <p><u>Mints new Token</u></p>
          <pre>
            {`message MsgMintNewTokensRequest {
   string from  
   uint64 app_id  
   uint64 asset_id }`}
          </pre>
          <p>The recipient mapped in MintGenesisToken(Asset Module) can mint the genesis token to its address.</p>
        </li>
      </ol>

      <h3>6. Auction Module: x/auction</h3>
      <h4>ABSTRACT:</h4>
      <p>
        Auction module holds the key functionality for creating /managing auctions across all apps.
        <br />
        The auction module has three distinct auction model
      </p>
      <ol type="a">
        <li><b>Dutch Auction:</b> Collateral auctions for the liquidated vaults take place via this mechanism.Bidders can bid for partial collateral at a price that keeps varying with auction duration starting with a high price and decreasing linearly.</li>
        <li><b>Surplus Auction(English Auction):</b> Excess surplus of  an asset (collector_asset_id in CollectorLookupTable in Collector module)  is auctioned off for an increasing amount of secondary_asset_id .After the completed auction duration the excess surplus is sent to bidder with highest amount of secondary_asset_id bid.The amount of  secondary_asset_id bid received is the burned via tokenmint module .</li>
        <li><b>Debt Auction(Reverse Auction):</b> When protocol runs in debt for an asset_id(collector_asset_id in CollectorLookupTable in Collector module) , the debt auction can be triggered to accumulate collector_asset_id for which bidders bids against decreasing amount of secondary_asset_id.Once auction duration is completed , the bidder with lowest bid for secondary_asset_id wins the bid and protocol mints the bid amount of secondary_asset_id for the winner.</li>
      </ol>

      <h4>STATE:</h4>
      <ol type="1">
        <li>
          <p><u>Surplus Auction Data</u></p>
          <pre>
            {`message SurplusAuction {
   uint64 auction_id 
   cosmos.base.v1beta1.Coin sell_token
   cosmos.base.v1beta1.Coin buy_token 
   uint64 active_bidding_id
   string bidder 
   cosmos.base.v1beta1.Coin bid
   google.protobuf.Timestamp end_time
   string bid_factor 
   repeated bidOwnerMapping bidding_ids 
   uint64 auction_status 
   uint64 app_id 
   uint64 asset_id 
   uint64 auction_mapping_id 
   uint64 asset_in_id 
   uint64 asset_out_id 
   google.protobuf.Timestamp bid_end_time  }`}
          </pre>
          <p>Surplus Auction:</p>
          <ol type="a">
            <li>auction_id: unique surplus auction id for an app</li>
            <li>sell_token: Asset which is up for auction</li>
            <li>buy_token: Asset to be received from auction</li>
            <li>active_bidding_id: bidding id counter</li>
            <li>bidder: last bidder address</li>
            <li>bid: last bid amount</li>
            <li>end_time: auction end time</li>
            <li>bid_factor:The min ratio of difference between two consecutive bids</li>
            <li>bidding_ids: history of bidders in this auction</li>
            <li>auction_status: tracks if auction is active/inactive</li>
            <li>app_id:  unique app id</li>
            <li>asset_id: matches with collector asset id</li>
            <li>auction_mapping_id: auction mapping id for surplus auction</li>
            <li>asset_in_id: Asset to be received from auction</li>
            <li>asset_out_id: Asset which is up for auction</li>
            <li>bid_end_time: next bid end time </li>
          </ol>
        </li>
        <li>
          <p><u>Debt Auction Data</u></p>
          <pre>
            {`message DebtAuction {
   uint64 auction_id 
   cosmos.base.v1beta1.Coin auctioned_token 
   cosmos.base.v1beta1.Coin expected_user_token 
   cosmos.base.v1beta1.Coin expected_minted_token
   google.protobuf.Timestamp end_time 
   uint64 active_bidding_id 
   string bidder 
   cosmos.base.v1beta1.Coin current_bid_amount 
   uint64 auction_status
   uint64 app_id 
   uint64 asset_id
   repeated bidOwnerMapping bidding_ids 
   uint64 auction_mapping_id
   string bid_factor 
   uint64 asset_in_id 
   uint64 asset_out_id 
   google.protobuf.Timestamp bid_end_time
}
`}
          </pre>
          <p>Debt Auction:</p>
          <ol type="a">
            <li>auction_id: unique debt auction id</li>
            <li>auctioned_token: Asset which is up for auction</li>
            <li>expected_user_token: Asset to be received from auction</li>
            <li>expected_minted_token: tracks minted amount</li>
            <li>end_time: auction end time</li>
            <li>active_bidding_id: bidding id counter</li>
            <li>bidder: last bidder address</li>
            <li>current_bid_amount: current bid amount</li>
            <li>auction_status: tracks if auction is active/inactive</li>
            <li>app_id: unique app id</li>
            <li>asset_id: matches with collector asset id</li>
            <li>bidding_ids: history of bidders in this auction</li>
            <li>auction_mapping_id: auction mapping id for debt auction</li>
            <li>bid_factor:The min ratio of difference between two consecutive bids</li>
            <li>asset_in_id: Asset to be received from auction</li>
            <li>asset_out_id: Asset which is up for auction</li>
            <li>bid_end_time: next bid end time </li>
          </ol>
        </li>
        <li>
          <p>Dutch Auction Data</p>
          <pre>
            {`message DutchAuction {
   uint64 auction_id 
   cosmos.base.v1beta1.Coin outflow_token_init_amount 
   cosmos.base.v1beta1.Coin outflow_token_current_amount
   cosmos.base.v1beta1.Coin inflow_token_target_amount
   cosmos.base.v1beta1.Coin inflow_token_current_amount
   string outflow_token_initial_price 
   string outflow_token_current_price 
   string outflow_token_end_price 
   string inflow_token_current_price 
   google.protobuf.Timestamp end_time
   uint64 auction_status 
   google.protobuf.Timestamp start_time
   repeated bidOwnerMapping bidding_ids
   uint64 auction_mapping_id 
   uint64 app_id
   uint64 asset_in_id 
   uint64 asset_out_id 
   uint64 locked_vault_id 
   string vault_owner
   string liquidation_penalty
`}
          </pre>
          <p><u>Dutch Auction:</u></p>
          <ol type="a">
            <li>Auction_id: unique debt auction id</li>
            <li>Outflow_token_init_amout: initial amount of the collateral up for auction</li>
            <li>Outflow_token_current_amout: amount of the collateral left in the auction</li>
            <li>Inflow_token_target_amout: total debt amount to the received </li>
            <li>Inflow_token_current_amout: debt amount received till now</li>
            <li>Outflow_token_initial_price: initial price of the collateral token</li>
            <li>Outflow_token_current_price: current price of the collateral token</li>
            <li>Outflow_token_end_price: end price of the collateral token</li>
            <li>Inflow_token_current_price: current price of the debt token</li>
            <li>End_price: end price of the collateral for the auction</li>
            <li>Auction_status: tracks if auction is active/inactive</li>
            <li>Start_time: Start time of auction</li>
            <li>Bidding_ids: history of bidders in this auction</li>
            <li>Auction_mapping_id: auction mapping id for dutch auction</li>
            <li>App_id: unique app id</li>
            <li>Asset_in_id: debt token id</li>
            <li>Asset_out_id: collateral token id</li>
            <li>Locked_vault_id: locked vault id </li>
            <li>Vault_owner: address of the owner whose vault has been liquidated</li>
            <li>Liquidation_penalty: liquidation penalty to be deduced from the vault owner </li>
          </ol>
        </li>
        <li>
          <p> Protocol Statistics </p>
          <pre>
            {`message ProtocolStatistics {
   uint64 app_id 
   uint64 asset_id
   string loss }`}
          </pre>
          <p>Protocol Stats:</p>
          <ol type="a">
            <li>App_id; unique app id</li>
            <li>Asset_id: asset id</li>
            <li>Loss: tracks the loss which the protocol has encountered</li>
          </ol>
        </li>
        <li>
          <p><u>Auction params Data</u></p>
          <pre>
            {`message AuctionParams{
   uint64 app_id 
   uint64 auction_duration_seconds
   string buffer 
   string cusp 
   string step 
   uint64 price_function_type 
   uint64 surplus_id 
   uint64 debt_id 
   uint64 dutch_id 
   uint64 bid_duration_seconds
}
`}
          </pre>
          <p>Auction Prams:</p>
          <ol type="a">
            <li>App_id: unique app id</li>
            <li>Auction_duration_seconds: sets auction duration</li>
            <li>Buffer:The ratio of initial price to start the auction with.</li>
            <li>Cusp:The ratio of initial price to end the auction with.</li>
            <li>Step: Length of time between price drops</li>
            <li>Price_function_type: defines the price function type used for decrease auction</li>
            <li>Surplus_id: sets the surplus auction id</li>
            <li>Debt_id: sets the surplus debt id</li>
            <li>Dutch_id: sets the dutch auction id</li>
            <li>Bid_duration_seconds: defines the bid duration between 2 bids for which auction should be active</li>
          </ol>
        </li>
        <li>
          <p><u>Surplus biddings data</u></p>
          <pre>
            {`message SurplusBiddings {
   uint64 bidding_id 
   uint64 auction_id 
   string auction_status 
   cosmos.base.v1beta1.Coin auctioned_collateral 
   string bidder 
   cosmos.base.v1beta1.Coin bid 
   google.protobuf.Timestamp bidding_timestamp 
   string bidding_status 
   uint64 auction_mapping_id
   uint64 app_id }
`}
          </pre>
          <p><u>Surplus biddings data:</u></p>
          <ol type="a">
            <li>Bidding_id: bidding id of surplus auction</li>
            <li>Auction_id: auction id for the bidding</li>
            <li>Auction_status: tracks if auction is active/inactive</li>
            <li>Auctioned_collateral: auctioned asset</li>
            <li>Bidder: bidder address</li>
            <li>Bid:  bid amount of this bidding</li>
            <li>Bidding_timestamp: bid timestamp</li>
            <li>Bidding_status:  tracks if bid is placed/rejected/success</li>
            <li>Auction_mapping_id: auction mapping id for surplus auction</li>
            <li>App_id: unique app id</li>
          </ol>
        </li>
        <li>
          <p><u>Debt biddings Data</u></p>
          <pre>
            {`message DebtBiddings {
   uint64 bidding_id 
   uint64 auction_id 
   string auction_status 
   cosmos.base.v1beta1.Coin outflow_tokens 
   string bidder 
   cosmos.base.v1beta1.Coin bid 
   google.protobuf.Timestamp bidding_timestamp 
   uint64 app_id }
   string bidding_status 
   uint64 auction_mapping_id `}
          </pre>
          <p><u>Surplus biddings data:</u></p>
          <ol type="a">
            <li>Bidding_id:  bidding id of debt auction</li>
            <li>Auction_id:  auction id for the bidding</li>
            <li>Auction_status:  tracks if auction is active/inactive</li>
            <li>Outflow_tokens: auctioned asset</li>
            <li>Bidder:  bidder address</li>
            <li>Bid: bid amount of this bidding</li>
            <li>Bidding_timestamp: bid timestamp</li>
            <li>App_id: unique app id</li>
            <li>Bidding_status: tracks if bid is placed/rejected/success</li>
            <li>Auction_mapping_id: auction mapping id for surplus auction</li>
          </ol>
        </li>
        <li>
          <p><u>Dutch biddings Data</u></p>
          <pre>
            {`message DutchBiddings {
   uint64 bidding_id 
   uint64 auction_id 
   string auction_status
   cosmos.base.v1beta1.Coin outflow_token_amount 
   cosmos.base.v1beta1.Coin inflow_token_amount
   string bidder 
   google.protobuf.Timestamp bidding_timestamp 
   string bidding_status
   uint64 auction_mapping_id 
   uint64 app_id 
}
`}
          </pre>
          <p><u>Dutch biddings data:</u></p>
          <ol type="a">
            <li>Bidding_id:  bidding id of dutch auction</li>
            <li>Auction_id:  auction id for the bidding</li>
            <li>Auction_status:  tracks if auction is active/inactive</li>
            <li>Outflow_tokens_amount: auctioned asset amount</li>
            <li>Inflow_token_amount: debt asset amount</li>
            <li>Bidder:  bidder address</li>
            <li>Bidding_timestamp: bid timestamp</li>
            <li>Bidding_status: tracks if bid is placed/rejected/success</li>
            <li>Auction_mapping_id: auction mapping id for surplus auction</li>
            <li>App_id: unique app id</li>
          </ol>
        </li>
        <h4>MESSAGES:</h4>
        <ol type="1">
          <li>
            <p><u>Place Surplus Auction Bid</u></p>
            <pre>
              {`message MsgPlaceSurplusBidRequest {
   uint64 auction_id 
   string bidder 
   cosmos.base.v1beta1.Coin amount 
   uint64 app_id 
   uint64 auction_mapping_id
`}
            </pre>
            <p>MsgPlaceSurplusBidRequest: bidders can bid an amount for a surplus auction in terms of the asset that protocol is accepting.</p>
          </li>
          <li>
            <p><u>Place Debt Auction Bid</u></p>
            <pre>{`message MsgPlaceDebtBidRequest {
   uint64 auction_id 
   string bidder 
   cosmos.base.v1beta1.Coin bid 
   cosmos.base.v1beta1.Coin expectedUserToken 
   uint64 app_id 
   uint64 auction_mapping_id }`}</pre>
            <p>
              MsgPlaceDebtBidRequest: bidders can bid an amount for a debt auction in terms of the asset that protocol is accepting.
            </p>
          </li>
          <li>
            <p><u>Place Dutch Auction Bid</u></p>
            <pre>
              {`message MsgPlaceDutchBidRequest {
   uint64 auction_id 
   string bidder 
   cosmos.base.v1beta1.Coin amount 
   string max
   uint64 app_id 
   uint64 auction_mapping_id }`}
            </pre>
            <p>
              MsgPlaceDutchBidRequest: bidders can bid an amount for a dutch auction in terms of how much collateral they want to buy and the max price that should be greater than current price of collateral.
            </p>
          </li>
        </ol>
      </ol>

      <h3>7. Rewards Module: x/rewards</h3>
      <h4>STATE:</h4>
      <pre>
        {`message EpochInfo {
   google.protobuf.Timestamp start_time 
   google.protobuf.Duration duration 
   int64 current_epoch 
   int64 current_epoch_start_height 
}
`}
      </pre>

      <pre>
        {`message Gauge {
   uint64 id 
   string from 
   google.protobuf.Timestamp created_at 
   google.protobuf.Timestamp start_time
   uint64 gauge_type_id 
   google.protobuf.Duration trigger_duration
   cosmos.base.v1beta1.Coin deposit_amount 
   uint64 total_triggers 
   uint64 triggered_count 
   cosmos.base.v1beta1.Coin distributed_amount
   bool is_active
   bool for_swap_fee 
   oneof kind {
     LiquidtyGaugeMetaData liquidity_meta_data 
   }
   uint64 app_id }`}
      </pre>

      <pre>
        {`message GaugeByTriggerDuration {
   repeated uint64 gauge_ids
}
`}
      </pre>

      <pre>
        {`message Internal_rewards{
 uint64 app_mapping_ID
 repeated uint64 asset_ID 
}
`}
      </pre>

      <pre>{`message Locker_external_rewards{
 uint64 id 
 uint64 app_mapping_id
 uint64 asset_id 
 cosmos.base.v1beta1.Coin total_rewards 
 int64 duration_days
 bool is_active 
 cosmos.base.v1beta1.Coin available_rewards  
 string depositor
 google.protobuf.Timestamp start_timestamp
 google.protobuf.Timestamp end_timestamp 
 int64 min_lockup_time_seconds 
 uint64 epoch_id }
`}</pre>

      <pre>{`message Vault_external_rewards{
 uint64 id 
 uint64 app_mapping_id
 uint64 extended_Pair_Id
 cosmos.base.v1beta1.Coin total_rewards
 int64 duration_days 
 bool is_active 
 cosmos.base.v1beta1.Coin available_rewards
 string depositor 
 google.protobuf.Timestamp start_timestamp 
 google.protobuf.Timestamp end_timestamp 
 int64 min_lockup_time_seconds 
 uint64 epoch_id }`}</pre>

      <pre>{`message WhitelistedAppIdsVault{
 repeated uint64 whitelisted_app_mapping_ids_vaults }
 
message EpochTime{
 uint64 id 
 uint64 app_mapping_id 
 int64 starting_time
 uint64 count 
}
`}</pre>

      <h3>8. Liquidation Module: x/liquidation</h3>
      <h4>Abstract:</h4>
      <p>
        Liquidation module handles the vaults that have been liquidated ( i.e collateralization ratio falls below the minimum collateralization ratio).A locked vault is created once a vault is liquidated and the vault owner will have no access to the vault to perform any action.
        <br />
        Apps can decide to enable/disable liquidations for their apps through the governance proposal in smart contracts.
      </p>

      <h4>STATE:</h4>
      <pre>
        {`message LockedVault {
 uint64 id 
 uint64 app_id 
 string app_vault_type_id
 string original_vault_id
 uint64 extended_pair_vault_id
 string owner 
 string amount_in
 string amount_out
 //updated_amount_out = amount_out + interest_accumulated + opening_fee_accumulated
 // + closing_fee_accumulated
 string updated_amount_out 
 string initiator
 bool is_auction_complete
 string cr_at_liquidation
 string current_collateralisation_ratio
 string collateral_to_be_auctioned
 google.protobuf.Timestamp liquidation_timestamp 
 repeated string selloff_history
 string interest_accumulated
oneof kind {
    BorrowMetaData borrow_meta_data
  }
}
`}
      </pre>

      <p>		Here oneof Kind sets the additional parameters of the lend module to the liquidation Module - lockedVaults. Borrow Positions are liquidated and then a locked vault for borrow is created. While in auction there is a check for this kind, if it’s not nil then it will create auction specifically for the borrow position.</p>

      <pre>
        {`message LockedVaultToAppMapping {
 uint64 app_id 
 repeated LockedVault locked_vault
}
`}
      </pre>

      <pre>{`message WhitelistedAppIds{
 repeated uint64 whitelisted_app_ids 
 }
 
message BorrowMetaData {
  uint64 lending_id 
  bool is_stable_borrow 
  string stable_borrow_rate 
  cosmos.base.v1beta1.Coin bridged_asset_amount 
}
`}</pre>

      <p>
        LockedVaultToAppMapping:Maps list of LockedVaults for an app. <br />
        BorrowMetaData: It stores the additional info of the borrow positions from the Lend Module.
      </p>

      <h3>9. BandOracle Module: x/bandoracle</h3>
      <h4>Abstract:</h4>

      <p>Bandoracle module fetches the prices of assets. A band packet is created containing the list of assets symbols for which price is to be fetched. Then the packet is relayed to the band chain (through a relayer), where the request is acknowledged, and the price is validated. Following this, the price is being sent to our chain through the packets using the same channel. After receiving the packets, the prices are mapped to the corresponding assets. The packets are relayed after every 20 blocks; hence prices are updated after every 20 blocks.</p>

      <h4>STATE:</h4>

      <pre>{`message FetchPriceCallData {
 repeated string symbols 
 uint64 multiplier
}
`}</pre>

      <pre>{`message FetchPriceResult {
 repeated uint64 rates 
}
`}</pre>

      <pre>
        {`message Market {
 string symbol  
 uint64 script_id
}
`}
      </pre>

      <h3>Market Module: x/market</h3>
      <h4>Abstract:</h4>
      <p>Market module sets the price fetched by Bandoracle module into the market module. After the price being set all the modules fetch the price using this module.</p>
      <h3>STATE:</h3>

      <ol type="1">
        <li>
          <p><u>Market</u></p>
          <pre>
            {`message Market {
 string symbol 
 uint64 script_id 
 uint64 rates
}
`}
          </pre>
          <p>
            A Market is a struct that adds the latest price fetched from the oracles to a particular asset and the oracle script Id used to bring the price.
          </p>
        </li>
      </ol>

      <h3>ESM Module : x/esm</h3>
      <p> Emergency Shutdown is triggered in the case of serious emergencies, such as long-term market irrationality, hacks, or security breaches.Emergency Shutdown stops and gracefully settles the Protocol.Emergency shutdown is triggered by the protocol’s holders by burning their governance token. Once the target amount is reached , users can trigger the ESM via tx command. </p>

      <h4>ABSTRACT:</h4>
      <h4>STATE:</h4>

      <ol type="1">
        <li>
          <p><u>ESMTriggerParams:</u> Defining the deposit token target value and cool off period of ESM for an app</p>
          <pre>{`message ESMTriggerParams {
 uint64 app_id 
 cosmos.base.v1beta1.Coin target_value 
 uint64 cool_off_period 
}
`}</pre>
        </li>
        <li>
          <p><u>CurrentDepositStats :</u> Stores the current deposit stats for the token app wise </p>
          <pre>{`message CurrentDepositStats{
 uint64 app_id 
 cosmos.base.v1beta1.Coin balance 
}
`}</pre>
        </li>
        <li>
          <p><u>ESMStatus :</u> ESM parms which specifies the start and end time (cool off period) with status and address of the executor of ESM </p>
          <pre>{`message ESMStatus{
 uint64 app_id 
 string executor 
 bool status 
 google.protobuf.Timestamp start_time 
 google.protobuf.Timestamp end_time 
}
`}</pre>
        </li>
        <li>
          <p><u>KillSwitchParams :</u> stores if kill switch is enabled for an app or not</p>
          <pre>{`message KillSwitchParams{
 uint64 appId
 bool breaker_enable 
}
`}</pre>
        </li>
        <li>
          <p><u>Stores information about deposit and depositor</u></p>
          <pre>{`message UsersDepositMapping{
 uint64 app_id 
 string depositor 
 cosmos.base.v1beta1.Coin deposits 
}
`}</pre>
        </li>
        <li>
          <p><u>Stores freezed market price that gets sets at the time when ESM is triggered</u></p>
          <pre>{`message ESMMarketPrice{
 uint64 appId 
 bool isPriceSet 
 repeated Market market 
}
`}</pre>

          <pre>{`message Market {
 uint64 asset_id 
 uint64 rates
}
`}</pre>
        </li>
      </ol>

      <h4>MESSAGES:</h4>

      <ol type="1">
        <li>
          <p><u>MsgDepositESM:</u> Enables user to deposit token for ESM process</p>
          <pre>{`message MsgDepositESM {
 uint64                   app_id = 1;
 string                depositor = 2;
 cosmos.base.v1beta1.Coin amount 
}
`}</pre>
        </li>
        <li>
          <p><u>MsgExecuteESM :</u> Anyone can execute ESM when Target value is reached</p>
          <pre>{`message MsgExecuteESM {
 uint64                   app_id = 1;
 string                depositor = 2;
}
`}</pre>
        </li>
        <li>
          <p><u>MsgKillRequest:</u> The authorized one can trigger kill switch which stops the protocol</p>
          <pre>{`message MsgKillRequest {
 string from 
 KillSwitchParams killSwitchParams 
}
`}</pre>
        </li>
      </ol>

      <BottomNav
        preNavLink="Faq"
        prevNavText="Faq"
      />

    </div>
  );
};

export default SecurityDeveloperDocs;