import { Web3Storage } from 'web3.storage'

export const uploadToWeb3Storage = async (file: any) => {
  const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE ?? '' })
  const blob = new Blob([JSON.stringify(file)], { type: 'application/json'})
  const data = [
    new File([blob], 'siganon.json')
  ]

  const cid = await client.put(data)
  return cid
}
