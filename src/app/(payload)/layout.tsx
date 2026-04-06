import React from 'react'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'
import { importMap } from './admin/importMap'
import '@payloadcms/next/css'
import './admin-override.css'
import type { ServerFunctionClientArgs } from 'payload'

type Args = {
  children: React.ReactNode
}

const serverFunction = async ({ name, args }: ServerFunctionClientArgs) => {
  'use server'
  return handleServerFunctions({ name, args, config: configPromise, importMap })
}

export default function PayloadLayout({ children }: Args) {
  return (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
