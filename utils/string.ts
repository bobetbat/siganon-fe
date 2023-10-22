import { Hash } from "../types"

export const short: (hash: string | Hash) => string = (hash) => {
  return hash.slice(0, 5) + '...' + hash.slice(-4)
}

export function base64ToBytes32(base64String: any) {
  const parts = base64String.split(";base64,");
  const base64Data = parts[1];

  const binaryString = window.atob(base64Data);

  const encoder = new TextEncoder();
  const byteArray = encoder.encode(binaryString);

  const bytes32Array = new Uint8Array(byteArray.buffer, 0, 32);

  return bytes32Array;
}

export const stringify: typeof JSON.stringify = (value, replacer, space) =>
  JSON.stringify(
    value,
    (key, value_) => {
      const value = typeof value_ === 'bigint' ? value_.toString() : value_
      return typeof replacer === 'function' ? replacer(key, value) : value
    },
    space,
  )


export interface BenchmarkedResult<T> {
  duration: string;
  result: T;
}

export async function benchmark<T>(fn: () => Promise<T>): Promise<BenchmarkedResult<T>> {
  const t0 = performance.now();
  const result = await fn();
  const t1 = performance.now();

  return {
      duration: (t1 - t0) + " ms",
      result
  };
}
