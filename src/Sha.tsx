import { useState } from 'react'
import { HmacSHA256, enc } from 'crypto-js'

export default function Sha() {
  const [p, useP] = useState('')
  const [s, useS] = useState('')
  const [h, useH] = useState('')

  return (
    <>
      <h2>HMAC-SHA-256</h2>
      <div>
        <label htmlFor='plane'>평문</label>
        <input
          type='text'
          name='plane'
          id='plane'
          onChange={e => {
            useP(e.target.value)
          }}
          value={p}
        />
      </div>
      <div>
        <label htmlFor='secret'>비밀키</label>
        <input
          type='text'
          name='secret'
          id='secret'
          onChange={e => {
            useS(e.target.value)
          }}
          value={s}
        />
      </div>
      <div>
        <label htmlFor='result'>결과</label>
        <input
          disabled
          type='text'
          name='result'
          id='result'
          value={HmacSHA256(p, s).toString(enc.Hex)}
        />
      </div>
      <div>
        <label htmlFor='hash'>해시값</label>
        <input
          type='text'
          name='hash'
          id='hash'
          onChange={e => {
            useH(e.target.value)
          }}
          value={h}
        />
      </div>
      <div>
        {HmacSHA256(p, s).toString(enc.Hex) == h ? (
          <button style={{ backgroundColor: '#6c6' }}>True</button>
        ) : (
          <button style={{ backgroundColor: 'orange' }}>False</button>
        )}
      </div>
    </>
  )
}
