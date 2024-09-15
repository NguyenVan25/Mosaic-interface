// hooks/useAnqaWallet.ts
import { useState, useEffect } from 'react'
import { WalletName } from '@aptos-labs/wallet-adapter-react'

const supportedWallets = {
  // Danh sách các ví được hỗ trợ, tương tự như ví dụ của bạn
  aptosConnectWallet,
  martianWallet,
  nightlyWallet,
  okxWallet,
  petraWallet,
  pontemWallet,
}

export default function useAnqaWallet() {
  const [connectedWallet, setConnectedWallet] = useState<WalletName | null>(null)

  const connect = async (wantedProvider: WalletName) => {
    // Giả lập kết nối với ví
    if (supportedWallets[wantedProvider]) {
      // Kiểm tra xem ví được hỗ trợ
      setConnectedWallet(wantedProvider)
      // Thực hiện các hành động sau khi kết nối (nếu cần)
      console.log(`Connected to: ${wantedProvider}`)
    } else {
      console.error(`Unsupported wallet: ${wantedProvider}`)
    }
  }

  // Kiểm tra kết nối ví (nếu cần)
  useEffect(() => {
    // Ví dụ: Kiểm tra kết nối ví mỗi 1 giây
    const intervalId = setInterval(() => {
      // Logic kiểm tra kết nối ví
      // Ví dụ: Kiểm tra biến toàn cục window.nightly, window.martian, v.v.
      // Nếu ví được kết nối, cập nhật connectedWallet
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return {
    connectedWallet,
    connect,
  }
}
