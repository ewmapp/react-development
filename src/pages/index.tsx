/* (eslint@typescript-eslint/no-unsafe-assignment) */
import React from 'react'
import Head from 'next/head'
import { Heading } from '../../packages/react'

export default function Teste() {
  return (
    <div>
      <Head>
        <title>My page of test</title>
      </Head>
      <div>
        <Heading>Olá Mundo!</Heading>
      </div>
    </div>
  )
}
