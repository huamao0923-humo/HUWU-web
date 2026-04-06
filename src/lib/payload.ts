import { getPayload } from 'payload'
import { cache } from 'react'
import configPromise from '@payload-config'

// Module-level singleton — initialised once per server process
let payloadInstance: Awaited<ReturnType<typeof getPayload>> | null = null

async function initPayload() {
  if (!payloadInstance) {
    payloadInstance = await getPayload({ config: configPromise })
  }
  return payloadInstance
}

// cache() deduplicates calls within a single React render tree (one request)
export const getPayloadClient = cache(initPayload)
