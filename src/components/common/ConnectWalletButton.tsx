import { Button } from './Button'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { shortenEthAddress } from '@/utils/web3'

export function ConnectWalletButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        mounted,
        openAccountModal,
        openChainModal,
        openConnectModal,
      }) => {
        const connected = account && mounted && chain

        if (!connected) {
          return (
            <Button
              buttonType="primary"
              className="max-w-fit"
              text="Connect Wallet"
              onPress={openConnectModal}
            />
          )
        }

        if (chain.unsupported) {
          return (
            <Button
              buttonType="warning"
              className="max-w-fit"
              text="Wrong Network"
              onPress={openChainModal}
            />
          )
        }

        return (
          <Button
            buttonType="secondary"
            className="max-w-fit"
            text={shortenEthAddress(account.address as `0x${string}`)}
            onPress={openAccountModal}
          />
        )
      }}
    </ConnectButton.Custom>
  )
}
