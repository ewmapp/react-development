import React from 'react'
import Head from 'next/head'
import { Spinner } from '../../packages/react/components/spinner/Spinner'
import { Button } from '../../packages/react/components/button/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div>
        <h1>Hello Word</h1>
      </div>
      <div>
        <Spinner />
      </div>
      <div>
        <Button loading>Teste</Button>
      </div>
    </>
  )
}
