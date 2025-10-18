export default function Bcrypt() {
  return (
    <>
      <h2>bcrypt</h2>
      <div>
        <label htmlFor='plane'>평문</label>
        <input type='text' name='plane' id='plane' />
      </div>
      <div>
        <label htmlFor='hash'>해시값</label>
        <input
          type='text'
          name='hash'
          id='hash'
          onChange={e => {
            console.log(e.target.value)
          }}
        />
      </div>
    </>
  )
}
