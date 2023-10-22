import { Web3Storage } from 'web3.storage'

export const uploadToWeb3Storage = async (file: any) => {
  const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE ?? '' })
  console.log('file',file)
  const cid = await client.put([file])
  return cid
}
