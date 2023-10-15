import { SismoConnectButton, AuthType, SismoConnectConfig, SismoConnectResponse } from "@sismo-core/sismo-connect-react";

const appId = process.env.NEXT_PUBLIC_SISMO_APP_ID ?? '';
const config: SismoConnectConfig = {
  appId: appId,
}
const groupId = "0x93cbee3eb1c601c694d32ab9759c1e92"
export const SismoConnect = () => <SismoConnectButton
  // the client config created
  config={config}
  // request a proof of account ownership 
  // (here Vault ownership)
  auth={{ authType: AuthType.VAULT }}
  // request a proof of group membership 
  // (here the group with id 0x42c768bb8ae79e4c5c05d3b51a4ec74a)
  claim={{ groupId: groupId }}
  // request a message signature
  signature={{ message: "Your message" }}
  //  a response containing his proofs 
  onResponse={async (response: SismoConnectResponse) => {
    //Send the response to your server to verify it
    //thanks to the @sismo-core/sismo-connect-server package
  }}
  onResponseBytes={async (bytes: string) => {
    //Send the response to your contract to verify it
    //thanks to the @sismo-core/sismo-connect-solidity package
  }}
/>

// You can also create several auth and claim requests 
// in the same button

{/* <SismoConnectButton 
    config={config}
    // request multiple proofs of account ownership 
    // (here Vault ownership and Twitter account ownership)
    auths={[
        {authType: AuthType.VAULT},
        {authType: AuthType.TWITTER},
    ]}
    // request multiple proofs of group membership 
    // (here the groups with id 0x42c768bb8ae79e4c5c05d3b51a4ec74a and 0x8b64c959a715c6b10aa8372100071ca7)
    claims={[
        {groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a"},
        {groupId: "0x8b64c959a715c6b10aa8372100071ca7"}
    ]}
    signature={{message: "Your message"}}
    onResponse={async (response: SismoConnectResponse) => {
	//Send the response to your server to verify it
	//thanks to the @sismo-core/sismo-connect-server package
    }}
    onResponseBytes={async (bytes: string) => {
        //Send the response to your contract to verify it
        //thanks to the @sismo-core/sismo-connect-solidity package
    }}
/> */}
